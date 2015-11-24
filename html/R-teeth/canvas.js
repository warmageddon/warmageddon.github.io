function initCanvas (ctxWidth, ctxHeight) {
  var c = document.getElementById("image"); 
  var ctx = c.getContext("2d");

  c.width = ctxWidth;
  c.height = ctxHeight;
}
function updateCanvas () {
  var lineWidth = getAttr('line', 500);
  var max = getAttr('max', 50);
  var a = getAttr('angle', 50);
  console.log(lineWidth +"  "+ max +"  "+ a);
  clearCtx ();
  drawTeethTree (lineWidth, 500, 750, a, max, 0)
}
function drawTeethTree (lineWidth, x, y, a, max, n) {
  var ctx = getCtx();
  if(lineWidth > max) {
    lineWidth = lineWidth * 0.7;
    ctx.translate(x,y);
    if(n != 0) {
      rorateCtx(a);
    }

    drawLine(0, 0, 0, -lineWidth);
    drawTeethTree(lineWidth, 0, -lineWidth, a, max, n+1);
    drawTeethTree(lineWidth, 0, -lineWidth, -a, max, n+1);
    if(n != 0) {
      rorateCtx(-a);
    }
    ctx.translate(-x,-y);
  }
}
function drawLine (x1, y1, x2, y2) {
  var ctx = getCtx();
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "#"+getRnd(0,999);
  ctx.stroke();
}
function clearCtx () {
  var c = getCanvas();
  var ctx = getCtx();
  ctx.fillStyle = "#ddd";
  ctx.fillRect(0, 0, c.width, c.height);
}
function rorateCtx (angle) {
  var ctx = getCtx();

  ctx.rotate(Math.PI/angle);
}
function getRnd(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getCtx () {
  var c = document.getElementById("image"); 
  var ctx = c.getContext("2d");
  return ctx;
}
function getCanvas () {
  var c = document.getElementById("image"); 
  return c;
}
function getAttr (attrName, maxValue) {
  var tmp = document.querySelectorAll('.thumb');
  for(var i = 0; i < tmp.length; i++) {
    if (tmp[i].getAttribute('name') == attrName) {
      el = tmp[i].getBoundingClientRect();
      elParent = tmp[i].parentNode.getBoundingClientRect();
      var current = (el.left - elParent.left).toFixed();
      var max = (elParent.width - el.width).toFixed();
      return (current * maxValue)/max;
    }
  }
}