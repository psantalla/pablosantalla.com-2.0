import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import interlinker from "@photogabble/eleventy-plugin-interlinker";
import markdownIt from "markdown-it";

import pluginFilters from "./_config/filters.js";

export default async function(eleventyConfig) {
	// Draft posts - only show in development
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;

	// Add posts collection
	eleventyConfig.addCollection("posts", function(collectionApi) {
		return collectionApi.getFilteredByGlob("content/blog/*.md");
	});		}
	});

	// Configure markdown with custom external links
	const markdownLibrary = markdownIt({
		html: true,
		breaks: true,
		linkify: true
	});

	// Custom rule for external links
	const defaultRender = markdownLibrary.renderer.rules.link_open || function(tokens, idx, options, env, self) {
		return self.renderToken(tokens, idx, options);
	};

	markdownLibrary.renderer.rules.link_open = function (tokens, idx, options, env, self) {
		const token = tokens[idx];
		const href = token.attrGet('href');

		if (href && (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//'))) {
			token.attrSet('target', '_blank');
			token.attrSet('rel', 'noopener noreferrer');
		}

		return defaultRender(tokens, idx, options, env, self);
	};

	eleventyConfig.setLibrary("md", markdownLibrary);

	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/"
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");

	eleventyConfig.addWatchTarget("css/**/*.css");
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");

	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
		bundleHtmlContentFromSelector: "style",
	});

	eleventyConfig.addBundle("js", {
		toFileDirectory: "dist",
		bundleHtmlContentFromSelector: "script",
	});

	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(interlinker);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed/feed.xml",
		stylesheet: "pretty-atom-feed.xsl",
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 4
			}
		},
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "Pablo Santalla's Blog",
			subtitle: "From poems to code, maybe ocasinal letter to my daughter so she'll eventually read them.",
			base: "https://pablosantalla.com/blog",
			author: {
				name: "Pablo Santalla"
			}
		}
	});

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "auto"],
		failOnError: false,
		// Absolute paths /img/... don't work with input: "content" - they become content/img/...
		// Use relative paths: ../../public/img/image.png for optimization
		// https://www.11ty.dev/docs/plugins/image/
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			}
		},
		sharpOptions: {
			animated: true,
		},
	});

	eleventyConfig.addPlugin(pluginFilters);

	eleventyConfig.addPlugin(IdAttributePlugin);

	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});
};

export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],

	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",

	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "docs"
	},

	// Deploy to subdirectory - uncomment when not using custom domain
	pathPrefix: "/pablosantalla.com-2.0/",
};
