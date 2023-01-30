function add_events_to_calendar() {

  // Below line Contains a id `1DBhd15LlRmKhj2AQUQFZz1impcqgF41RCatwLg3Kfj4` which is a Google SpreadSheet ID
  // You can check the same here https://docs.google.com/spreadsheets/d/1DBhd15LlRmKhj2AQUQFZz1impcqgF41RCatwLg3Kfj4/edit?usp=sharing
  var spreadsheet = SpreadsheetApp.openById("1DBhd15LlRmKhj2AQUQFZz1impcqgF41RCatwLg3Kfj4")

  // Below line is the Sheet name from the above SpreadSheet Check the readme file for the same.
  var data_sheet = spreadsheet.getSheetByName("event_sheet_01")
  var total_events = data_sheet.getDataRange().getValues().length

  // Any prefix you want to add before the events
  var event_prefix = "Prefix - "

  // Any suffix you want to add before the events
  var event_suffix = " - Suffix"

  // Add the description that will be added for each event
  var event_description = "This is event description for event " + event_name

  // Enter the Colum name in which you have event names in google sheet
  var event_name_colum = 'A'

  // Enter the Colum name in which you have event dates in google sheet
  var event_date_colum = 'B'

  // Below line has the calendar ID in which you want to add the events make sure you have access to the same.
  // You can check the calender from here https://calendar.google.com/calendar/u/1?cid=ZTJmNTg4OTRjNmNiMzIzMzFhYmZkNmMyNmUxM2ZmN2EyNjhlMzMxMGI4MjljNGQ2NTVlNmYyYzNjODE5ZDczMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t
  var calendar = CalendarApp.getCalendarById("e2f58894c6cb32331abfd6c26e13ff7a268e3310b829c4d655e6f2c3c819d730@group.calendar.google.com")

  // Loop via all the events in the sheet
  for ( var event = 1; event <= total_events; event++ ){

    // Get the event date
    var start_date = data_sheet.getRange( event_date_colum + event ).getValue()

    // Get the event name
    var event_name = data_sheet.getRange( event_name_colum + event ).getValue()

    // Display the details in the log for debug purpose
    Logger.log("Adding event " + event_name + " On " + start_date)

    // Add the event in the Calendar
    calendar.createAllDayEvent( event_prefix + event_name + event_suffix,
      new Date(start_date),
      { description: event_description })
  }

}
