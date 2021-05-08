function openDownloads() {
    document.getElementById("Downloads").innerHTML = "open"; document.getElementById("Custom_Path_2").innerHTML = "custom_Path_2";
  document.getElementById("Custom_Path_3").innerHTML = "Custom path 3";
}

function openCustomPath2() {
    document.getElementById("Downloads").innerHTML = "Downloads"; document.getElementById("Custom_Path_2").innerHTML = "open";
  document.getElementById("Custom_Path_3").innerHTML = "Custom path 3";
}




function openCustomPath3() {
   document.getElementById("Downloads").innerHTML = "Downloads"; document.getElementById("Custom_Path_2").innerHTML = "Custom path 2";
  document.getElementById("Custom_Path_3").innerHTML = "open";
 
}
function ProssessGen() {
 var proctxt = "Processes: ";
 var procnum = Math.floor(Math.random() * 20);
  var procall = proctxt+procnum;
   document.getElementById("proc").innerHTML = procall; 
 return Math.random();
}
function CPULoad() {
  var cpupercent = "%";
 var cputxt = "CPU Usage: ";
 var cpunum = Math.floor(Math.random() * 20);
  var cpuall = cputxt + cpunum + cpupercent;
   document.getElementById("cpu").innerHTML = cpuall; 
 return Math.random();
}

function RAMGen() {
  var rampercent = "%"; 
 var ramtxt = "Physical Memory: ";
 var ramnum = Math.floor(Math.random() * 20);
  var ramall = ramtxt + ramnum + rampercent;
   document.getElementById("ram").innerHTML = ramall; 
 return Math.random();
}


function LoadPrefs() {
 
  
    ProssessGen();
  CPULoad();
  RAMGen();
  }
 
function ClearNotes(){
  var EmptyText= "";
  document.getElementById("note_input_1").innerHTML = EmptyText; 
 document.getElementById("note_input_2").innerHTML = EmptyText; 
 
 
}

function ArkClick() {
  
  
  }
function ArkFunction() {
  
  }
//unfineshed stuff

function GetSeconds() {
 
  var d = new Date();
    var x = document.getElementById("Time");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    Time = h + ":" + m;
  var Seconds = s;
  
  document.getElementById("Seconds").innerHTML = ":" + Seconds;

  
  
  
  }
//set up Functions for the function

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


var Seconds;                                                          //GLOBAL VARIABLE
var Time;                                                           //GLOBAL VARIABLE
 

function SetTimeVars(){
  var d = new Date();
    var x = document.getElementById("Time");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
  Time = h + ":" + m;
  Seconds = s;
  
}


function GetTime() {

var i;                                                           //PRIVATE VARIABLE
  SetTimeVars();
  
document.getElementById("Time").innerHTML = Time;

  
}



function GetDay() {
 var DDay = new Date();                                                           //PRIVATE VARIABLE
var Day = DDay.getDate();                                                           //PRIVATE VARIABLE
  
document.getElementById("Date").innerHTML = Day;
    
  
  
  }


function GetMonth() {
 var DMonth = new Date();                                                           //PRIVATE VARIABLE
var MonthArray = [];                                                           //PRIVATE VARIABLE
MonthArray[0] = "January";
MonthArray[1] = "February";
MonthArray[2] = "March";
MonthArray[3] = "April";
MonthArray[4] = "May";
MonthArray[5] = "June";
MonthArray[6] = "July";
MonthArray[7] = "August";
MonthArray[8] = "September";
MonthArray[9] = "October";
MonthArray[10] = "November";
MonthArray[11] = "December";
var Month = MonthArray[DMonth.getMonth()];                                                           //PRIVATE VARIABLE
  
  document.getElementById("Month").innerHTML = Month;
  
  
  }
function GetDate() {
 var DWeekday = new Date();                                                           //PRIVATE VARIABLE
var WeekdayArray = new Array(7);                                                           //PRIVATE VARIABLE
WeekdayArray[0] =  "Sunday";
WeekdayArray[1] = "Monday";
WeekdayArray[2] = "Tuesday";
WeekdayArray[3] = "Wednesday";
WeekdayArray[4] = "Thursday";
WeekdayArray[5] = "Friday";
WeekdayArray[6] = "Saturday";

var WeekDay = WeekdayArray[DWeekday.getDay()];                                                           //PRIVATE VARIABLE
  document.getElementById("Day").innerHTML = WeekDay;//with get Date function (bOttom sparK below the time line)
  }

//function GetYear(){  
  //var DYear = new Date();
    //var Year = DYear.getFullYear();
    //document.getElementById("Year").innerHTML = Year;
    //}



function LoadAll(){
GetTime();
GetDay();
GetMonth();
GetYear();
GetDate(); 
GetSeconds();
}




//seperate the important stuff that I dId not code






//All the way down here











//voice commands script below (I did not code this) (SeeGreatness)

function start(){
  
 annyang.start();
}
//var a = prompt("What is your name?");
var a="chris";
function namehi(){
responsiveVoice.speak("Hello, "+a+" I am JARVIS");
//responsiveVoice.speak(a);
//responsiveVoice.speak("I am JARVIS");
}
function hto(){
responsiveVoice.speak("Hey I'm jarvis an artificial intelegence program designed to make your day");
//responsiveVoice.speak("Hello Master");
}


   var hi = function() { 
    if(a == "chris"){
   hto();
 }     
      else{
   namehi();
}
}; 
   var loc = function() {
     alert("List of commands-\n'hello (jarvis)': To give greetings\n'goodbye (jarvis)': to tell goodbye\n'search for *something': to google search'website search *website': to search a Website\n'repeat *saysome': to repeat what you say\n'close tab': go back to jarvis tab\n'what is the time': tells the time and daten'tell me a joke': tells a cheesy joke");
   };
  var bye = function() { 
    if(a == "chris"){
   responsiveVoice.speak("Good bye Master, live long and prosper");
 }     
      else{
   responsiveVoice.speak("good bye");
        responsiveVoice.speak(a);
        responsiveVoice.speak("and have a very nice and pleasant day, keep hope and be dope, thats the motto");
}
}; 
    var search = function(something) { 
        window.open("https://www.google.ae/?gfe_rd=cr&ei=08dvWLvzJuHu8AeY9a74Aw#safe=strict&q="+ something);
responsiveVoice.speak("Search results for"); 
        responsiveVoice.speak(something);    
};
 var searchWebsite = function(website){     
     window.open("https://www."+ website+"/");
responsiveVoice.speak("Search results"); 
responsiveVoice.speak(website);
};
 var joke = function() {
   function partA() {
  responsiveVoice.speak("My friend thinks he is smart");
  window.setTimeout(partB,3000);
}
function partB() {
  responsiveVoice.speak("He told me an onion is the only food that makes you cry."); 
   window.setTimeout(partC,3000);
}
   function partC() {
  responsiveVoice.speak("so I threw a coconut at his face.");
  
}
  window.setTimeout(partA,300)
   
   
   
  // responsiveVoice.speak("My friend thinks he is smart");
  // responsiveVoice.speak("He told me an onion is the only food that makes you cry."); 
   //responsiveVoice.speak("so I threw a coconut at his face.");
 };
 
 var anotherjoke = function() {
   responsiveVoice.speak("An elderly lady phoned her telephone company to report that her telephone failed to ring when her friends called - and that on the few occasions when it did ring, her pet dog always moaned right before the phone rang. The telephone repairman proceeded to the scene, curious to see this psychic dog or senile elderly lady.He climbed a nearby telephone pole, hooked in his test set, and dialed the subscriber's house. The phone didn't ring right away, but then the dog moaned loudly and the telephone began to ring.Climbing down from the pole, the telephone repairman found:number 1 The dog was tied to the telephone system's ground wire via a steel chain and collar.2. The wire connection to the ground rod was loose.3. The dog was receiving 90 volts of signaling current when the phone number was called.4. After a couple of such jolts, the dog would start moaning and then urinate on himself and the ground.5. The wet ground would complete the circuit, thus causing the phone to ring.Which demonstrates that some problems CAN be fixed by pissing and moaning.");
   
 };
 
 var how = function() {
   responsiveVoice.speak("I am just fine Sir, May i ask how you Are.");
   
 };
 var who = function() {
   responsiveVoice.speak("Your name Sir, is .");
   responsiveVoice.speak(a);
   responsiveVoice.speak("and you are truly the best person I have ever encountered");
   
 };
 var saysome = function(say) {
   responsiveVoice.speak(say);
 }; 
 var ctab = function() { 
open(location, '_self').close(); 
   responsiveVoice.speak("tab closed");
 };
 var date =  function() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+ month;
      
      //document.getElementById("Year").innerHTML = Year
      //document.getElementById("Month").innerHTML = Month
      //document.getElementById("Dayay").innerHTML = Day
      //document.getElementById("Time").innerHTML = hour + minute
   
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
     responsiveVoice.speak(dateTime);
};
if (annyang) {
  
  
  // Let's define a command.
  var commands = {
    'commands': loc,
    'hello (jarvis)': hi,
    'goodbye (jarvis)': bye,
    'search for *something': search,
    'website search *website': searchWebsite,
    'repeat *saysome': saysome,
    'close tab': ctab,
    'what is the time': date,
    'tell me a joke': joke,
    'tell me another joke': anotherjoke,
    'how are you':how,
    'who am I':who
    
  };
  
  
  
  // Add our commands to annyang
  annyang.addCommands(commands);
  hi
  
  annyang.start();
}



//voice control script ends (SeeGreatness)




