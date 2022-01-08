# Changelog

## [unreleased]

- Chg: Now using `Int16Array` instead of `Uint16Array` for voxel data
- Chg: Introduced `ostrich.OstrichImageData` which is now taken by `ostrich.initializeElement()`
- Fix: Fixed data-order to z-y-x
- Fix: Linear VOI transform was off center
- Add: Implemented viewport scaling and translation via transform
- Add: Added tool `ostrich.CursorInfoTool`
- Add: Added tool `ostrich.PanDraggingTool`
- Add: Added tool `ostrich.VoiWindowDraggingTool`
- Add: Added tool `ostrich.ZoomDraggingTool`
- Add: Implemented Value Of Interest (VOI) windowing
- Add: Added events `ostrich.voiWindowChanged` and `ostrich.transformChanged`
- Add: Added method `ostrich.changeVoiWindow()`
- Add: Added parameter `render` to `ostrich.jumpToSlice`

## 0.2.0

- Add: Added events `ostrich.initialized`, `ostrich.rendered`, `ostrich.sliceChanged`, `ostrich.activateTool`, `ostrich.deactivateTool`
- Add: Added method `ostrich.jumpToSlice()`
- Add: Added tool `ostrich.SliceScrollingTool`
- Add: Implemented basic rendering

## 0.1.0

- Initial release
