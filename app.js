$(document).ready(function () {
    $.ajax({
        url: "https://data.ny.gov/api/views/d8hf-wqd9/rows.json?accessType=DOWNLOAD",
        dataType: 'json',
        success: function (results) {
            // first scholarship
            var scholarship1 = results.data[31][10];
            // scholarship location = results.data[0][9];
            // scholarship fte = results.data[0][12];
            // scholarship value = 
            var schoLocation = results.data[0][9];
            var schoFTE = results.data[31][12];
            var schoValue = results.data[31][13];
            // second scholarship
            var scholarship2 = results.data[155][10];
            var schoLocation1 = results.data[155][9];
            var schoFTE1 = results.data[155][12];
            var schoValue1 = results.data[155][13];


            // console.log(scholarship1);
             $('.scholarship-list').append('<div class="scholarship">' + scholarship1 + '<br>' + '<div class="btn" data-popup-open="popup-1" href="#">' + " Sector Group of Scholarship: " + schoLocation + '<br>' + "FTE: " + schoFTE + '<br>' + "$$$ (Dollars): " + schoValue + '</div>');
             $('.scholarship-list').append('<div class="scholarship">' + scholarship2 + '<br>' + '<div class="btn" data-popup-open="popup-2" href="#">' + " Sector Group of Scholarship: " + schoLocation1 + '<br>' + "FTE: " + schoFTE1 + '<br>' + "$$$ (Dollars): " + schoValue1 + '</div>');

            //   $('.scholarship-list').append('<div class="scholarship">' + scholarship2+'<br>'+" Location: "+schoLocation1 +'<br>'+"FTE: "+schoFTE1+'<br>'+"Money donated: "+schoValue1+ '</div>');




            //    console.log(results);
            // var scholarship2 = results.data[0][17];
            // console.log(scholarship2);
            // $('h3').append(scholarship2);
        }
    });
    // This is the new function added.
    $(function () {
        //----- OPEN
        $('[data-popup-open]').on('click', function (e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

            e.preventDefault();
        });

        //----- CLOSE
        $('[data-popup-close]').on('click', function (e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

            e.preventDefault();
        });
    });

});

$(window).scroll(function () {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 100) {

        $('.bg').addClass('show');

    } else {

        $('.bg').removeClass('show');

    };
});

$('.scroll').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1500);
});
var database = firebase.database().ref();

function save() {
    var name = $('#gmailname').val();
    var gmail = $("#gmail").val();
    console.log(name + " " + gmail);

    var value = {
        NAME: name,
        GMAIL: gmail
    }
    database.push(value);
}
    database.on("child_added", function (rowData) {
        var row = rowData.val();
        var name = row.NAME;
        var gmail = row.GMAIL;
        console.log(name + gmail);
        $('#h42').empty();
        $('#h42').append("Thank you for signing up " + name);
    })

save();