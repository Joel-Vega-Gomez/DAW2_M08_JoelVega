# Portfolio profesional — Joel Vega Gómez

Portfolio personal orientado a oportunidades junior de desarrollo web e IT. Presenta el perfil profesional, competencias técnicas, experiencia, formación y una selección transparente de trabajo aplicado, distinguiendo la experiencia descrita en el CV de los proyectos que todavía están planificados.

## Tecnologías

- HTML5 semántico.
- CSS3 propio: diseño responsive, variables CSS, layouts Grid/Flexbox y soporte para `prefers-reduced-motion`.
- JavaScript nativo para navegación móvil, cierre con Escape, aviso de correo copiado y año del pie de página.
- Sin frameworks, paquetes, compilación, fuentes remotas ni dependencias externas.

## Verlo localmente

No hace falta instalar dependencias. Desde la raíz del proyecto puedes abrir `index.html` directamente o, recomendado para probarlo mediante HTTP, ejecutar:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000` en el navegador y usa `Ctrl+C` para detener el servidor. También puedes comprobar rutas y anclas con:

```bash
python3 tests/smoke_test.py
node --check assets/js/main.js
```

## Publicación en GitHub Pages

La web está preparada para publicación estática y usa rutas relativas, por lo que sus recursos también pueden resolverse desde la subruta de un repositorio. La publicación remota aún no se ha realizado desde este entorno; añade la URL real cuando esté activa.

1. Crea un repositorio propio en GitHub, vacío y sin README inicial, para conservar el historial local.
2. Desde esta carpeta, añade el remoto usando la URL que GitHub te muestre:

   ```bash
   git remote add origin <URL_REAL_DEL_REPOSITORIO>
   git push -u origin main
   git push origin feature/accessibility-audit
   ```

3. En GitHub, abre **Settings → Pages**. Elige **Deploy from a branch**, selecciona `main` y la carpeta `/ (root)`, y guarda.
4. Espera a que finalice el despliegue, abre la URL que indique GitHub Pages y comprueba la navegación, los recursos y la vista móvil.
5. Sustituye el estado de publicación de esta sección por la URL real publicada y vuelve a subir el cambio.

**URL publicada:** pendiente de publicar y verificar. No se proporciona una URL ficticia.

## Git e historial

El repositorio local incluye historial de commits y la rama adicional `feature/accessibility-audit`, integrada en `main`. Si lo clonas o lo copias como repositorio Git, las referencias locales se conservan. Para entregar la evidencia de GitHub, publica las dos ramas con los comandos anteriores y comparte la URL real del repositorio.

## Contenido y actualización

El contenido se ha elaborado a partir de los materiales facilitados. No se ha incluido dirección postal. El correo es el contacto directo. Las URL de GitHub y LinkedIn no estaban presentes como enlaces en los documentos de origen y no se han inventado; añádelas cuando tengas las URL exactas. Los porcentajes de inglés y francés son autoestimaciones que figuraban en el CV, no certificaciones oficiales. El proyecto de gestión de inventario se presenta como planificado, no como terminado.

Para mantener el portfolio vivo, actualiza la sección de trabajo cuando exista un proyecto que se pueda explicar y, de ser posible, enlaza su repositorio, una demo accesible o capturas propias. Actualiza también `docs/requirements-checklist.md` con la prueba real y su evidencia.

## Estructura

```text
.
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── favicon.svg
├── docs/
│   ├── requirements-checklist.md
│   └── validation.md
├── tests/smoke_test.py
├── .gitignore
└── README.md
```

## Estado de entrega

- Sitio estático local: implementado.
- Pruebas estáticas y de interacción: resultados registrados en `docs/validation.md`.
- Repositorio remoto y GitHub Pages: pendientes de URL y publicación desde una cuenta GitHub.

# Apartado extra para PRs

Una PR o Pull Request es un recurso que proporciona github, sirve para poder presentar posibles cambios antes de su adicion a la rama principal es como 
una sugerencia de posibles cambios. Para la rama principal de esta forma antes de hacer el merge se comprueba que todo el mundo este deacuerdo
