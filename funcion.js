function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var newRow = headers.map(function(header) {
    return header === 'Timestamp' ? new Date() : e.parameter[header];
  });
  sheet.appendRow(newRow);
  return ContentService.createTextOutput('Registrado exitosamente');
}