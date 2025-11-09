# ============================================
# EMAF v2 - Setup Verification Script
# ============================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  EMAF v2 - Setup Verification" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check 1: Verify current directory
Write-Host "[1/5] Checking directory..." -NoNewline
$currentPath = Get-Location
if ($currentPath.Path -like "*\EMAF\v2") {
    Write-Host " OK" -ForegroundColor Green
    Write-Host "      Location: $currentPath" -ForegroundColor Gray
} else {
    Write-Host " FAILED" -ForegroundColor Red
    Write-Host "      Current: $currentPath" -ForegroundColor Red
    Write-Host "      Expected: ...\EMAF\v2" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "ACTION REQUIRED:" -ForegroundColor Yellow
    Write-Host "  Run this command first:" -ForegroundColor Yellow
    Write-Host "  cd 'C:\Users\User\Desktop\EMAF\v2'" -ForegroundColor White
    Write-Host ""
    exit 1
}

# Check 2: Verify index.html exists
Write-Host "[2/5] Checking index.html..." -NoNewline
if (Test-Path "index.html") {
    Write-Host " OK" -ForegroundColor Green
} else {
    Write-Host " FAILED" -ForegroundColor Red
    Write-Host "      index.html not found in current directory" -ForegroundColor Red
    exit 1
}

# Check 3: Verify Python installation
Write-Host "[3/5] Checking Python..." -NoNewline
try {
    $pythonVersion = python --version 2>&1
    Write-Host " OK" -ForegroundColor Green
    Write-Host "      $pythonVersion" -ForegroundColor Gray
} catch {
    Write-Host " FAILED" -ForegroundColor Red
    Write-Host "      Python not found in PATH" -ForegroundColor Red
    Write-Host "      Install from: https://www.python.org/downloads/" -ForegroundColor Yellow
    exit 1
}

# Check 4: Verify required directories
Write-Host "[4/5] Checking directories..." -NoNewline
$requiredDirs = @("css", "js", "pages", "data")
$allExist = $true
foreach ($dir in $requiredDirs) {
    if (-not (Test-Path $dir)) {
        $allExist = $false
        break
    }
}
if ($allExist) {
    Write-Host " OK" -ForegroundColor Green
    Write-Host "      Found: css/, js/, pages/, data/" -ForegroundColor Gray
} else {
    Write-Host " FAILED" -ForegroundColor Red
    Write-Host "      Missing required directories" -ForegroundColor Red
    exit 1
}

# Check 5: Verify key files
Write-Host "[5/5] Checking key files..." -NoNewline
$requiredFiles = @(
    "js\app.js",
    "js\navigation.js",
    "pages\dashboard.html",
    "pages\ai-document-processor.html"
)
$allExist = $true
foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file)) {
        $allExist = $false
        Write-Host " FAILED" -ForegroundColor Red
        Write-Host "      Missing: $file" -ForegroundColor Red
        break
    }
}
if ($allExist) {
    Write-Host " OK" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✅ All checks passed!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Ready to start EMAF v2!" -ForegroundColor Cyan
Write-Host ""
Write-Host "To start the server, run:" -ForegroundColor Yellow
Write-Host "  python -m http.server 8082" -ForegroundColor White
Write-Host ""
Write-Host "Then open browser to:" -ForegroundColor Yellow
Write-Host "  http://localhost:8082" -ForegroundColor White
Write-Host ""
Write-Host "Or simply double-click: LAUNCH.bat" -ForegroundColor Yellow
Write-Host ""
