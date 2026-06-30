# Praveen Kumar Gorrepati Portfolio

Deployment-ready portfolio built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production files are generated in the `dist` folder.

## Deploy on Vercel

1. Push this project folder to GitHub.
2. Import the repository in Vercel.
3. Use these settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

## Update content

Most portfolio content is stored in:

```text
src/data.ts
```

Update project titles, descriptions, skills, experience, GitHub links, and contact links there.

Important: replace `linkedin: "#"` and `github: "#"` in `src/data.ts` with your actual URLs before final submission.
