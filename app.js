$(document).ready(function () {
    $.ajax({
        url: "https://data.ny.gov/api/views/d8hf-wqd9/rows.json?accessType=DOWNLOAD",
        dataType: 'json',
        success: function (results) {
            // first scholarship
            var scholarship1 = results.data[0][10];
            // scholarship location = results.data[0][9];
            // scholarship fte = results.data[0][12];
            // scholarship value = 
            var schoLocation = results.data[0][9];
            var schoFTE = results.data[0][12];
            var schoValue = results.data[0][13];
            // second scholarship
            var scholarship2 = results.data[1][10];
            var schoLocation1 = results.data[1][9];
            var schoFTE1 = results.data[1][12];
            var schoValue1 = results.data[1][13];


            // console.log(scholarship1);
            $('.scholarship-list').append('<div class="scholarship">' + scholarship1 + '<br>' + '<div class="btn" data-popup-open="popup-1" href="#">' + " Sector Group: " + schoLocation + '<br>' + "FTE: " + schoFTE + '<br>' + "Money donated: " + schoValue + '</div>');
            $('.scholarship-list').append('<div class="scholarship">' + scholarship2 + '<br>' + " Sector Group: " + schoLocation1 + '<br>' + "FTE: " + schoFTE1 + '<br>' + "Money donated: " + schoValue1 + '</div>');

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