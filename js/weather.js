$(document).ready(function() {
    $.ajax({
        url : "http://api.wunderground.com/api/b4cb03d2871dd142/geolookup/conditions/q/OH/Cincinnati.json",
        dataType : "jsonp",
        success : function(parsed_json) {
        var location = parsed_json['location']['city'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var condition = parsed_json['current_observation']['weather']
        var icon = parsed_json['current_observation']['icon_url']
        // alert("Current temperature in " + location + " is: " + temp_f + "°");

        document.getElementById('current-temp').innerHTML=temp_f + "°";
        document.getElementById('current-condition').innerHTML=condition;
        document.getElementById('icon').src=icon;
        }
    });
});


$(document).ready(function() {
    $.ajax({
        url : "http://api.wunderground.com/api/b4cb03d2871dd142/geolookup/forecast/q/OH/Cincinnati.json",
        dataType : "jsonp",
        success : function(parsed_json) {

            var location = parsed_json['location']['city'];
            html = ""
            var forecasttxt = parsed_json['forecast']['simpleforecast']['forecastday'].forEach(function(forecastday){
                html = html + forecastday.high.fahrenheit + "°"

            });

            document.getElementById('foretxt').innerHTML=html;
        }
    });
});