@echo off
REM ============================================
REM EMAF v2 - Complete Startup (Server + Browser)
REM ============================================

echo.
echo ========================================
echo   EMAF v2 - Quick Launch
echo ========================================
echo.

REM Check if we're in the v2 directory
if not exist "index.html" (
    echo ERROR: Not in the v2 directory!
    echo.
    echo Please navigate to: C:\Users\User\Desktop\EMAF\v2
    echo Then run this script again.
    echo.
    pause
    exit /b 1
)

echo [1/3] Verifying directory... OK
echo [2/3] Starting server...
echo.

REM Start server in background and save PID
start /B python -m http.server 8082

REM Wait for server to initialize
timeout /t 2 /nobreak >nul

echo [3/3] Opening browser...
echo.

REM Open default browser
start http://localhost:8082

echo ========================================
echo   EMAF v2 is now running!
echo ========================================
echo.
echo   Browser opened at: http://localhost:8082
echo   Server running on port: 8082
echo.
echo   Login credentials:
echo   - Username: provider (or admin)
echo   - Password: demo123
echo.
echo   Features to try:
echo   - AI Document Scan (process Bruce Springsteen's 1949 record)
echo   - Dashboard alerts (all clickable)
echo   - Message composer (send messages)
echo   - Appointment booking
echo.
echo   To stop server: Close this window or press Ctrl+C
echo.
pause
