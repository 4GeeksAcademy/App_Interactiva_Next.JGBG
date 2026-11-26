# Wanderlust Explorer

Aplicación web interactiva para descubrir, buscar, filtrar y guardar experiencias turísticas alrededor del mundo.

## 1. Tecnologías utilizadas

- React
- Next.js
- TypeScript
- Tailwind CSS
- ESLint

## 2. Funcionalidades

1. Exploración de experiencias:
   - Catálogo de 100 experiencias.
   - Páginas dinámicas de detalle.
   - Búsqueda mediante expresiones regulares.

2. Sistema de filtros:
   - Categorías:
     - Adventure.
     - Culture.
     - Food.
     - Wellness.
     - Nature.
   - Destino.
   - Sincronización de filtros con la URL.

3. Gestión de favoritos:
   - Añadir experiencias.
   - Eliminar experiencias.
   - Estado compartido mediante `useState` y Context API.
   - Comunicación mediante props.

4. Interfaz de usuario:
   - Perfil de usuario simulado.
   - Navegación entre páginas.
   - Diseño responsive:
     - Dispositivos móviles.
     - Ordenadores.

## Design References

Estas referencias sirven como inspiración para desarrollar una interfaz visual propia, sin copiar literalmente el diseño de otras plataformas.

### 1. Airbnb Experiences

[Visitar Airbnb](https://www.airbnb.es/)

- **Elementos de inspiración:**
  - Tarjetas con fotografías.
  - Bordes redondeados.
  - Estética moderna y minimalista.
  - Valoraciones con estrellas.
  - Presentación visual de destinos.

- **Aplicación al proyecto:**
  - Tarjetas de experiencias.
  - Presentación de imágenes.
  - Información sobre destinos y valoraciones.

### 2. GetYourGuide

[Visitar GetYourGuide](https://www.getyourguide.es/)

- **Elementos de inspiración:**
  - Buscador de experiencias.
  - Filtros por categoría y destino.
  - Tarjetas con precios y valoraciones.
  - Cuadrícula de resultados.
  - Diseño responsive.

- **Aplicación al proyecto:**
  - Catálogo organizado mediante una cuadrícula adaptable.
  - Sistema de búsqueda y filtrado.
  - Presentación de precios y valoraciones.

## 3. Instalación y ejecución

1. Acceder al directorio de la aplicación.

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 4. Validación técnica

- [x] Validación de TypeScript.
- [x] Validación de ESLint.
- [x] Compilación de producción.
- [x] Generación de 108 páginas.
- [x] Comprobación de filtros mediante URL.

### Comandos de validación

```bash
npx tsc --noEmit
npm run lint
npm run build
```

### Resultados

| Comprobación | Resultado |
| --- | --- |
| TypeScript | Correcto |
| ESLint | Correcto |
| Build | Correcto |
| Páginas generadas | 108/108 |
| Errores de compilación | 0 |

## 5. Consideraciones

- Las experiencias utilizan datos simulados.
- Las imágenes son de referencia.
- El título dinámico mediante `useEffect` está implementado, aunque su funcionamiento queda pendiente de confirmar.

## 6. Autor

- **GitHub:** [dongabriel108-cyber](https://github.com/dongabriel108-cyber)
- **Proyecto académico:** 4Geeks Academy.
- **Programa:** AI Engineering.