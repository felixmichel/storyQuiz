// Initialisierung des Carousels, ohne Zeitschaltung und Durchlauf


$("#carousel-example-generic").carousel({
    interval: false,
    wrap: false
});

// Slider-Buttons

$( '.button' ).on( 'click', function() {
    if ($(this).val() === 'Stimmt') {
        $('#text-slide2').text('Richtig.');
        $('#text-slide7').text('Nicht in jedem Fall.');

    }
    else if ($(this).val() === 'Nur ein Klischee'){
        $('#text-slide2').text('Sorry, falsch geraten.');
    }

    else if ($(this).val() === 'So ein Quatsch'){
        $('#text-slide7').text('Richtig, auch Frauen können hart sein.');
    }


    else if ($(this).val() === 'Jawoll') {

        $('#text-slide12').text('Falsch. So eindeutig sind die Unterschiede nicht.');
    }

    else if ($(this).val() === 'Blödsinn!') {

        $('#text-slide12').text('Richtig, Frau und Mann sind ähnlicher als man denkt.');
    }

});

$('.trigger').click(function() {
    $('.placeholder').hide();
    $('.gif').show();
});
