import $ from 'jquery'

$(document).ready(function() {
    //
    $("#page1").show()
    $("#page2").hide()
    $("#page3").hide()
    
    //Páginas

    $("#btn").on("click", function () {
        
        $("#page1").hide("slow")
        $("#page2").show("slow")

        $("#btn").on("click", function () {
            $("#page2").hide("slow")
            $("#page3").show("slow")
    
            $("#btn").on("click", function () {
                $("#page3").hide("slow")
                $("#page4").show("slow")
        
                
            })
        })
    })

})

