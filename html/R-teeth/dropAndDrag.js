
function initEvent () {
  var slider = document.querySelectorAll('.slider');
  var thumb = document.querySelectorAll('.thumb');

  thumb[0].onmousedown = function(e) {
      var thumbCoords = getCoords(thumb[0]);
      var shiftX = e.pageX - thumbCoords.left;

      var sliderCoords = getCoords(slider[0]);

      document.onmousemove = function(e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left;

        if (newLeft < 0) {
          newLeft = 0;
        }
        var rightEdge = slider[0].offsetWidth - thumb[0].offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        updateCanvas();
        thumb[0].style.left = newLeft + 'px';
      }

      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };
      return false; // disable selection start (cursor change)
  };
  thumb[1].onmousedown = function(e) {
      var thumbCoords = getCoords(thumb[1]);
      var shiftX = e.pageX - thumbCoords.left;

      var sliderCoords = getCoords(slider[1]);

      document.onmousemove = function(e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left;

        if (newLeft < 0) {
          newLeft = 0;
        }
        var rightEdge = slider[1].offsetWidth - thumb[1].offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        updateCanvas();
        thumb[1].style.left = newLeft + 'px';
      }

      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };
      return false; // disable selection start (cursor change)
  };
  thumb[2].onmousedown = function(e) {
      var thumbCoords = getCoords(thumb[2]);
      var shiftX = e.pageX - thumbCoords.left;

      var sliderCoords = getCoords(slider[2]);

      document.onmousemove = function(e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left;

        if (newLeft < 0) {
          newLeft = 0;
        }
        var rightEdge = slider[2].offsetWidth - thumb[2].offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        updateCanvas();
        thumb[2].style.left = newLeft + 'px';
      }

      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;

      };
      return false; // disable selection start (cursor change)
  };
}

function getCoords (elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  }
}
