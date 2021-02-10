import $ from 'jquery';
import '../../../css/animate.css'

$(document).ready(function (){

    setInterval(() => {

        setInterval(() => {
            $('#introducao').addClass('animated-middle fadeInUp').removeClass('opacity-0')

            setInterval(() => {
                $('#img1').addClass('animated-middle fadeInUp').removeClass('opacity-0')
    
                setInterval(() => {
                    $('#img2').addClass('animated-middle fadeInUp').removeClass('opacity-0')

                    setInterval(() => {
                        $('#pgf-01').addClass('animated-middle fadeInUp').removeClass('opacity-0')

                        setInterval(() => {
                            $('#pgf-02').addClass('animated-middle fadeInUp').removeClass('opacity-0')
                            
                            setInterval(() => {
                                $('#pgf-03').addClass('animated-middle fadeInUp').removeClass('opacity-0')
                            
                                setInterval(() => {
                                    $('#slide01').addClass('animated-middle fadeOutLeft')

                                    setInterval(() => {
                                        $('#slide01').remove()  
                                    }, 2000);

                                }, 2000);
                            
                            }, 2000);

                        }, 2000);

                    }, 2000);

                }, 2000);

            }, 2000);

        }, 2000);

    }, 2000);

})