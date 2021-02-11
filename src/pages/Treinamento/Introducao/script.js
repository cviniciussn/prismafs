import $ from 'jquery';
import '../../../css/animate.css'

$(document).ready(function (){

    // $('#introducao').remove()
    // $('#img1').remove()
    // $('#img2').remove()
    // $('#pgf-01').remove()
    // $('#pgf-02').remove()
    // $('#pgf-03').remove()

    
    
    setInterval(() => {
    
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
                        
                        }, 2000);

                    }, 2000);

                }, 2000);

            }, 2000);

        }, 2000);

    }, 2000);
})