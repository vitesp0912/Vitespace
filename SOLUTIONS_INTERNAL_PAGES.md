# Internal solution pages: unwired until ready

Read this file before wiring `/solutions/*` again.

Status as of 31 Aug 2026: **private**. Do not link to these routes from the public site until the user asks to restore them.

## Private routes

| Route | Page | Status |
|---|---|---|
| `/solutions/digital-products` | Digital products | Built, not public |
| `/solutions/growth` | Growth | Built, not public |
| `/solutions/automation` | Automation | Built, not public |
| `/solutions/chatbots` | Chatbots | Built, not public |
| `/solutions/voice` | Voice | Built, not public |

`/solutions` (the overview) stays public.

## Current public behaviour

Every click that used to go to an inner solution page now opens the **Let's Build** email popup (`EmailPopup`).

In-page jumps on `/solutions` still work (`#digital-products`, `#business-systems`, `#growth`, `#automation`).

Homepage Build / Grow / Automate cards and footer solution links go to `/solutions` with those hashes. They do **not** go to `/solutions/*`.

## Intended wiring (restore this)

When the user says the inner pages are ready, put these `href`s back. The target URLs are already stored as `href` on the data objects in `components/solutions/SolutionsView.jsx`.

### 1. Solutions overview (`components/solutions/SolutionsView.jsx`)

Replace each `onBuild` button with `<Link href={item.href}>` and remove the overview-level `EmailPopup` if it is only used for these cards.

| UI | Intended href |
|---|---|
| Digital product carousel: Websites, Web applications, Mobile applications, Custom software | `/solutions/digital-products` (`paths.products`) |
| Growth rows: SEO, Google Ads, Meta Ads, Offline marketing, Brand & creative | `/solutions/growth` (`paths.growth`) |
| Automation row: AI automation | `/solutions/automation` (`paths.automation`) |
| Automation row: AI chatbots | `/solutions/chatbots` (`paths.chatbots`) |
| Automation row: AI voice agents | `/solutions/voice` (`paths.voice`) |

Keep Let's Build / SolutionsCTA on the popup. That is correct even after restore.

### 2. Homepage pillars (`components/home/ServicePillars.jsx`)

| Card | Temporary href | Intended href |
|---|---|---|
| Build | `/solutions#digital-products` | `/solutions/digital-products` |
| Grow | `/solutions#growth` | `/solutions/growth` |
| Automate | `/solutions#automation` | `/solutions/automation` |

### 3. Footer (`components/SiteFooter.jsx`)

| Label | Temporary href | Intended href |
|---|---|---|
| Digital products | `/solutions#digital-products` | `/solutions/digital-products` |
| Growth | `/solutions#growth` | `/solutions/growth` |
| Automation | `/solutions#automation` | `/solutions/automation` |
| Chatbots | `/solutions#automation` | `/solutions/chatbots` |
| Voice | `/solutions#automation` | `/solutions/voice` |

### 4. Related strips on inner pages

Already use `paths.*` in `components/solutions/suite/`. Leave those. They only matter once the pages are public.

## SEO / privacy (also restore)

While private:

- `lib/seo.js`: `robots: noIndexRobots` on `products`, `growth`, `automation`, `chatbots`, `voice`
- `app/sitemap.js`: those five pages are omitted
- `app/robots.js`: those five paths are `disallow`
- `next.config.js`: old aliases (`/solutions/ai-chatbots`, `/solutions/growth-marketing`, and the rest) redirect to `/solutions`, not to the inner pages

When going public:

1. Remove `robots: noIndexRobots` from those five objects in `lib/seo.js`
2. Put them back in `app/sitemap.js` (`pages.products`, `pages.growth`, `pages.automation`, `pages.chatbots`, `pages.voice`)
3. Remove the five paths from `disallow` in `app/robots.js`
4. Point the old aliases in `next.config.js` back at the inner routes:

```
/solutions/digital-infrastructure → /solutions/digital-products
/solutions/products → /solutions/digital-products
/solutions/growth-marketing → /solutions/growth
/solutions/ai-automation-systems → /solutions/automation
/solutions/ai-chatbots → /solutions/chatbots
/solutions/ai-voice-agents → /solutions/voice
```

## Do not

- Do not add public nav, cards, or footer links to `/solutions/*` until this file is followed
- Do not add the five routes to the sitemap until they are public
- Do not change `/solutions` itself into a redirect
