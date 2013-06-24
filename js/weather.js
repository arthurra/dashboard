$(document).ready(function() {
    $.ajax({
        url : "http://api.wunderground.com/api/b4cb03d2871dd142/geolookup/conditions/forecast/q/OH/Cincinnati.json",
        dataType : "jsonp",
        success : function(parsed_json) {
        var location = parsed_json['location']['city'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var condition = parsed_json['current_observation']['weather']
        // alert("Current temperature in " + location + " is: " + temp_f + "°");

        document.getElementById('current-temp').innerHTML=temp_f + "°" + "and" + " " + condition;
        }
    });
});