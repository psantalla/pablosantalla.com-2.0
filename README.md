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
- **Simple image handling** – Keep image filenames simple in Obsidian (avoid special characters)

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

# Configure git sync alias (one-time setup)
git config --global alias.sync '!git pull --no-rebase && git push'
```

**Local development workflow:**
```bash
# Edit files, then:
git add content/about/about.md
git commit -m "Update about page"
git sync  # Use this instead of git push to avoid conflicts
```

## Writing Workflow

**Blog Content (Obsidian Only)**
1. Write in `Public thoughts` folder in Obsidian
2. Add `draft: true` to frontmatter to hide posts (remove to publish)
3. **Use simple image filenames** (e.g., `my-image.png` instead of complex generated names)
4. Content syncs and publishes automatically
5. All formats optimized (AVIF, WebP, fallback PNG)

**Publishing Control:**
- **Publish**: Remove `draft: true` or omit from frontmatter
- **Hide**: Add `draft: true` to frontmatter
- **No file deletion needed** – draft system handles visibility

**Site Configuration (Local Development)**
- Templates, layouts, and configuration changes
- Use `git sync` instead of `git push` to avoid branch conflicts
- Standard Git workflow: `git add` → `git commit` → `git sync`
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

## Known Limitations & Future Improvements

- **Image filenames**: Currently requires manual naming of images in Obsidian with simple, web-safe filenames (letters, numbers, hyphens, underscores only). Automatic filename sanitization for complex filenames is planned for future versions.
- **Git workflow**: Use `git sync` instead of `git push` when working locally to prevent conflicts with Obsidian's automatic commits.

---

*Previous versions prioritized design complexity. This one prioritizes writing velocity and automated publishing.*

Contact: [pablo@pablosantalla.com](mailto:pablo@pablosantalla.com)
