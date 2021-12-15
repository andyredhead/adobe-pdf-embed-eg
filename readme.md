# Calling Adobe Embed PDF from a Web Component

Assumes you have already installed npm and a local web server.

I use browser-sync as a local dev webserver (installed globally, see 
http://browsersync.io).


NOTE: before trying to build and run the example, change the value of 
"your-api-key-here" in ./templates/index.html to a valid Adobe API key.


To fetch third party dependencies etc, run the command line:

    npm init

The example site is built into ./static using command line:

    npm run build

If you have browser-sync installed, the site can be viewed locally using the 
command line:

    browser-sync start --server "static" -w --port 3000