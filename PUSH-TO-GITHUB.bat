@echo off
echo.
echo =============================================
echo   GoLearn - Push to GitHub (30 days spread)
echo =============================================
echo.
echo This will spread your commits over 30 days
echo and push to your GitHub repository.
echo.
powershell -ExecutionPolicy Bypass -File "scripts\setup-and-push.ps1"
pause

