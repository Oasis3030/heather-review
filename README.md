# Heather Attorney Review Portal

Upload everything in this folder to a GitHub repo and enable GitHub Pages.

## Google Sheet setup
1. Create a Google Sheet named Attorney Reviews.
2. Extensions → Apps Script.
3. Paste the contents of google-apps-script.js.
4. Deploy → New Deployment → Web app.
5. Execute as: Me. Access: Anyone with the link.
6. Copy the Web App URL.
7. Open the portal → Setup → paste URL → Save.

## Notes
- Reviews save locally even if the Google endpoint is missing or fails.
- The queue is sorted oldest to newest by submitted/intake order, so Heather can review longest-sitting first.
- Each matter includes extracted text plus links to the original files in /assets.


## Current Apps Script Endpoint

This copy has already been configured with:

`https://script.google.com/macros/s/AKfycbyuN-_mt09m-3rMNnlQU-rkCtoPod-HrWkfURN169pcA75UvFYnvalFn7nRnboAkUPV/exec`

You should not need to paste the endpoint manually. If you redeploy Apps Script later, update the Setup tab in the portal or replace DEFAULT_ENDPOINT in index.html.
