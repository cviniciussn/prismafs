import $ from 'jquery';
import '../../../css/animate.css'

$(document).ready(function (){
    "use strict";

    $('#slide01').hide();
        $('#img01').hide();
        $('#img02').hide();
    $('#slide02').hide();

    setInterval(() => {
        $('#introducao').fadeIn('slow')
    }, 4000);

    // setTimeout(function() {
    //     $('#introducao').addClass('animated-middle fadeOut');
    // }, 2000)

})