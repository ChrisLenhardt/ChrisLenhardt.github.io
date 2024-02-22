const interval = setInterval(function() {
    var scrollTop = $(window).scrollTop();
  }, 5000);


addEventListener("scroll", (event) => {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 900) {
        var elements = document.getElementsByClassName("nav-link");
        for (i = 0, len = elements.length;  i < len; i++) {
            elements[i].style.color = 'white';
        }
    } else {
        var elements = document.getElementsByClassName("nav-link");
        for (i = 0, len = elements.length;  i < len; i++) {
            elements[i].style.color = 'rgb(25,25,25)';
        }
    }
});
