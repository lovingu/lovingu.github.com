function getWeekDay(){var b;return b=0==arguments.length?new Array("星期天","星期一","星期二","星期三","星期四","星期五","星期六"):new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),day=(new Date).getDay(),b[day]}function getHowManyDays(a,b,c,d){var e,f,g,h;return 0==arguments.length&&(a=2012,b=12,c=21,d=1),3==arguments.length&&(d=0),e=new Date,e.setFullYear(a,b-1,c),e.setHours(d),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),f=Date(),g=(Date.parse(f)-Date.parse(e))/1e3,h=Math.floor(g/86400)}function getWhichWeek(){var a=new Date,b=new Date(a.getFullYear(),0,0),c=parseInt((a.getTime()-b.getTime())/6048e5);return c}function GetBit(a,b){return 1&a>>b}function e2c(){var a,b,c,d,e,f;for(TheDate=3!=arguments.length?new Date:new Date(arguments[0],arguments[1],arguments[2]),e=!1,f=TheDate.getYear(),1900>f&&(f+=1900),a=365*(f-1921)+Math.floor((f-1921)/4)+madd[TheDate.getMonth()]+TheDate.getDate()-38,0==TheDate.getYear()%4&&TheDate.getMonth()>1&&a++,b=0;;b++){for(d=CalendarData[b]<4095?11:12,c=d;c>=0;c--){if(a<=29+GetBit(CalendarData[b],c)){e=!0;break}a=a-29-GetBit(CalendarData[b],c)}if(e)break}cYear=1921+b,cMonth=d-c+1,cDay=a,12==d&&(cMonth==Math.floor(CalendarData[b]/65536)+1&&(cMonth=1-cMonth),cMonth>Math.floor(CalendarData[b]/65536)+1&&cMonth--)}function GetcDateString(){var a="";return a+=tgString.charAt((cYear-4)%10),a+=dzString.charAt((cYear-4)%12),a+="(",a+=sx.charAt((cYear-4)%12),a+=")年 ",1>cMonth?(a+="(闰)",a+=monString.charAt(-cMonth-1)):a+=monString.charAt(cMonth-1),a+="月",a+=11>cDay?"初":20>cDay?"十":30>cDay?"廿":"三十",(0!=cDay%10||10==cDay)&&(a+=numString.charAt((cDay-1)%10)),a}function GetLunarDay(a,b,c){return 1921>a||a>2020?"":(b=parseInt(b)>0?b-1:11,e2c(a,b,c),GetcDateString())}function getCurdayLunar(){var a=new Date,b=a.getFullYear(),c=a.getMonth()+1,d=a.getDate();return 100>b&&(b="19"+b),GetLunarDay(b,c,d)}function isBirthday(){var d,a=6,b=7,c="八月初九";return getCurdayLunar().split(" ")[1]==c?1:(d=new Date,d.getMonth()==a-1&&d.getDate()==b?2:0)}var cYear,cMonth,cDay,TheDate,CalendarData=new Array(100),madd=new Array(12),tgString="甲乙丙丁戊己庚辛壬癸",dzString="子丑寅卯辰巳午未申酉戌亥",numString="一二三四五六七八九十",monString="正二三四五六七八九十冬腊",weekString="日一二三四五六",sx="鼠牛虎兔龙蛇马羊猴鸡狗猪";CalendarData=new Array(2635,333387,1701,1748,267701,694,2391,133423,1175,396438,3402,3749,331177,1453,694,201326,2350,465197,3221,3402,400202,2901,1386,267611,605,2349,137515,2709,464533,1738,2901,330421,1242,2651,199255,1323,529706,3733,1706,398762,2741,1206,267438,2647,1318,204070,3477,461653,1386,2413,330077,1197,2637,268877,3365,531109,2900,2922,398042,2395,1179,267415,2635,661067,1701,1748,398772,2742,2391,330031,1175,1611,200010,3749,527717,1452,2742,332397,2350,3222,268949,3402,3493,133973,1386,464219,605,2349,334123,2709,2890,267946,2773,592565,1210,2651,395863,1323,2707,265877),madd[0]=0,madd[1]=31,madd[2]=59,madd[3]=90,madd[4]=120,madd[5]=151,madd[6]=181,madd[7]=212,madd[8]=243,madd[9]=273,madd[10]=304,madd[11]=334;
var theDays = $("h_hours");
var theHours = $("h_days");
var theMinutes = $("h_minutes");
var theSeconds = $("h_seconds");

var refresher = setInterval(function timeElapse() {
    var c = new Date();
    var month = 12;
    c.setFullYear(2012, month-1, 21);
    c.setHours(1);
    c.setMinutes(0);
    c.setSeconds(0);
    c.setMilliseconds(0);
    var e = Date();
    var f = (Date.parse(e) - Date.parse(c)) / 1000;
    var g = Math.floor(f / (3600 * 24));
    f = f % (3600 * 24);
    var b = Math.floor(f / 3600);
    if (b < 10) {
        b = "0" + b
    }
    f = f % 3600;
    var d = Math.floor(f / 60);
    if (d < 10) {
        d = "0" + d
    }
    f = f % 60;
    if (f < 10) {
        f = "0" + f
    }
    theDays.html(g);
    theHours.html(b);
    theMinutes.html(d);
    theMinutes.html(f);
}, 1000);
