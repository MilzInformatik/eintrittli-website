# eintrittli.ch

Landing page for [Eintrittli](https://github.com/weborb-ch/eintrittli), built with [VitePress](https://vitepress.dev).

## Development

```sh
npm ci
npm run docs:dev      # local dev server
npm run docs:build    # static build to .vitepress/dist
npm run docs:preview  # preview the build
```

## Deployment

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`
(or manually via *Run workflow*).

One-time setup in the repository settings:

1. **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
2. Optional: set a **Custom domain** and point its DNS at GitHub Pages
   (see [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

The workflow reads the site URL from the Pages configuration and passes the base path to
VitePress, so it works both under `https://<owner>.github.io/eintrittli-website/` and under a
custom domain without further changes.
