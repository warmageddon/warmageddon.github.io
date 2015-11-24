window.onload = function() {
  var max = 10;
  var lineWidth = 250;
  var ctxWidth = 1000, ctxHeight = 750;
  var x = ctxWidth/2, y = ctxHeight;

  initCanvas (ctxWidth, ctxHeight);

  clearCtx();
  drawTeethTree(lineWidth, x, y, 0, max);

  initEvent();
}