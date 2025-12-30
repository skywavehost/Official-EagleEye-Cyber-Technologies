# EagleEye Cyber Technologies

Enterprise-grade cybersecurity website built with React, TypeScript, and Vite.

## TARGET TREE
/
  package.json
  vite.config.ts
  tsconfig.json
  index.html
  src/
    main.tsx
    App.tsx
    constants.tsx
    types.ts
    metadata.json
    components/
      Navbar.tsx
      Footer.tsx
      ScannerAnimation.tsx
    pages/
      Home.tsx
      Services.tsx
      Industries.tsx
      Resources.tsx
      About.tsx
      Careers.tsx
      Contact.tsx
  netlify.toml
  vercel.json

## BUILD CHECK
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20.x`+
- Vercel settings: Vite framework preset, `npm run build`, `dist` output.
- Netlify settings: `npm run build`, `dist` publish directory.