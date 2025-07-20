# Pablo Santalla

Personal blog and portfolio built with [Eleventy](https://www.11ty.dev/). Optimized for seamless content creation from Obsidian with automatic image optimization and zero-conflict publishing.

## About This Version

Built for continuous writing without technical friction. The entire publishing pipeline runs automatically - write in Obsidian, content appears online within 5 minutes with optimized images and proper formatting.

## Tech Stack

- **Eleventy v3** – Static site generator with automatic image optimization
- **Obsidian** – Content creation with auto-sync to GitHub
- **GitHub Actions** – Automated content sync, image processing, and deployment
- **GitHub Pages** – Hosting with custom domain support

## Key Features

### Automated Publishing Pipeline
- **Obsidian → GitHub** (every 10 minutes via Git plugin)
- **GitHub → Live Site** (every 5 minutes via Actions)
- **Image optimization** (AVIF, WebP, PNG with responsive sizing)
- **Filename sanitization** (handles problematic characters automatically)

### Content Management
- **Co-located images** – Images stored alongside markdown files
- **Wiki-links** with backlink support via interlinker plugin
- **Draft system** – `draft: true` hides content in production
- **Tag-based organization** with automatic tag pages

## Development Setup

```bash
npm install
npm start      # Local dev server with image processing
npm run build  # Production build
```

## Writing Workflow

**Blog Content (Obsidian Only)**
1. Write in `Public thoughts` folder in Obsidian
2. Images auto-rename to safe filenames
3. Content syncs and publishes automatically
4. All formats optimized (AVIF, WebP, fallback PNG)

**Site Configuration (VS Code)**
- Templates, layouts, and configuration
- Use "Commit & Sync" in VS Code
- No conflicts with automated content

## Architecture Decisions

- **Content separation** – Blog content managed via Obsidian, code via VS Code
- **Image optimization** – Automatic processing with multiple format output
- **Conflict-free workflow** – Git ignores generated content to prevent merge issues
- **Path prefix support** – Works with subdirectory deployment (GitHub Pages)

## Obsidian Configuration

**Git Plugin Settings:**
- Auto-commit: 10 minutes
- Auto-push: 10 minutes
- Commit on file change: enabled
- Processes all file types (markdown + images)

**Required folder structure:**
```
Obsidian Vault/
└── Public thoughts/
    ├── post-name.md
    ├── image.png
    └── ...
```

---

*Previous versions prioritized design complexity. This one prioritizes writing velocity and automated publishing.*

Contact: [pablo@pablosantalla.com](mailto:pablo@pablosantalla.com)
