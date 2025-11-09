# 🚀 EMAF v2 - Startup Instructions

## ⚠️ IMPORTANT: Run from Correct Directory

### ✅ Correct Path
You MUST run the server from the `v2` directory:
```
C:\Users\User\Desktop\EMAF\v2
```

### 🎯 Quick Start (Copy & Paste)

**Open PowerShell and run:**
```powershell
cd "C:\Users\User\Desktop\EMAF\v2"
python -m http.server 8082
```

Then open your browser to:
```
http://localhost:8082
```

---

## 📂 Directory Structure Check

Before starting, verify you're in the right place:

```powershell
# Check current directory
pwd

# Should show: C:\Users\User\Desktop\EMAF\v2
```

You should see these files and folders:
```
v2/
├── index.html          ← Main entry point
├── css/
│   └── main.css
├── js/
│   ├── app.js
│   ├── navigation.js
│   └── ...
├── pages/
│   ├── dashboard.html
│   ├── patient-chart.html
│   ├── ai-document-processor.html
│   └── ...
├── data/
│   ├── patients.js
│   └── ...
└── START_HERE.md      ← This file
```

---

## ❌ Common Mistakes

### Wrong Directory
```powershell
# ❌ WRONG - Don't run from here:
cd "C:\Users\User\Desktop\EMAF"
python -m http.server 8082

# This will fail because index.html is in v2 subfolder!
```

### Wrong Port (Already in Use)
```powershell
# ❌ If port 8082 is busy, use a different port:
python -m http.server 8083

# Then browse to: http://localhost:8083
```

---

## 🔧 Step-by-Step Instructions

### 1. Open PowerShell
- Press `Win + X`
- Click "Windows PowerShell" or "Terminal"

### 2. Navigate to v2 Directory
```powershell
cd "C:\Users\User\Desktop\EMAF\v2"
```

### 3. Verify Location
```powershell
# List files to confirm you're in the right place
ls

# You should see: index.html, css/, js/, pages/, data/
```

### 4. Start the Server
```powershell
python -m http.server 8082
```

You should see:
```
Serving HTTP on :: port 8082 (http://[::]:8082/) ...
```

### 5. Open Browser
Navigate to: **http://localhost:8082**

---

## 🎮 Login Instructions

### Default Login Credentials
- **Username:** `provider` or `admin`
- **Password:** `demo123`

### Choose Your Role
1. **Doctor/Provider** - See patient care interface
   - Dashboard with alerts
   - Patient charts
   - Guided visits
   - Scheduling
   - Messages

2. **Admin** - See administrative interface
   - Admin dashboard
   - User management
   - System statistics
   - Audit logs

---

## 🆕 New Features

### AI Document Processor
1. Login as Doctor or Admin
2. Click **"AI Document Scan"** in navigation
3. Click **"Process Document"** button
4. Review Bruce Springsteen's 1949 newborn record
5. Click **"Save to Patient Chart"** to add to EMR

### Interactive Features
- ✅ Click any dashboard alert → Navigate to patient chart
- ✅ Click any activity → Open related page
- ✅ Compose new messages → Saves to localStorage
- ✅ Schedule appointments → Adds to calendar
- ✅ Process documents → AI extraction demo

---

## 🐛 Troubleshooting

### Server Won't Start
```powershell
# Check if Python is installed
python --version

# Should show: Python 3.x.x
```

### Port Already in Use
```powershell
# Kill existing Python server
Get-Process python | Stop-Process -Force

# Then restart
python -m http.server 8082
```

### Can't Access http://localhost:8082
1. Check firewall settings
2. Try: http://127.0.0.1:8082
3. Try a different port: `python -m http.server 8083`

### Page Won't Load / 404 Errors
```powershell
# Verify you're in v2 directory
pwd

# Should show: ...\EMAF\v2

# If not, navigate there:
cd "C:\Users\User\Desktop\EMAF\v2"
```

### Browser Shows Wrong Content
1. Hard refresh: `Ctrl + F5`
2. Clear cache: `Ctrl + Shift + Delete`
3. Try incognito/private mode

---

## 📱 Mobile Access

If you want to test on mobile device on same network:

1. Find your computer's IP address:
```powershell
ipconfig
# Look for IPv4 Address (e.g., 192.168.1.100)
```

2. On mobile browser, navigate to:
```
http://192.168.1.100:8082
```

---

## 🛑 Stopping the Server

Press: `Ctrl + C` in the PowerShell window

---

## 📚 Additional Documentation

- **AI Document Processor:** See `AI_DOCUMENT_PROCESSOR_README.md`
- **Bruce Springsteen Analysis:** See `BRUCE_SPRINGSTEEN_1949_ANALYSIS.md`

---

## ✅ Verification Checklist

Before reporting issues, check:
- [ ] Running from `C:\Users\User\Desktop\EMAF\v2` directory
- [ ] Port 8082 is not in use
- [ ] Python is installed and accessible
- [ ] Browser is pointed to correct URL
- [ ] Hard refresh attempted (Ctrl + F5)

---

## 🎯 Quick Command Reference

```powershell
# Navigate to correct directory
cd "C:\Users\User\Desktop\EMAF\v2"

# Start server
python -m http.server 8082

# Stop server
# Press Ctrl + C

# Check Python version
python --version

# List current directory contents
ls

# Show current directory path
pwd
```

---

**Last Updated:** November 9, 2025  
**Version:** EMAF v2.0  
**Support:** Check README files in v2 directory

🎉 **Ready to start? Run the commands above and begin exploring!**
