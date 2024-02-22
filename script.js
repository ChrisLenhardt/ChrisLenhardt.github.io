const interval = setInterval(function() {
    var scrollTop = $(window).scrollTop();
  }, 5000);


addEventListener("scroll", (event) => {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 600 && scrollTop < 1500) {
        var elements = document.getElementsByClassName("myNavBar");
        for (i = 0, len = elements.length;  i < len; i++) {
            elements[i].style.color = 'white';
        }
    } else if (scrollTop > 1200) {
        var elements = document.getElementsByClassName("myNavBar");
        for (i = 0, len = elements.length;  i < len; i++) {
            elements[i].style.color = 'rgb(25,25,25)';
        }
    } else {
        var elements = document.getElementsByClassName("myNavBar");
        for (i = 0, len = elements.length;  i < len; i++) {
            elements[i].style.color = 'rgb(25,25,25)';
        }
    }
});
