// Responsive tags
// http://www.innovedesigns.com/web-development-guide/jquery-responsive-detecting-mobile-screens-width-height/
function responsiveFn(objID, margin) {
  if (margin != undefined) {
    if ($.assocArraySize(margin) != 4) {
      var margin = {top: 0, right: 0, bottom: 0, left: 0};
    }
  } else {
    var margin = {top: 0, right: 0, bottom: 0, left: 0};
  }

   width = $( window ).width();
   height = $( window ).height();
   factor = 0.35;

  newWidth = Math.floor(width*factor)+margin['left']+margin['right'];

  document.getElementById(objID).setAttribute('width',newWidth);
  //document.getElementById(objID).setAttribute('height',Math.floor(height*factor)+margin['top']+margin['bottom']);

  // custom code
  //  if(width <= 480){
  // document.getElementById('widthID').innerHTML+=" -> This is an Iphone Screen Size";
  //  }
  return newWidth;
}

// get the size of associative arrays
$.assocArraySize = function(obj) {
  // http://stackoverflow.com/a/6700/11236
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
