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


    var citiesByCountry = {
        SY: ['دمشق','حماه','حلب'],
        LB: ['بيروت','صور','طرابلس','هرمل'],
        IR: ['بغداد','الموصل'],
        JO: ['عمان','الزرقاء'],
        SA: ['جدة','الرياض'],
        EG: ['القاهرة','الإسكندرية']
    };

    //عندما يتغير البلد
    $('#contact-form select[name="country"]').on("change", function() {

        //إجلب رمز البلد
        var country = $(this).val();

        //إجلب مدن هذا البلد من المصفوفة
        var cities = citiesByCountry[country];

        //إفراغ قائمة المدن
        $('#contact-form select[name="city"]').empty();

        //إضافة خيار مدينة
        $('#contact-formt select[name="city"]').append(
            '<option disabled selected value="">إختر مدينة</option>'
        );

        cities.forEach(function(city) {
            var newOption = $('<option></option>');
            newOption.text(city);
            newOption.val(city);
            $('#contact-form select[name="city"]').append(newOption);
        });
    });
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
