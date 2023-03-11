# Resume

**Bugs**

1. `Uncaught ReferenceError: React is not defined`
    - Import `React` in every component with `import React from 'react'`
    
2. `npm run` doesn't work on Windows 10/11
    - Run `$env:NODE_OPTIONS="--openssl-legacy-provider"` on PowerShell before executing 
    the `npm run` command

3. TailwindCSS not compiling styles
    - Create `./public/style.css` and then execute `npx tailwindcss -i ./src/index.css -o ./public/style.css --watch`
    - Add `<link href="%PUBLIC_URL%/style.css" rel="stylesheet">` to `./public/index.html`
