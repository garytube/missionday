// MISSION DAY JS
//
// by geryy 
// <3 besmurf.de
//---------------------


$(document).ready(function() {

// Mission List Script

	$('#mName li').on('mouseenter mouseleave', function (e) {
    var curClass = $(this).attr("class"); //take class
    if (e.type == "mouseenter") {
        $("#" + curClass).addClass("active"); //use class name to get the mission id in second list
    } else {
        $("#" + curClass).removeClass("active");
    }
    });

        $('.mission-badge').on('mouseenter mouseleave', function (e) {
    var curClass = $(this).attr("id"); //take class
    if (e.type == "mouseenter") {
        $("." + curClass).addClass("on"); //use class name to get the mission id in second list
    } else {
        $("." + curClass).removeClass("on");
    }
    });

}); // end ready