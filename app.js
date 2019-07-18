

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];


$('#keyboard-upper-container').hide();

let sentI = 0;
let letterI = 0;

$('#sentence').append(sentences[sentI]);
$('#target-letter').append(sentences[sentI][letterI]);




$('body').keydown(function (e) {
    if (e.which === 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
        console.log('keypress');
    }
})

$('body').keyup(function (e) {
    $('.highlight').removeClass('highlight');
    if (e.which === 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
        console.log('keyup');
    }
})

$('body').keypress(function (e) {
    $('#' + e.which).addClass('highlight');
    // letterI++;
    $('#target-letter').text(sentences[sentI][letterI]);
    if (e.which === sentences[0].charCodeAt(letterI)) {
        letterI++;
        $('#yellow-block').css('marginLeft', '+=19px');
        // $('#feedback').addClass('glyphicon glyphicon-ok');
        // $('#feedback').removeClass('glyphicon glyphicon-remove');
        if (letterI === sentences[sentI][-1]){
            // $('<span class=glyphicon glyphicon-ok></span>').appendTo('#feedback');
            let correct = $('<span class="glyphicon glyphicon-ok"></span>')
            $('#feedback').append(correct)
           sentI++;
           $('#sentence').append(sentences[sentI]);
       }
    } else {
        $('<span class=glyphicon glyphicon-remove></span>').appendTo('#feedback');
        $('<span></span>').removeClass('.glyphicon glyphicon-ok');
    }
})

$('body').keypress(function (e) {
    if (letterI === sentI.length){
         $('#sentence').remove(sentences[sentI]);
        sentI++;
        $('#sentence').append(sentences[sentI]);
    }
})

let charCount = 0

$('body').keypress(function(e) {
    if (e.which === sentences[0].charCodeAt(charCount)) {
        charCount++;
        console.log('Correct')
    } else {
        console.log('WRONG!!!')
    }
})

// let numberOfWords = 54;

// let numberOfMistakes =

// let wpm = (numberOfWords / minutes - 2 * numberOfMistakes)