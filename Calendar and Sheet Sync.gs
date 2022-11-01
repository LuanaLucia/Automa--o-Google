var app = SpreadsheetApp;
var calendar = CalendarApp.getCalendarById("@group.calendar.google.com");
var sheet=app.getActiveSheet();

function myCalendar()
{
  delete_events();
  var range=sheet.getRange("A2:C").getValues();
  var limitDate = sheet.getRange("E1").getValue();
  range.map(function(elem,ind,obj){
    if(elem[0]!="" && elem[1]> limitDate){
     calendar.createEvent(elem[0], elem[1], elem[2]).addPopupReminder(10);
     
    }
  });
}
function delete_events()
{
    var dataIni = sheet.getRange("E1").getValue(); //Now()
    var dataFim = sheet.getRange("F1").getValue();
    var events = calendar.getEvents(dataIni, dataFim);
    for(var i=0; i<events.length; i++){
        var ev = events[i];
        ev.deleteEvent();
    }
}
