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

### Hybrid Content Management System
- **Blog posts** – Managed exclusively through Obsidian for optimal writing experience
- **Site configuration** – Templates, layouts, and build settings via code editor
- **Conflict-free publishing** – Unidirectional sync from Obsidian prevents merge conflicts
- **Draft-based content control** – Use `draft: true` in frontmatter to hide/show posts

### Automated Publishing Pipeline
- **Obsidian → GitHub** (every 10 minutes via Git plugin)
- **GitHub → Live Site** (every 5 minutes via Actions)
- **Image optimization** (AVIF, WebP, PNG with responsive sizing)
- **Filename sanitization** (handles problematic characters automatically)

### Content Management
- **Co-located images** – Images stored alongside markdown files
- **Wiki-links** with backlink support via interlinker plugin
- **Draft system** – `draft: true` hides content in production, no file deletion needed
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
2. Add `draft: true` to frontmatter to hide posts (remove to publish)
3. Images auto-rename to safe filenames
4. Content syncs and publishes automatically
5. All formats optimized (AVIF, WebP, fallback PNG)

**Publishing Control:**
- **Publish**: Remove `draft: true` or omit from frontmatter
- **Hide**: Add `draft: true` to frontmatter
- **No file deletion needed** – draft system handles visibility

**Site Configuration (Local Development)**
- Templates, layouts, and configuration changes
- Standard Git workflow for code changes
- Avoid editing blog posts locally to prevent conflicts

## Architecture Decisions

- **Content separation** – Blog content managed via Obsidian, code via any editor
- **Unidirectional sync** – Obsidian is source of truth for blog posts
- **Draft-based publishing** – No file deletion, content controlled via frontmatter
- **Image optimization** – Automatic processing with multiple format output
- **Conflict-free workflow** – Separate editing domains prevent merge issues
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
    ├── post-name.md          # Blog post
    ├── draft-post.md         # With draft: true in frontmatter
    ├── image.png
    └── ...
```

**Frontmatter Example:**
```yaml
---
title: "My Blog Post"
date: 2025-01-01
tags: ["web", "development"]
draft: true  # Remove this line to publish
---
```

---

*Previous versions prioritized design complexity. This one prioritizes writing velocity and automated publishing.*

Contact: [pablo@pablosantalla.com](mailto:pablo@pablosantalla.com)
