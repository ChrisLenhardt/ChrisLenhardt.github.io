const interval = setInterval(function() {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
  }, 5000);


addEventListener("scroll", (event) => {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 600) {
        var elements = document.getElementsByClassName("myNavBar");
        console.log(elements[0])
        for (i = 0, len = elements.length;  i < len; i++) {
            elements[i].style.color = 'white';
            console.log("white")
        }
    } else {
        var elements = document.getElementsByClassName("myNavBar");
        for (i = 0, len = elements.length;  i < len; i++) {
            elements[i].style.color = 'rgb(25,25,25)';
        }
    }
});
