$(document).ready(function () {
    document.body.className += ' is-loaded';

    $('#ad').keyup(function () {
        $('.slider-text img').removeClass('visible');
        $('.slider-text img').addClass('hidden');
        if ($(this).val().length > 0) {
            $('#userName').text($(this).val() + ',');
        } else {
            $('#userName').text($(this).val());
            $('.slider-text img').addClass('visible');
            $('.slider-text img').removeClass('hidden');
        }
    });
    //slider 
    /* $('.slider').slick({
        fade: true,
        speed: 2000,
        cssEase: 'ease-out',
        touchThreshold: 100,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    }); */
});

function validFunc(submitId, nameId, surnameId, telId, mailId, selectId, messageId, accId, decId) {

    $(submitId).click(function (event) {
        var name = $(nameId).val();
        var surname = $(surnameId).val();
        var telephone = $(telId).val();
        var email = $(mailId).val();
        var projects = $(selectId).val();
        var message = $(messageId).val();
        var nameReg = /^[A-Za-zşŞıİçÇöÖüÜĞğ ]+$/;
        var numberReg = /^[0-9]+$/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var kabul = $(accId);
        var kdegil = $(decId);

        if (name == "") {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen adınızı giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (!nameReg.test(name)) {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen geçerli bir ad giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (surname == "") {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen soyadınızı giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (!nameReg.test(surname)) {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen geçerli bir soyad giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (telephone == "") {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen telefon numaranızı giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (!numberReg.test(telephone)) {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen geçerli bir telefon numarası giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();
        } else if (!kabul.is(':checked') && !kdegil.is(':checked')) {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen yasal uyarıyı kabul edip etmediğinizi belirtiniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();
        } else {
            $(submitId).click(function () {
                return true;
            });
        }
    });

};
validFunc('#submit', '#ad', '#soyad', '#tel', '#email', '#proje', '#mesaj', '#ke', '#kt');
$('#legalWarning').click(function () {
    swal({
        title: 'Uyarı!',
        text: 'Formda yer alan her türlü kişisel bilgimin, DKY pazarlama faaliyetlerinde, kampanyalarında, reklamlarında, tanıtımlarında ve iletişim çalışmalarında paylaşılmasına, işlenebilmesine, kullanılmasına, saklanmasına, tarafıma sms, mms, email gönderilmesine, sesli arama yapılmasına ve posta gönderilmesine muvafakat ediyor ve izin veriyorum.',
        type: 'warning',
        confirmButtonText: 'OK'
    });
});

$.browser.chrome = $.browser.webkit && !!window.chrome;
if ($.browser.chrome) {
    $('html').addClass('webkit');
}

//screenShot
$(document).ready(function () {
    $('body').append('<div id="tempCanvas"/>');
    $('body').append('<a id="tempLink"/>');
    $('#getScreen').attr('href', 'javascript:getScreenshot()');
    $('#mobileGetScreen').attr('href', 'javascript:getScreenshot()');
});
function getScreenshot() {
    var emptyDiv = $('#tempCanvas');
    var tempLink = $('#tempLink');
    var el = $('.slider');
    html2canvas(el, {
        onrendered: function (canvas) {
            emptyDiv.html("");
            emptyDiv.append(canvas);
            if (navigator.userAgent.indexOf("MSIE ") > 0 ||
                navigator.userAgent.match(/Trident.*rv\:11\./)) {
                var blob = canvas.msToBlob();
                window.navigator.msSaveBlob(blob, 'dky_screenshot.png');
            }
            else {
                tempLink.attr('href', canvas.toDataURL("image/png"));
                tempLink.attr('download', 'dky_screenshot.png');
                tempLink[0].click();
            }
            $('canvas').remove();
        }
    });
}