 function move(count, clas) {
     var elem = document.getElementsByClassName(clas)[0];
     var width = 0;
     if (elem.style.width == '0px') {
         var id = setInterval(frame, 10);
     }

     function frame() {
         if (width >= count) {
             clearInterval(id);
         } else {
             width++;
             elem.style.width = width + '%';
         }
     }
 }

 function scrollAnimate(name,length) {
     $(window).scroll(function () {
         if ($(this).scrollTop() > ($('.' + name).offset().top + $('.' + name).outerHeight() - $(window).height())) {
             move(length, name);
         }
     });
 }
