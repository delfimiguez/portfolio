# 📁 Estructura de Carpetas de Imágenes

Este directorio contiene todas las imágenes de tu portfolio, organizadas por tipo de proyecto.

## 📂 Estructura

```
images/
├── photography/          ← Series de fotografía
│   ├── justcoffee/
│   │   ├── 01.jpg       ← Imagen 1 de 15
│   │   ├── 02.jpg
│   │   ├── ...
│   │   └── 15.jpg       ← Imagen 15 de 15
│   │
│   ├── ym-bar-kitchen/
│   ├── ginger-beer/
│   ├── your-mates-photo/
│   ├── golden-menu/
│   ├── crackerjack-photo/
│   ├── grand-hotel/
│   ├── robertsons-pub/
│   ├── diggies-cafe/
│   ├── manly-stoke/
│   ├── pacific-hostel/
│   └── casa-caravan/
│
└── projects/             ← Proyectos de diseño
    ├── p1nk-brand/
    ├── limitless-peptides/
    ├── ra-optics-fiji/
    ├── akuity/
    ├── accelex/
    ├── wilshire/
    ├── crackerjack/
    ├── unplugged-podcast/
    ├── film-festival/
    └── your-mates-brewery/
```

## 🖼️ Fotografía

### Carpetas Creadas (12 series)
Cada carpeta de fotografía contiene **15 archivos placeholder vacíos** numerados del **01.jpg al 15.jpg**.

**Para agregar tus fotos:**
1. Ve a la carpeta de la serie (ej: `images/photography/justcoffee/`)
2. Reemplaza los archivos placeholder con tus imágenes reales
3. **IMPORTANTE:** Mantén los nombres exactos: `01.jpg`, `02.jpg`, etc.
4. Formato recomendado: JPG
5. Aspecto: **9:16 (PORTRAIT/VERTICAL)** - ej: 1080x1920px
6. Tamaño: Máximo 2000px de alto
7. Peso: Idealmente < 500KB (optimiza para web)

**Las imágenes aparecerán automáticamente en:**
- La página de detalle de cada serie fotográfica
- En un **scroll horizontal** de fotos verticales
- Con aspect ratio 9:16 (formato portrait)

### Series Disponibles
1. **justcoffee** - JustCoffee commercial photography
2. **ym-bar-kitchen** - YM Bar & Kitchen restaurant
3. **ginger-beer** - Ginger Beer product photography
4. **your-mates-photo** - Your Mates Brewery photography
5. **golden-menu** - Golden Menu food photography
6. **crackerjack-photo** - Crackerjack brand photography
7. **grand-hotel** - The Grand Hotel hospitality
8. **robertsons-pub** - Robertsons Pub interior
9. **diggies-cafe** - Diggies Cafe series
10. **manly-stoke** - Manly Stoke Hostel
11. **pacific-hostel** - The Pacific Hostel
12. **casa-caravan** - Casa Caravan Argentina

---

## 🎨 Proyectos de Diseño

### Carpetas Creadas (10 proyectos)
Las carpetas de proyectos de diseño están vacías, esperando que agregues las imágenes según lo definido en `projects-data-extended.js`.

**Para agregar imágenes de diseño:**
1. Ve a la carpeta del proyecto (ej: `images/projects/p1nk-brand/`)
2. Agrega las imágenes con los nombres exactos que están en el data file
3. Formato: JPG o PNG
4. Tamaño: Flexible según el tipo de imagen

### Ejemplo: P1NK Brand

Según `projects-data-extended.js`, P1NK necesita estas imágenes:

**Sección Summary:**
- `hero.jpg`
- `logo-system.jpg`
- `color-palette.jpg`

**Sección Challenge:**
- `competitive-landscape.jpg`
- `category-analysis.jpg`

**Sección Process:**
- `naming-exploration.jpg`
- `visual-directions.jpg`
- `packaging-iterations.jpg`

**Sección Outcome:**
- `final-packaging.jpg`
- `retail-mockup.jpg`

**Para ver qué imágenes necesita cada proyecto:**
1. Abre `projects-data-extended.js`
2. Busca tu proyecto
3. Mira el array `images: [...]` en cada sección
4. Esos son los nombres exactos que debes usar

---

## ✅ Checklist para Agregar Imágenes

### Para Fotografía:
- [ ] Optimizar imágenes para web (< 500KB cada una)
- [ ] Renombrar como 01.jpg, 02.jpg... 15.jpg
- [ ] Verificar aspect ratio **9:16 (PORTRAIT)** - ej: 1080x1920px
- [ ] Copiar a la carpeta correcta
- [ ] Refrescar navegador (Ctrl+Shift+R)

### Para Proyectos de Diseño:
- [ ] Revisar `projects-data-extended.js` para ver nombres requeridos
- [ ] Optimizar imágenes
- [ ] Renombrar exactamente como aparece en el data file
- [ ] Agregar extensión `.jpg` o `.png`
- [ ] Copiar a la carpeta del proyecto
- [ ] Refrescar navegador

---

## 🚨 Importante

1. **Los nombres deben coincidir exactamente** con lo que está en `projects-data-extended.js`
2. **Sensible a mayúsculas/minúsculas** - `Hero.jpg` ≠ `hero.jpg`
3. **Usa guiones, no espacios** - `final-packaging.jpg` ✅  `final packaging.jpg` ❌
4. **Extensiones**: Usa `.jpg` (lowercase) no `.JPG` o `.jpeg`
5. **Si una imagen no carga**, verifica:
   - Que el nombre coincida exactamente
   - Que esté en la carpeta correcta
   - Que el navegador no tenga cache (Ctrl+Shift+R)

---

## 🛠️ Herramientas Recomendadas

**Para Optimizar Imágenes:**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- ImageOptim (Mac): https://imageoptim.com/

**Para Renombrar en Lote:**
- Bulk Rename Utility (Windows)
- Finder > Seleccionar > Click derecho > Renombrar (Mac)
- `rename` command (Linux)

---

## 📝 Ejemplo de Workflow

**Para fotografía (JustCoffee):**
```bash
1. Tienes 15 fotos de JustCoffee
2. Renombras en orden: foto1.jpg → 01.jpg, foto2.jpg → 02.jpg, etc.
3. Optimizas con TinyPNG
4. Las copias a: images/photography/justcoffee/
5. Reemplazas los placeholders
6. Abres el navegador → projects/project.html?slug=justcoffee
7. ¡Aparecen tus fotos en grilla vertical!
```

**Para diseño (P1NK):**
```bash
1. Revisas projects-data-extended.js → P1NK necesita 'hero.jpg', 'logo-system.jpg', etc.
2. Renombras tus archivos con esos nombres exactos
3. Los copias a: images/projects/p1nk-brand/
4. Abres el navegador → projects/project.html?slug=p1nk-brand
5. ¡Aparecen tus imágenes en las secciones correctas!
```

---

¡Listo! Ahora solo tienes que reemplazar los placeholders con tus imágenes reales y aparecerán automáticamente en el portfolio. 🎉
