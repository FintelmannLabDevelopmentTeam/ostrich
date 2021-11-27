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

ostrich is always initialized on an existing `<canvas>`-element:

```html
<canvas id="my-canvas-element"></canvas>

<script src="dist/main.js"></script>
<script>
   ostrich.initializeElement(document.getElementById('my-canvas-element'));
</script>
```

### Methods

| Method | Description |
| --- | --- |
| `ostrich.initializeElement(canvasElement: HTMLCanvasElement, data: Uint16Array, dimensions: number[])` | Initializes ostrich on the given canvas element. |
| `ostrich.jumpToSlice(canvasElement: HTMLCanvasElement, slice: number)` | Switches to the given slice number. |

### Events

The following events are dispatched on an initialized `<canvas>`-element:

| Event | Description | Event Details |
| --- | --- | --- |
| `ostrich.initialized` | Image has been initialized. | - |
| `ostrich.rendered` | Image has been rendered after some change. | - |
| `ostrich.sliceChanged` | Slice has been changed. | `{ from: number, to: number }` |
| `ostrich.activateTool` | Tool has been activated. | `{ tool: Tool }` |
| `ostrich.deactivateTool` | Tool has been deactivated. | `{ tool: Tool }` |

## Tools

In addition to the general API, ostrich comes with several *tools* to interact with a loaded image.
All tools have to be activated on an initialized image, e.g.:

```js
const canvasElement = document.getElementById('my-canvas-element');

ostrich.initializeElement(canvasElement);
ostrich.activateTool(canvasElement, new ostrich.SliceScrollingTool());
```

### All tools

| Tool Class | Description |
| --- | --- |
| `ostrich.SliceScrollingTool` | Allows to scroll through image slices with the mouse wheel. |
