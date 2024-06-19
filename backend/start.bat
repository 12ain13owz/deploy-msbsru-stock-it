@echo off
cd /d %~dp0

rem Start the Node.js application with PM2
call pm2 start src/index.js

rem Monitor the application with PM2
call pm2 monit

rem Prevent the command window from closing
pause
