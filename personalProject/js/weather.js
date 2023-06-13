
// 28981aff47d330d87837128734f55567 open weather api key


// 현재 위치 좌표값 얻기

if (navigator.geolocation) {
    // 현재 위치를 읽는 것이 가능할 때

    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;     //위도
        var lon = position.coords.longitude;    //경도

        const url = "https://api.openweathermap.org/data/2.5/onecall?id=1842936&lat="
                    + lat +"&lon=" + lon +"&appid=28981aff47d330d87837128734f55567";

    $.getJSON(url, function(data) {
        // openweathermap data 불러오기
        var current = data.current;
        var ctemp = data.current.temp;
        var description = current.weather[0].description;
        var feel = current.feels_like;

    });
        




    });


}   else {
    // 위치 정보를 가져 올 수 없었을 때 
    alert("위치 정보를 가져오지 못했습니다.");
}






















url = 'https://api.openweathermap.org/data/2.5/onecall?id=1842936&lat=37.623611&lon=126.714172&exclude=minutely&appid=28981aff47d330d87837128734f55567';
$('#main_weather .load_img').show();
   $.getJSON(url, function(data) {
       var  Now = new Date(),
           StrNow = String(Now),
           nowYear = String(Now.getFullYear()),
           nowMon = String(Now.getMonth()+1),
           nowDay = String(Now.getDate());
       var week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT');              
       var month = new Array('JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC');
       var NowToday = month[Now.getMonth()]+"　"+nowDay+'th'+"　"+week[Now.getDay()];
       
           

       var timezone = data.timezone;       
       var city = timezone.replace('Asia/Seoul','GIMPO');
       var current = data.current;       
       var ctemp = data.current.temp;
       var description = current.weather[0].description;
       var feel = current.feels_like;
       var c_weather = current.weather[0].main;
       var c_icon = current.weather[0].id;
       var background = '10d' ;//current.weather[0].icon;
       var daily = data.daily;
       var dtemp = daily[Now.getDay()].temp.day;
       var temp_min = daily[Now.getDay()].temp.min;
       var temp_max = daily[Now.getDay()].temp.max;
       var rain = daily[Now.getDay()].rain;
       var dew_point = daily[Now.getDay()].dew_point;
       var pop = daily[Now.getDay()].pop;
       var second_temp = daily[1].temp.day;
       var third_temp = daily[2].temp.day;
       var fourth_temp = daily[3].temp.day;
       var fifth_temp = daily[4].temp.day;
       var sixth_temp = daily[5].temp.day;
       var seventh_temp = daily[6].temp.day;
       var today_icon = daily[0].weather[0].id;
       var second_icon = daily[1].weather[0].id;
       var third_icon = daily[2].weather[0].id;
       var fourth_icon = daily[3].weather[0].id;
       var fifth_icon = daily[4].weather[0].id;
       var sixth_icon = daily[5].weather[0].id;
       var seventh_icon = daily[6].weather[0].id;

       
       var nowTimestamp = Math.floor(Date.now() / 1000);
       var weatherClass = 'wi wi-owm-';
       weatherClass += (nowTimestamp >= current.sunrise && nowTimestamp <= current.sunset ? 'day' : 'night');
       weatherClass += ('-'+current.weather[0].id);


       $("#main_weather .icon").addClass(weatherClass);
       $('#main_weather .date').html(NowToday);
       $('#main_weather .city').html(city);
       $('#main_weather .description').html(description);
       $('#main_weather .temp_min').html(parseInt(temp_min-273.15)+'&deg;'+ '　' + 'min');
       $('#main_weather .temp_max').html(parseInt(temp_max-273.15)+'&deg;'+ '　' + 'max');
       $('#main_weather .temp').html(parseInt(ctemp-273.15)+'&deg;');
       $('#main_weather .feels_like').html('체감 온도 : ' + parseInt(feel-273.15)+'&deg;');
       $('#main_weather .pop').html('강수확률 : '+parseInt(pop*100)+'%');
       $('#main_weather .load_img').hide();


       // 요일별 요일
           $('#week_weather .today-date').html(week[Now.getDay()]);
           $('#week_weather .secondday-date').html(week[Now.getDay()+1]);
           $('#week_weather .thirdday-date').html(week[Now.getDay()+2]);
           $('#week_weather .fourthday-date').html(week[Now.getDay()+3]);
           $('#week_weather .fifthday-date').html(week[Now.getDay()+4]);
           $('#week_weather .sixthday-date').html(week[Now.getDay()+5]);
           $('#week_weather .seventhday-date').html(week[Now.getDay()+6]);

       // 요일별 날씨아이콘
           $('#week_weather .today-icon').addClass('wi wi-owm-'+today_icon);
           $('#week_weather .secondday-icon').addClass('wi wi-owm-'+second_icon);
           $('#week_weather .thirdday-icon').addClass('wi wi-owm-'+third_icon);
           $('#week_weather .fourthday-icon').addClass('wi wi-owm-'+fourth_icon);
           $('#week_weather .fifthday-icon').addClass('wi wi-owm-'+fifth_icon);
           $('#week_weather .sixthday-icon').addClass('wi wi-owm-'+sixth_icon);
           $('#week_weather .seventhday-icon').addClass('wi wi-owm-'+seventh_icon);
       //요일별 온도
           $('#week_weather .today-temp').html(parseInt(dtemp-273.15)+'&deg;');
           $('#week_weather .secondday-temp').html(parseInt(second_temp-273.15)+'&deg;');
           $('#week_weather .thirdday-temp').html(parseInt(third_temp-273.15)+'&deg;');
           $('#week_weather .fourthday-temp').html(parseInt(fourth_temp-273.15)+'&deg;');
           $('#week_weather .fifthday-temp').html(parseInt(fifth_temp-273.15)+'&deg;');
           $('#week_weather .sixthday-temp').html(parseInt(sixth_temp-273.15)+'&deg;');
           $('#week_weather .seventhday-temp').html(parseInt(seventh_temp-273.15)+'&deg;');

                   //10d
                   $('body').css('background','linear-gradient(to top, #91EAE4, #86A8E7, #7F7FD5)');
                   $('.icon').css('text-shadow','0 10px 20px rgba(0,0,0,.2)');
                   // 배경 그라디언트
   })


   .fail(function(){
       alert("loading error");
   });
