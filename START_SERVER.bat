@echo off
REM ============================================
REM EMAF v2 Quick Start Script
REM ============================================

echo.
echo ========================================
echo   EMAF v2 - Electronic Medical Assistant
echo ========================================
echo.

REM Check if we're in the v2 directory
if not exist "index.html" (
    echo ERROR: Not in the v2 directory!
    echo.
    echo This script must be run from: C:\Users\User\Desktop\EMAF\v2
    echo.
    echo Current directory: %CD%
    echo.
    pause
    exit /b 1
)

echo [OK] Correct directory detected: v2
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo.
    echo Please install Python from: https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

echo [OK] Python detected
python --version
echo.

echo Starting server on port 8082...
echo.
echo ========================================
echo   Server will start in 3 seconds...
echo ========================================
echo.
echo   Press Ctrl+C to stop the server
echo.
echo   Open browser to: http://localhost:8082
echo.
timeout /t 3 /nobreak >nul

REM Start the server
python -m http.server 8082
