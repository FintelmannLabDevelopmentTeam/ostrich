# ostrich

*ostrich* is a volumetric imaging library for the web.

## Quickstart

1. Install package dependencies with `npm`:

   ```
    $ npm install
   ```
   
2. Start development environment that keeps `dist/main.js` updated:

   ```
    $ npm run serve-example
   ```

3. Open `example/example.html` in a web-browser.

## API

ostrich is always initialized on an existing `<canvas>`-element.
Afterwards, the following methods are available and events are triggered:

| Method | Description |
| --- | --- |
| `ostrich.initializeElement(canvasElement)` | Initializes ostrich on the given `HTMLCanvasElement`. |
| `ostrich.jumpToSlice(canvasElement, slice)` | Switches to the given slice number. |

| Event | Description |
| --- | --- |
| `ostrich.initialized` | Image has been initialized. |
| `ostrich.rendered` | Image has been rendered after some change. |
| `ostrich.sliceChanged` | Slice has been changed. |
