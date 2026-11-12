# AI chatbot in a React website (Vite)

A small React site (Vite) with an AI chatbot in the corner. The chatbot reads what React has rendered on the page and answers visitors' questions from it. No backend, no npm package, no API route.

**Live demo:** https://fengyiqicoder.github.io/react-ai-chatbot/

## Add it to your React site

1. Get a free key at [onetagai.com](https://onetagai.com) (1,000,000 tokens one time, no credit card).
2. Open `index.html` at the root of your Vite project (`public/index.html` in Create React App) and add one line before `</body>`:

```html
<script async src="https://onetagai.com/widget.js" data-key="YOUR_ONETAG_KEY"></script>
```

3. `npm run dev` to try it, `npm run build` to ship it.

The tag goes in `index.html`, not in a component, so it loads once and stays on every route. The widget reads the page's `<main>` when a visitor asks, so it sees whatever React is showing at that moment.

Using Next.js? Use `next/script` in `app/layout.tsx` instead: see [nextjs-ai-chatbot](https://github.com/fengyiqicoder/nextjs-ai-chatbot).

## Run this demo

```sh
npm install
npm run dev
```

## License

MIT
