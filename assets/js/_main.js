/*! Responsive Menu */
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/
//  The function to change the class
var changeClass = function (r,className1,className2) {
  var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
  if( regex.test(r.className) ) {
    r.className = r.className.replace(regex,' '+className2+' ');
    }
    else{
    r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
    }
    return r.className;
};
//  Creating our button in JS for smaller screens
var menuElements = document.getElementById('site-nav');
menuElements.insertAdjacentHTML('afterBegin','<button type="button" role="button" id="menutoggle" class="navtoggle navicon-lines-button x" aria-hidden="true"><span class="navicon-lines"></span>menu</button>');

//  Toggle the class on click to show / hide the menu
document.getElementById('menutoggle').onclick = function() {
  changeClass(this, 'navtoggle active', 'navtoggle');
};
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/comment-page-2/#comment-438918
document.onclick = function(e) {
  var mobileButton = document.getElementById('menutoggle'),
    buttonStyle =  mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;

  if(buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
    changeClass(mobileButton, 'navtoggle active', 'navtoggle');
  }
};

/*! Plugin options and other jQuery stuff */

// FitVids options
$(function() {
	$("article").fitVids();
});

// Table of Contents toggle
$(function() {
  $(".toc h3").click(function () {
    $("#drawer").toggleClass("js-hidden");
  });
});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

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
