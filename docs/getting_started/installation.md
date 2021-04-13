---
id: installation
title: Installation
sidebar_label: Installation
slug: installation
---

The Ecstatic package can be installed via `npm`.

```bash
npm install @brochington/ecstatic
```

You may also use an ESM via the `unpkg` CDN. Doing this will provide an `ecstatic` object in the global scope. This is a great option for quick experiments.

```html
<html>
  <body>
    <script type="module" src="https://unpkg.com/@brochington/ecstatic@0.2"></script>
    <script type="module">
      const { World } = ecstatic;

      // Rest of your app code can go here.
    </script>
  </body>
</html>
```