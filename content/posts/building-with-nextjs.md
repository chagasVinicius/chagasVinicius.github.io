---
title: "Building a Personal Site with Next.js"
date: "2025-01-25"
excerpt: "My experience transitioning from a static HTML site to a modern Next.js application."
readTime: "5 min read"
---

# Building a Personal Site with Next.js

Moving from a single `index.html` file to a full Next.js application has been an interesting journey. Here's what I learned along the way.

## Why Make the Switch?

The main reasons for switching were:

1. **Easier content management** - Writing in Markdown is much more pleasant than editing HTML
2. **Better maintainability** - Component-based architecture makes updates easier
3. **Modern tooling** - TypeScript, hot reloading, and better developer experience
4. **Scalability** - Easy to add new features and pages

## The Architecture

The new site uses a simple but effective structure:

- **File-based routing** for pages
- **Markdown files** for content
- **Gray-matter** for frontmatter parsing
- **Tailwind CSS** for styling

## Content Workflow

Now adding a new post is as simple as:

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter with title, date, and excerpt
3. Write the content in Markdown
4. Deploy!

Much better than editing HTML directly.

## Next Steps

I'm planning to add:

- Search functionality
- Tags and categories
- RSS feed
- Comments system

The beauty of this approach is that each feature can be added incrementally without breaking existing functionality.
