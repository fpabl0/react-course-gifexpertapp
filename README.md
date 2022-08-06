# Instructions

To publish in Github pages:

1. We should rename the `dist` folder (that is generated by running `npm run build`) to `docs` folder because github will look for `docs` folder to host our web page.
2. As the page in github pages will be served using our repository name as an url path (`https://fpabl0.github.io/REPO-NAME/` => https://fpabl0.github.io/react-course-gifexpertapp/), the resources in the path `docs/index.html`:

   ```html
   <script type="module" crossorigin src="/assets/index.311fe294.js"></script>
   <link rel="stylesheet" href="/assets/index.dfc3127a.css" />
   ```

   Won't be reachable, because they are pointing to the root of our page. We can change this by using relative paths (just add `.`) like this:

   ```html
   <script type="module" crossorigin src="./assets/index.311fe294.js"></script>
   <link rel="stylesheet" href="./assets/index.dfc3127a.css" />
   ```
