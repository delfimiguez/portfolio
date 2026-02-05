# 📸 Actualización: Scroll Horizontal para Fotografía

## Cambios Realizados

### Antes:
- Grilla vertical con fotos horizontales (3:2)
- 15 imágenes apiladas en una columna

### Ahora:
- **Scroll horizontal con fotos verticales (9:16)**
- 15 imágenes en fila, scroll de izquierda a derecha
- Formato portrait 1080x1920 (Instagram/Stories)

---

## 📂 Archivos a Reemplazar en GitHub

Reemplaza estos 4 archivos:

1. **`project-detail.css`** → Estilos del scroll horizontal
2. **`project-detail.js`** → Lógica (sin cambios, pero incluido)
3. **`projects-data-extended.js`** → Datos (sin cambios, pero incluido)
4. **`images/README.md`** → Documentación actualizada

---

## 🎨 Cómo se Ve Ahora

```
┌─────────────────────────────────────────────────────────────┐
│ ABOUT                                                       │
│ Descripción de la serie...                                 │
│                                                             │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐             │
│ │      │ │      │ │      │ │      │ │      │             │
│ │      │ │      │ │      │ │      │ │      │ ← SCROLL →  │
│ │ 01   │ │ 02   │ │ 03   │ │ 04   │ │ 05   │             │
│ │      │ │      │ │      │ │      │ │      │             │
│ │ 9:16 │ │ 9:16 │ │ 9:16 │ │ 9:16 │ │ 9:16 │             │
│ │      │ │      │ │      │ │      │ │      │             │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     ... 15  │
└─────────────────────────────────────────────────────────────┘
          ←──────────────────────────────────→
                 Scroll horizontal
```

---

## 💻 Detalles Técnicos

### CSS Implementado:

```css
.section-images.photography-grid {
    display: flex;              /* Flexbox horizontal */
    overflow-x: auto;           /* Scroll horizontal */
    overflow-y: hidden;
    gap: var(--spacing-md);
    scroll-snap-type: x mandatory;  /* Snap scroll */
    -webkit-overflow-scrolling: touch;  /* Smooth iOS */
}

.photography-grid .section-image-placeholder {
    flex: 0 0 auto;
    height: 70vh;               /* 70% de altura viewport */
    max-height: 800px;
    min-height: 500px;
    aspect-ratio: 9 / 16;       /* PORTRAIT - 1080x1920 */
    scroll-snap-align: start;   /* Snap cada imagen */
}
```

### Características:

✅ **Scroll Horizontal** - Desliza de izquierda a derecha
✅ **Scroll Snap** - Se "pega" a cada imagen
✅ **Touch Smooth** - Suave en móvil/tablet
✅ **Scrollbar Custom** - Minimalista (8px)
✅ **Portrait 9:16** - Formato vertical (como Instagram Stories)
✅ **Responsive Height** - 70vh desktop, 60vh mobile
✅ **Click to Zoom** - Lightbox sigue funcionando

---

## 📱 Responsive

### Desktop (>768px):
- Imágenes 70vh alto
- Scroll horizontal suave
- Scrollbar visible

### Mobile (<768px):
- Imágenes 60vh alto (min 400px)
- Touch scroll nativo
- Scrollbar más delgada

---

## 🖼️ Formato de Imágenes

### IMPORTANTE - Nuevo Formato:

**Antes:**
- 3:2 horizontal (1800x1200px)
- Landscape

**Ahora:**
- **9:16 vertical (1080x1920px)**
- **Portrait** - Formato Instagram/Stories
- **Verticales**, no horizontales

### Ejemplos de Tamaños Válidos:
- 1080 x 1920 px ✅ (ideal)
- 1440 x 2560 px ✅
- 720 x 1280 px ✅
- Cualquier ratio 9:16 ✅

---

## ✅ Checklist de Verificación

Después de subir a GitHub:

1. **Ve a cualquier serie de fotografía**
   - Ejemplo: `projects/project.html?slug=justcoffee`

2. **Verifica que veas:**
   - [ ] Scroll horizontal (no vertical)
   - [ ] Fotos verticales (portrait)
   - [ ] 15 fotos en fila
   - [ ] Scroll suave con snap
   - [ ] Click abre lightbox

3. **Prueba en móvil:**
   - [ ] Scroll con dedo funciona
   - [ ] Fotos se ven completas
   - [ ] Lightbox funciona

---

## 🎯 Ventajas del Nuevo Layout

✅ **Más profesional** - Como portfolios modernos (Unsplash, 500px)
✅ **Mejor para móvil** - Scroll horizontal natural
✅ **Formato moderno** - Portrait 9:16 es el estándar actual
✅ **Más inmersivo** - Fotos grandes y verticales
✅ **Menos scroll** - Horizontal más rápido que vertical

---

## 📦 Resumen

**Archivos modificados: 4**
1. `project-detail.css` - Scroll horizontal + portrait
2. `project-detail.js` - Sin cambios (incluido por completitud)
3. `projects-data-extended.js` - Sin cambios (incluido por completitud)
4. `images/README.md` - Documentación actualizada

**Cambio principal:**
Fotografía ahora usa **scroll horizontal con fotos verticales 9:16** en lugar de grilla vertical con fotos horizontales 3:2.

---

¡Listo para subir a GitHub! 🚀
