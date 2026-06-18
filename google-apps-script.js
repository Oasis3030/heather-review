function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Attorney Reviews') || ss.insertSheet('Attorney Reviews');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp','Client Name','Quality Lead','Consult Type','Attorney Notes','Minimum Retainer/Fee','Documents Needed','Referral In Mind','Referral Notes','Reviewer','Submitted From']);
  }
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.clientName || '',
    data.qualityLead || '',
    data.consultType || '',
    data.attorneyNotes || '',
    data.retainer || '',
    data.documentsNeeded || '',
    data.referralInMind || '',
    data.referralNotes || '',
    data.reviewer || 'Heather',
    data.userAgent || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Attorney Review endpoint is live.');
}
