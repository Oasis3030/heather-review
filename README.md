# Heather Attorney Review Portal - Live Queue Version

This version has memory through Google Sheets.

## How memory works
Reviewed items are marked `Reviewed` in the Google Sheet `Queue` tab. Heather will not see those again after refreshing or reopening the link.

It also uses browser localStorage as a backup, so if the submit succeeded visually but the page refreshes weirdly, the reviewed card should still stay gone on that device.

## Files
- index.html = Heather-facing review queue
- admin.html = intake-team upload portal
- google-apps-script.js = Google Sheet / Drive backend

## Google setup
Create a Google Sheet with two tabs: Queue and Reviews.

Open Extensions > Apps Script, paste google-apps-script.js, save, and deploy as a Web App.

Deployment:
- Execute as: Me
- Who has access: Anyone with link

Create a Google Drive folder for uploaded docs and paste its folder ID into:
const DRIVE_FOLDER_ID = "PASTE_GOOGLE_DRIVE_FOLDER_ID_HERE";

## Intake team
Open admin.html to add new PNCs and drag/drop intake forms plus related docs.

## Heather
Open index.html to review. Submitted cases disappear. Empty queue shows: “Check back later if the intake team uploads any more.”
