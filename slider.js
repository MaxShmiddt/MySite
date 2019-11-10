autoSlider();
var left = 0;
var timer;

function autoSlider() {
    timer = setTimeout (function () {
            var polosa = document.getElementById("polosa");
            left = left - 256;
            if(left < -1024) {
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + "px";
        autoSlider();

    },1000);

}

