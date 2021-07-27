import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/style.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import '@popperjs/core/dist/umd/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';

import $ from "jquery";

$(document).ready(function(){
    $(".first-list-element").addClass("active");
    $(".nav-item").on("click", function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function(){
    $("#myBtn").on("click", function (){
        read();
    });
});

function read() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn")

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "اقرأ أقل";
        moreText.style.display = "inline";
    }

}
