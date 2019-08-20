To write a tweet to the console, open a PowerShell window in the repo and type...

    node .\consoleRunner-local.js

To send a new tweet to twitter, open a PowerShell window in the repo and type...

    node .\consoleRunner-twitter.js

To upload a new version to AWS Lambda...

1. Add all *.js files, *.json files and the node_modules folder to a single zipped folder
2. Open the AWS Management Console in browser and navigate to the Lambda service in your region (e.g. Ohio)
3. Find the Lambda running this bot
4. Scroll down to the Function Code section
5. Under 'Code Entry Type'  select 'Upload a Zip File'
6. Upload the zipped code
7. At the top of the Lambda view, click 'Test' to check that the tweet is sent using the new version
8. At the top of the Lambda view, click 'Actions' -> 'Publish new Version'
9. Enter a brief description of your new version