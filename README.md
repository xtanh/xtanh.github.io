# Hong Tan's personal website

This repository powers [xtanh.github.io](https://xtanh.github.io). It keeps the original `academic-homepage` Jekyll design and adds a blog, RSS feed, and optional visitor analytics.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## Write a blog post

1. Copy `_drafts/post-template.md` to `_posts/`.
2. Rename it to `YYYY-MM-DD-short-title.md`.
3. Fill in the front matter and write the post in Markdown.
4. Commit and push to `main`; GitHub Pages will rebuild the site.

Example filename: `_posts/2026-09-20-protein-language-model-notes.md`.

Images can be placed under `assets/images/blog/` and referenced in Markdown with `/assets/images/blog/image-name.png`.

## Add a publication

Create a Markdown file under `_publications/`. The existing publication widgets will display it automatically. Use the earlier template schema for fields such as `title`, `date`, `authors`, `pub`, `abstract`, `selected`, and `links`.

## Visitor analytics and location

The site includes an optional [Umami](https://umami.is/) tracker. Its dashboard can show visits, popular pages, referrers, devices, and approximate country/region/city. Analytics is disabled until a real Website ID is supplied.

To enable it:

1. Create an Umami Cloud account or use a self-hosted Umami instance.
2. Add `xtanh.github.io` as a website and copy its Website ID.
3. Edit `_config.yml`:

```yaml
analytics:
  enabled: true
  provider: umami
  script_url: "https://cloud.umami.is/script.js"
  website_id: "paste-your-website-id-here"
  domain: "xtanh.github.io"
```

Local previews will not be counted because tracking is restricted to the configured domain. Analytics reports stay in the Umami dashboard; the website does not publish visitor locations publicly.

## Publish

GitHub Pages should be configured to deploy from the `main` branch and repository root. Generated `_site/` files are ignored and should not be committed.
