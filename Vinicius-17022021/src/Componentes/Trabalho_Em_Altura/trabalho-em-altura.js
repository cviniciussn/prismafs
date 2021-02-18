import React from 'react'
import $ from 'jquery'

$(window).on('load', function() {
$(document).ready()
    $("[data-toggle='toggle']").click(function () {
        var selector = $(this).data("target");
        $(selector).toggleClass('in');
    });
});