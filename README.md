# Boot Scootin' Andover

Marketing site for a new line dance class in Andover, Hampshire.

## Tech

- Next.js 16 (App Router) + Turbopack
- React 19
- Tailwind CSS v4
- TypeScript

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Create `.env.local` with:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-access-key
```

The contact form posts to [Web3Forms](https://web3forms.com). Without a key, it shows a friendly error.

## Deploy

Deploys to Vercel. Push to `main` for production.
