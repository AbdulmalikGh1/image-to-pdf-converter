# Image to PDF Converter

A production-ready client-side web app built with Next.js, React, Tailwind CSS, and `pdf-lib`.

## Features

- Upload one or multiple JPG/PNG images
- Drag and drop upload support with visual feedback
- Preview uploaded images
- Drag-to-reorder before conversion
- Convert images into a single PDF in the browser
- Download the generated PDF
- Loading, empty-state, and invalid-file error handling
- Optional page size selection: `A4` or `Letter`
- Dark mode toggle
- Basic image compression before PDF generation

## Project Structure

```text
.
|-- app
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components
|   |-- controls.tsx
|   |-- converter-page.tsx
|   |-- preview-list.tsx
|   `-- uploader.tsx
|-- utils
|   |-- images.ts
|   |-- pdf.ts
|   `-- types.ts
|-- .eslintrc.json
|-- next.config.ts
|-- next-env.d.ts
|-- package.json
|-- postcss.config.mjs
|-- README.md
`-- tsconfig.json
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Notes

- No backend is required. Conversion happens entirely in the browser.
- The app uses canvas-based compression before embedding images into the PDF to reduce output size.
