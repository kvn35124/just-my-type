

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];


$('#keyboard-upper-container').hide();

$('#sentence').append(sentences[0]);



$('body').keydown(function (e) {
    if (e.which === 16) {
        $('#keyboard-upper-container').toggle();
        $('#keyboard-lower-container').hide();
        console.log('keypress');
    }
})

$('body').keyup(function(e) {
    if (e.which === 16) {
        $('keyboard-upper-container').toggle();
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
        console.log('keyup');
    }
})

$('body').keypress(function(e) {
    if (e.which === 126) {
        $('#126').css('backgroundColor', 'yellow');
        console.log('126');
    }
})
$('body').keypress(function(e) {
    if (e.which === 33) {
        $('#33').css('backgroundColor', 'yellow');
        console.log('33');
    }
})
$('body').keypress(function(e) {
    if (e.which === 64) {
        $('#64').css('backgroundColor', 'yellow');
        console.log('64');
    }
})
$('body').keypress(function(e) {
    if (e.which === 35) {
        $('#35').css('backgroundColor', 'yellow');
        console.log('35');
    }
})
$('body').keypress(function(e) {
    if (e.which === 36) {
        $('#36').css('backgroundColor', 'yellow');
        console.log('36');
    }
})
$('body').keypress(function(e) {
    if (e.which === 37) {
        $('#37').css('backgroundColor', 'yellow');
        console.log('37');
    }
})
$('body').keypress(function(e) {
    if (e.which === 94) {
        $('#94').css('backgroundColor', 'yellow');
        console.log('94');
    }
})
$('body').keypress(function(e) {
    if (e.which === 38) {
        $('#38').css('backgroundColor', 'yellow');
        console.log('38');
    }
})
$('body').keypress(function(e) {
    if (e.which === 42) {
        $('#42').css('backgroundColor', 'yellow');
        console.log('42');
    }
})
$('body').keypress(function(e) {
    if (e.which === 40) {
        $('#40').css('backgroundColor', 'yellow');
        console.log('40');
    }
})
$('body').keypress(function(e) {
    if (e.which === 41) {
        $('#41').css('backgroundColor', 'yellow');
        console.log('41');
    }
})
$('body').keypress(function(e) {
    if (e.which === 95) {
        $('#95').css('backgroundColor', 'yellow');
        console.log('95');
    }
})
$('body').keypress(function(e) {
    if (e.which === 43) {
        $('#43').css('backgroundColor', 'yellow');
        console.log('43');
    }
})
$('body').keypress(function(e) {
    if (e.which === 81) {
        $('#81').css('backgroundColor', 'yellow');
        console.log('81');
    }
})
$('body').keypress(function(e) {
    if (e.which === 87) {
        $('#87').css('backgroundColor', 'yellow');
        console.log('87');
    }
})
$('body').keypress(function(e) {
    if (e.which === 69) {
        $('#69').css('backgroundColor', 'yellow');
        console.log('69');
    }
})
$('body').keypress(function(e) {
    if (e.which === 82) {
        $('#82').css('backgroundColor', 'yellow');
        console.log('82');
    }
})
$('body').keypress(function(e) {
    if (e.which === 84) {
        $('#84').css('backgroundColor', 'yellow');
        console.log('84');
    }
})
$('body').keypress(function(e) {
    if (e.which === 89) {
        $('#89').css('backgroundColor', 'yellow');
        console.log('89');
    }
})
$('body').keypress(function(e) {
    if (e.which === 85) {
        $('#85').css('backgroundColor', 'yellow');
        console.log('85');
    }
})
$('body').keypress(function(e) {
    if (e.which === 73) {
        $('#73').css('backgroundColor', 'yellow');
        console.log('73');
    }
})
$('body').keypress(function(e) {
    if (e.which === 79) {
        $('#79').css('backgroundColor', 'yellow');
        console.log('79');
    }
})
$('body').keypress(function(e) {
    if (e.which === 80) {
        $('#80').css('backgroundColor', 'yellow');
        console.log('80');
    }
})
$('body').keypress(function(e) {
    if (e.which === 123) {
        $('#123').css('backgroundColor', 'yellow');
        console.log('123');
    }
})
$('body').keypress(function(e) {
    if (e.which === 125) {
        $('#125').css('backgroundColor', 'yellow');
        console.log('125');
    }
})
$('body').keypress(function(e) {
    if (e.which === 124) {
        $('#124').css('backgroundColor', 'yellow');
        console.log('124');
    }
})
$('body').keypress(function(e) {
    if (e.which === 65) {
        $('#65').css('backgroundColor', 'yellow');
        console.log('65');
    }
})
$('body').keypress(function(e) {
    if (e.which === 83) {
        $('#83').css('backgroundColor', 'yellow');
        console.log('83');
    }
})
$('body').keypress(function(e) {
    if (e.which === 68) {
        $('#68').css('backgroundColor', 'yellow');
        console.log('68');
    }
})
$('body').keypress(function(e) {
    if (e.which === 70) {
        $('#70').css('backgroundColor', 'yellow');
        console.log('70');
    }
})
$('body').keypress(function(e) {
    if (e.which === 71) {
        $('#71').css('backgroundColor', 'yellow');
        console.log('71');
    }
})
$('body').keypress(function(e) {
    if (e.which === 72) {
        $('#72').css('backgroundColor', 'yellow');
        console.log('72');
    }
})
$('body').keypress(function(e) {
    if (e.which === 74) {
        $('#74').css('backgroundColor', 'yellow');
        console.log('74');
    }
})
$('body').keypress(function(e) {
    if (e.which === 75) {
        $('#75').css('backgroundColor', 'yellow');
        console.log('75');
    }
})
$('body').keypress(function(e) {
    if (e.which === 76) {
        $('#76').css('backgroundColor', 'yellow');
        console.log('76');
    }
})
$('body').keypress(function(e) {
    if (e.which === 90) {
        $('#90').css('backgroundColor', 'yellow');
        console.log('90');
    }
})
$('body').keypress(function(e) {
    if (e.which === 88) {
        $('#88').css('backgroundColor', 'yellow');
        console.log('88');
    }
})
$('body').keypress(function(e) {
    if (e.which === 67) {
        $('#67').css('backgroundColor', 'yellow');
        console.log('67');
    }
})
$('body').keypress(function(e) {
    if (e.which === 86) {
        $('#86').css('backgroundColor', 'yellow');
        console.log('86');
    }
})
$('body').keypress(function(e) {
    if (e.which === 66) {
        $('#66').css('backgroundColor', 'yellow');
        console.log('66');
    }
})
$('body').keypress(function(e) {
    if (e.which === 78) {
        $('#78').css('backgroundColor', 'yellow');
        console.log('78');
    }
})
$('body').keypress(function(e) {
    if (e.which === 77) {
        $('#77').css('backgroundColor', 'yellow');
        console.log('77');
    }
})
$('body').keypress(function(e) {
    if (e.which === 60) {
        $('#60').css('backgroundColor', 'yellow');
        console.log('60');
    }
})
$('body').keypress(function(e) {
    if (e.which === 62) {
        $('#62').css('backgroundColor', 'yellow');
        console.log('62');
    }
})
$('body').keypress(function(e) {
    if (e.which === 63) {
        $('#63').css('backgroundColor', 'yellow');
        console.log('63');
    }
})
$('body').keypress(function(e) {
    if (e.which === 96) {
        $('#96').css('backgroundColor', 'yellow');
        console.log('96');
    }
})
$('body').keypress(function(e) {
    if (e.which === 49) {
        $('#49').css('backgroundColor', 'yellow');
        console.log('49');
    }
})
$('body').keypress(function(e) {
    if (e.which === 50) {
        $('#50').css('backgroundColor', 'yellow');
        console.log('50');
    }
})
$('body').keypress(function(e) {
    if (e.which === 51) {
        $('#51').css('backgroundColor', 'yellow');
        console.log('51');
    }
})
$('body').keypress(function(e) {
    if (e.which === 52) {
        $('#52').css('backgroundColor', 'yellow');
        console.log('52');
    }
})
$('body').keypress(function(e) {
    if (e.which === 53) {
        $('#53').css('backgroundColor', 'yellow');
        console.log('53');
    }
})
$('body').keypress(function(e) {
    if (e.which === 54) {
        $('#54').css('backgroundColor', 'yellow');
        console.log('54');
    }
})
$('body').keypress(function(e) {
    if (e.which === 55) {
        $('#55').css('backgroundColor', 'yellow');
        console.log('55');
    }
})
$('body').keypress(function(e) {
    if (e.which === 56) {
        $('#56').css('backgroundColor', 'yellow');
        console.log('56');
    }
})
$('body').keypress(function(e) {
    if (e.which === 57) {
        $('#57').css('backgroundColor', 'yellow');
        console.log('57');
    }
})
$('body').keypress(function(e) {
    if (e.which === 48) {
        $('#48').css('backgroundColor', 'yellow');
        console.log('48');
    }
})
$('body').keypress(function(e) {
    if (e.which === 45) {
        $('#45').css('backgroundColor', 'yellow');
        console.log('45');
    }
})
$('body').keypress(function(e) {
    if (e.which === 61) {
        $('#61').css('backgroundColor', 'yellow');
        console.log('61');
    }
})
$('body').keypress(function(e) {
    if (e.which === 113) {
        $('#113').css('backgroundColor', 'yellow');
        console.log('113');
    }
})
$('body').keypress(function(e) {
    if (e.which === 119) {
        $('#119').css('backgroundColor', 'yellow');
        console.log('119');
    }
})
$('body').keypress(function(e) {
    if (e.which === 101) {
        $('#101').css('backgroundColor', 'yellow');
        console.log('101');
    }
})
$('body').keypress(function(e) {
    if (e.which === 114) {
        $('#114').css('backgroundColor', 'yellow');
        console.log('114');
    }
})
$('body').keypress(function(e) {
    if (e.which === 116) {
        $('#116').css('backgroundColor', 'yellow');
        console.log('116');
    }
})
$('body').keypress(function(e) {
    if (e.which === 121) {
        $('#121').css('backgroundColor', 'yellow');
        console.log('121');
    }
})
$('body').keypress(function(e) {
    if (e.which === 117) {
        $('#117').css('backgroundColor', 'yellow');
        console.log('117');
    }
})
$('body').keypress(function(e) {
    if (e.which === 105) {
        $('#105').css('backgroundColor', 'yellow');
        console.log('105');
    }
})
$('body').keypress(function(e) {
    if (e.which === 111) {
        $('#111').css('backgroundColor', 'yellow');
        console.log('111');
    }
})
$('body').keypress(function(e) {
    if (e.which === 112) {
        $('#112').css('backgroundColor', 'yellow');
        console.log('112');
    }
})
$('body').keypress(function(e) {
    if (e.which === 91) {
        $('#91').css('backgroundColor', 'yellow');
        console.log('91');
    }
})
$('body').keypress(function(e) {
    if (e.which === 93) {
        $('#93').css('backgroundColor', 'yellow');
        console.log('93');
    }
})
$('body').keypress(function(e) {
    if (e.which === 92) {
        $('#92').css('backgroundColor', 'yellow');
        console.log('92');
    }
})
$('body').keypress(function(e) {
    if (e.which === 97) {
        $('#97').css('backgroundColor', 'yellow');
        console.log('97');
    }
})
$('body').keypress(function(e) {
    if (e.which === 115) {
        $('#115').css('backgroundColor', 'yellow');
        console.log('115');
    }
})
$('body').keypress(function(e) {
    if (e.which === 100) {
        $('#100').css('backgroundColor', 'yellow');
        console.log('100');
    }
})
$('body').keypress(function(e) {
    if (e.which === 102) {
        $('#102').css('backgroundColor', 'yellow');
        console.log('102');
    }
})
$('body').keypress(function(e) {
    if (e.which === 103) {
        $('#103').css('backgroundColor', 'yellow');
        console.log('103');
    }
})
$('body').keypress(function(e) {
    if (e.which === 104) {
        $('#104').css('backgroundColor', 'yellow');
        console.log('104');
    }
})
$('body').keypress(function(e) {
    if (e.which === 106) {
        $('#106').css('backgroundColor', 'yellow');
        console.log('106');
    }
})
$('body').keypress(function(e) {
    if (e.which === 107) {
        $('#107').css('backgroundColor', 'yellow');
        console.log('107');
    }
})
$('body').keypress(function(e) {
    if (e.which === 108) {
        $('#108').css('backgroundColor', 'yellow');
        console.log('108');
    }
})
$('body').keypress(function(e) {
    if (e.which === 59) {
        $('#59').css('backgroundColor', 'yellow');
        console.log('59');
    }
})
$('body').keypress(function(e) {
    if (e.which === 39) {
        $('#39').css('backgroundColor', 'yellow');
        console.log('39');
    }
})
$('body').keypress(function(e) {
    if (e.which === 122) {
        $('#122').css('backgroundColor', 'yellow');
        console.log('122');
    }
})
$('body').keypress(function(e) {
    if (e.which === 120) {
        $('#120').css('backgroundColor', 'yellow');
        console.log('120');
    }
})
$('body').keypress(function(e) {
    if (e.which === 99) {
        $('#99').css('backgroundColor', 'yellow');
        console.log('99');
    }
})
$('body').keypress(function(e) {
    if (e.which === 118) {
        $('#118').css('backgroundColor', 'yellow');
        console.log('118');
    }
})
$('body').keypress(function(e) {
    if (e.which === 98) {
        $('#98').css('backgroundColor', 'yellow');
        console.log('98');
    }
})
$('body').keypress(function(e) {
    if (e.which === 110) {
        $('#110').css('backgroundColor', 'yellow');
        console.log('110');
    }
})
$('body').keypress(function(e) {
    if (e.which === 109) {
        $('#109').css('backgroundColor', 'yellow');
        console.log('109');
    }
})
$('body').keypress(function(e) {
    if (e.which === 44) {
        $('#44').css('backgroundColor', 'yellow');
        console.log('44');
    }
})
$('body').keypress(function(e) {
    if (e.which === 46) {
        $('#46').css('backgroundColor', 'yellow');
        console.log('46');
    }
})
$('body').keypress(function(e) {
    if (e.which === 47) {
        $('#47').css('backgroundColor', 'yellow');
        console.log('47');
    }
})
$('body').keypress(function(e) {
    if (e.which === 32) {
        $('#32').css('backgroundColor', 'yellow');
        console.log('32');
    }
})
