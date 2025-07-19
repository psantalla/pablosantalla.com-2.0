# Pablo Santalla

Personal blog and portfolio built with [Eleventy](https://www.11ty.dev/). This iteration prioritizes clear communication and content over visual polish.

## About This Version

After several design-heavy portfolio iterations, this version focuses on **functionality and content**. Built for straightforward publishing and connected thoughts rather than aesthetic showcase.

## Tech Stack

- **Eleventy v3** - Static site generator with zero-JavaScript output
- **Obsidian** - Content creation with automated publishing workflow
- **GitHub Actions** - Automated deployment and sync
- **GitHub Pages** - Hosting

### Eleventy Plugins

- `@photogabble/eleventy-plugin-interlinker` - Wiki-link support and backlinks
- `@11ty/eleventy-plugin-rss` - RSS feed generation
- `@11ty/eleventy-plugin-syntaxhighlight` - Code syntax highlighting
- `@11ty/eleventy-navigation` - Site navigation
- `@11ty/eleventy-img` - Image optimization

### Obsidian Plugins

- **Git** (by Denis Olehov) - Auto-sync to GitHub
  - Auto commit interval: 10 minutes
  - Auto push interval: 10 minutes
  - Auto commit after stopping file edits: ON

## Writing Workflow

Content is written in Obsidian and automatically published via GitHub Actions. Wiki-style links between posts are converted to proper HTML links, creating an interconnected knowledge base.

1. Write in Obsidian → `Public thoughts` folder
2. Auto-sync to private GitHub repository via Git plugin
3. GitHub Actions detects changes every 5 minutes
4. Posts are built and deployed automatically

## Development

```bash
npm install
npm start      # Local development server
npm run build  # Production build
```

## Features

- Automated Obsidian → 11ty publishing pipeline
- Wiki-link support for connected content
- Image optimization and responsive images
- RSS feed generation
- Draft post support
- Tag-based organization

---

*Previous versions focused on visual design - this one focuses on publishing thoughts.*

*Note: This setup documentation is mostly for future me, since I have the memory of a goldfish when it comes to technical configurations.*

Contact: [me@pablosantalla.com](mailto:me@pablosantalla.com)
