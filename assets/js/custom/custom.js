$(function() {
	$('#helloworld').append('hello world!');
});


/*! Responsive tags */
/*! http://www.innovedesigns.com/web-development-guide/jquery-responsive-detecting-mobile-screens-width-height/ */
function responsiveFn(objID, margin) {

  if (margin != undefined) {
    if (margin.assocArraySize != 4) {
      var margin = {top: 0, right: 0, bottom: 0, left: 0},
    }
  }

   width = $( window ).width();
   height = $( window ).height();
   factor = 0.35;

  // Executing Both width() and height()
  document.getElementById(objID).width=Math.floor(width*factor)+margin['left']+margin['right'];
  document.getElementById(objID).height=Math.floor(height*factor)+margin['top']+margin['bottom'];

  // Do a custom code here
  //  if(width <= 480){
  // document.getElementById('widthID').innerHTML+=" -> This is an Iphone Screen Size";

    }
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
