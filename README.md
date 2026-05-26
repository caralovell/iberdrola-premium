# Iberdrola Premium · Propuesta Logopost

Web React + Vite + Tailwind para la propuesta de digitalización de las tiendas premium de Iberdrola. Construida siguiendo la misma estética que la landing original de Carrefour/Iberdrola (`landing4`).

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion (animaciones)
- Lucide React (iconos)
- PT Sans (Google Fonts)

## Estructura

```
src/
├── pages/Index.tsx              ← Orquesta las secciones
├── components/
│   ├── HeroSection.tsx          ← Portada con logos y datos
│   ├── ObjetivosSection.tsx     ← 01 · Tres objetivos
│   ├── PilaresSection.tsx       ← 02 · Emocionar, Inspirar, Vínculos
│   ├── RecorridoSection.tsx     ← 03 · Las 6 fases del journey
│   ├── PlanoSection.tsx         ← 04 · Vista cenital de la tienda
│   ├── DatosSection.tsx         ← 05 · Capa de datos común
│   ├── InversionSection.tsx    ← 06 · Bloques de presupuesto
│   ├── FooterSection.tsx
│   ├── ScrollReveal.tsx         ← (idéntico al original)
│   ├── SectionDivider.tsx       ← (idéntico al original)
│   ├── LogopostLogo.tsx         ← ⚠ Placeholder, ver abajo
│   └── IberdrolaLogo.tsx        ← ⚠ Placeholder, ver abajo
└── assets/
    ├── mockup-cuestionario.png
    ├── mockup-recomendacion.png
    ├── vista-tienda.png
    └── plano-tienda.png
```

## Antes de desplegar

### 1. Sustituir los logos placeholder

He puesto dos placeholders porque no tenía los archivos originales:

- **`src/components/LogopostLogo.tsx`** — pega aquí el contenido del `LogopostLogo.tsx` de tu landing original (el bueno).
- **`src/components/IberdrolaLogo.tsx`** — si tienes la imagen oficial del logo Iberdrola, mete el png en `src/assets/iberdrola.png` y reemplaza el componente por un `<img src={iberdrolaLogo} />`.

### 2. Configurar el `base` para GitHub Pages

Abre `vite.config.ts` y cambia esta línea:

```ts
base: "/iberdrola-premium/",
```

Sustituye `iberdrola-premium` por el **nombre exacto del repo de GitHub** que vas a crear. Si en el futuro despliegas en un dominio raíz, ponlo en `"/"`.

## Cómo desarrollar localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:8080`.

## Cómo desplegar a GitHub Pages (automático)

He incluido un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que construye y publica automáticamente cada vez que hagas push a `main`.

**Pasos una sola vez:**

1. Crea un repo público en GitHub (ej. `iberdrola-premium`)
2. Sube todo este código:
   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git
   git push -u origin main
   ```
3. En el repo de GitHub → **Settings → Pages**
4. En **Source** selecciona **GitHub Actions** (no "Deploy from branch")
5. Espera ~2 minutos. La URL será:
   `https://TU-USUARIO.github.io/NOMBRE-REPO/`

A partir de ahí, cada vez que hagas `git push` se redespliega solo.

## Cómo desplegar a GitHub Pages (manual, sin Actions)

Si prefieres no usar el workflow automático:

```bash
npm run build
```

Se genera la carpeta `dist/`. Sube esa carpeta a una rama `gh-pages` del repo, o usa el paquete `gh-pages`:

```bash
npm install --save-dev gh-pages
npx gh-pages -d dist
```

Y en **Settings → Pages** selecciona la rama `gh-pages` como source.

## Notas

- **Cifras de presupuesto** están como "A definir" — sustituir en `InversionSection.tsx` cuando estén cerradas.
- **Las fases 2, 5 y 6** del recorrido no llevan imagen porque aún no tenías mockup. Cuando los generes, edita `RecorridoSection.tsx` e importa la imagen, igual que se hace en las fases 1, 3 y 4.
- **Paleta**: respeta los CSS variables del `index.css`. El teal del acento (`#22BABA`) es el corporativo de Logopost, igual que en la landing original.
