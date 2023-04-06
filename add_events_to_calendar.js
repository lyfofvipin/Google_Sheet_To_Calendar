function add_events_to_calendar() {

  // Put your Calendar and Sheet ID
  var cal_id = 'd3d462c59d9c7104fe5040f9fdd28675a8a94006bc9a5fab067dc8fc854a8dc6@group.calendar.google.com'
  var spreadsheet_id = '1DBhd15LlRmKhj2AQUQFZz1impcqgF41RCatwLg3Kfj4'
  var sheet_name = 'event_sheet_01'

  // You can check the same here https://docs.google.com/spreadsheets/d/1DBhd15LlRmKhj2AQUQFZz1impcqgF41RCatwLg3Kfj4/edit?usp=sharing
  var spreadsheet = SpreadsheetApp.openById(spreadsheet_id)

  // Below line is the Sheet name from the above SpreadSheet
  var data_sheet = spreadsheet.getSheetByName(sheet_name)
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

  // You can check the calender from here https://calendar.google.com/calendar/embed?src=d3d462c59d9c7104fe5040f9fdd28675a8a94006bc9a5fab067dc8fc854a8dc6%40group.calendar.google.com&ctz=Asia%2FKolkata
  var calendar = CalendarApp.getCalendarById(cal_id)

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
      { description: event_description }
      )
  }

}
