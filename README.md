# Pablo Santalla

Personal blog and portfolio built with [Eleventy](https://www.11ty.dev/). This version keeps things simple and focused on what matters: clear content over visual flourishes.

## About This Version

After a few design-heavy attempts, I wanted something more practical. This site is built to write and publish with ease. It prioritizes **clarity, structure, and connected ideas**, not fancy visuals.

## Tech Stack

- **Eleventy v3** – Static site generator, outputs clean HTML without JavaScript
- **Obsidian** – Daily writing and note-taking, with auto-publishing
- **GitHub Actions** – Handles deployment and sync
- **GitHub Pages** – Fast and reliable hosting

### Eleventy Plugins

- `@photogabble/eleventy-plugin-interlinker` – Wiki-links and backlinks
- `@11ty/eleventy-plugin-rss` – RSS support
- `@11ty/eleventy-plugin-syntaxhighlight` – Syntax highlighting for code
- `@11ty/eleventy-navigation` – Simple navigation structure
- `@11ty/eleventy-img` – Image optimization

### Obsidian Plugins

- **Git** (by Denis Olehov) – Syncs content to GitHub
  - Auto-commit: every 10 minutes
  - Auto-push: every 10 minutes
  - Auto-commit on stop editing: enabled

## Writing Workflow

Everything starts in Obsidian. Notes are stored in a `Public thoughts` folder, synced automatically, and published in near real time.

1. Write in Obsidian
2. Git plugin syncs to private repo
3. GitHub Actions picks up changes (every 5 minutes)
4. 11ty builds and deploys

## Development

```bash
npm install
npm start      # Run local dev server
npm run build  # Create production build
```

## Features

- Automated publishing from Obsidian to Eleventy
- Wiki-links between notes
- Responsive image handling
- RSS feed
- Draft support
- Tag-based structure

---

*Older versions leaned into design. This one leans into writing.*

*Leaving this here mostly for myself – because I always forget how I set things up.*

Contact: [pablo@pablosantalla.com](mailto:pablo@pablosantalla.com)
