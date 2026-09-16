# lahuelladelcaminante.com

Sitio portfolio estático hecho con Astro. Bilingüe (ES/EN), modo oscuro.

## Desarrollo

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # genera dist/
    npm run preview  # sirve dist/ localmente
    npm run test     # tests unitarios (vitest)

## Contenido

- Proyectos: un YAML por proyecto en `src/content/projects/`.
- Notas: un `.md`/`.mdx` por nota en `src/content/notes/es/` o `src/content/notes/en/`.

## Deploy en la Pi (Docker)

El sitio se sirve desde un contenedor nginx que compila el estático en un build
multi-stage. En la Pi:

    git pull
    docker compose up -d --build

Queda escuchando en `http://<ip-lan-de-la-pi>:8087`. La exposición pública
(DNS, reverse-proxy en la VPS, TLS y el túnel WireGuard) la maneja la sesión de
infra por separado; este repo solo entrega el sitio en el puerto 8087 de la LAN.

> Alternativa (si el build en la Pi resulta lento): compilar en la Mac con
> `npm run build` y servir el `dist/` resultante montándolo en el contenedor
> nginx. No es el camino por defecto.
