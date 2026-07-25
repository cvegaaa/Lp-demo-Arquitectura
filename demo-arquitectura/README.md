# Demo: Estudio de Arquitectura

Plantilla de landing page genérica para el sector **arquitectura**, lista para clonar y adaptar a un estudio real. Proyecto estático (HTML + CSS + JS), sin build ni dependencias.

## Qué es

Una demo de una sola página con hero de imágenes en transición, sección de problema/solución, servicios, proceso de cuatro fases, testimonios de ejemplo y bloque de contacto. Todos los textos editables viven en un único archivo de datos.

## Cómo clonarla para un cliente real

Solo necesitas editar **un archivo**:

```
config/datos-sector.json
```

Allí cambia: nombre del estudio, eslogan, servicios, problema típico, CTA, datos de contacto y las imágenes del hero (URLs de Pexels o propias). El HTML y los textos puntuales que no estén en el JSON se ajustan directamente en `index.html`.

## Cómo desplegarla (3 pasos)

1. Sube la carpeta `demo-arquitectura` a tu hosting estático (Netlify, Vercel, GitHub Pages, o cualquier servidor web).
2. Si usas Netlify: arrastra la carpeta al panel. Si usas Vercel: ejecuta `vercel deploy` dentro de la carpeta.
3. Abre la URL entregada. No requiere configuración adicional ni paso de compilación.

> También funciona abriendo `index.html` directamente en el navegador (rutas relativas).

## Estructura

```
demo-arquitectura/
├── index.html
├── README.md
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
└── config/datos-sector.json
```

## Notas

- Las imágenes del hero se cargan desde Pexels (sin marcas de agua). Reemplázalas por fotos del portafolio real del estudio.
- Los testimonios son de ejemplo y están marcados como tales; sustitúyelos por reseñas reales.
- Crédito visible único: "Demo diseñada por Vegora" en el pie de página.
