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
   
   const canvasElement = document.getElementById('my-canvas-element');
   const imageData = new ostrich.OstrichImageData(/*...*/);
   
   ostrich.initializeElement(canvasElement, imageData);
</script>
```

### `ostrich.OstrichImageData`

Image data to be rendered has to be passed as an instance of `ostrich.OstrichImageData` to `ostrich.initializeElement`:

```js

// image data is passed by a Int16Array containing the actual data accompinied by dimensionality information as a three-valued array
const dimensions = [10, 600, 800]; // depth, height, width
const data = new Int16Array(dimensions[0] * dimensions[1] * dimensions[2]);

const imageData = new ostrich.OstrichImageData(data, dimensions);
```

### Methods

| Method | Description |
| --- | --- |
| `ostrich.changeTransform(canvasElement: HTMLCanvasElement, scale: ?number, translateX: ?number, translateY: ?number, render: boolean)` | Changes the viewport transform. |
| `ostrich.changeVoiWindow(canvasElement: HTMLCanvasElement, windowCenter: number, windowWidth: number, render: boolean)` | Changes the Value Of Interest (*VOI*) window. |
| `ostrich.initializeElement(canvasElement: HTMLCanvasElement, imageData: ostrich.OstrichImageData)` | Initializes ostrich on the given canvas element. |
| `ostrich.jumpToSlice(canvasElement: HTMLCanvasElement, slice: number, render: boolean)` | Switches to the given slice number. |

### Events

The following events are dispatched on an initialized `<canvas>`-element:

| Event | Description | Event Details |
| --- | --- | --- |
| `ostrich.initialized` | Image has been initialized. | - |
| `ostrich.rendered` | Image has been rendered after some change. | - |
| `ostrich.sliceChanged` | Slice has been changed. | `{ from: number, to: number }` |
| `ostrich.toolActivated` | Tool has been activated. | `{ tool: Tool }` |
| `ostrich.toolDeactivated` | Tool has been deactivated. | `{ tool: Tool }` |
| `ostrich.voiWindowChanged` | VOI window has been changed. | `{ newWindowCenter: number, newWindowWidth: number }` |
| `ostrich.transformChanged` | VOI window has been changed. | `{ scale: number, translateX: number, translateY: number }` |

## Tools

In addition to the general API, ostrich comes with several *tools* to interact with a loaded image.
All tools have to be activated on an initialized image, e.g.:

```js
const canvasElement = document.getElementById('my-canvas-element');
const imageData = new ostrich.OstrichImageData(/*...*/);

ostrich.initializeElement(canvasElement, imageData);
ostrich.activateTool(canvasElement, new ostrich.SliceScrollingTool());
```

### All tools

| Tool Class | Description |
| --- | --- |
| `ostrich.CursorInfoTool` | Displays information for the current cursor position. |
| `ostrich.PanDraggingTool` | Viewport panning by dragging mouse-button. |
| `ostrich.SliceScrollingTool` | Allows to scroll through image slices with the mouse wheel. |
| `ostrich.VoiWindowDraggingTool` | Changes VOI windowing by left-click-dragging. |
| `ostrich.ZoomDraggingTool` | Changes viewport scale by dragging mouse-button. |
