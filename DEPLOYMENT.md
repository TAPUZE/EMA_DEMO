# Deployment Guide for EMA_DEMO

## Repository Information
- **GitHub URL**: https://github.com/TAPUZE/EMA_DEMO
- **Owner**: TAPUZE (kalmangreenfield@gmail.com)
- **Branch**: master

## Quick Deploy - Anyone Can Use This!

### Option 1: GitHub Pages (Recommended - No server needed!)

1. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select branch: `master`
   - Click Save
   - Your site will be live at: `https://tapuze.github.io/EMA_DEMO/`

2. **Access the application:**
   - Wait 1-2 minutes for deployment
   - Visit: `https://tapuze.github.io/EMA_DEMO/`
   - No installation required!

### Option 2: Local Development

**Prerequisites:**
- Python 3.x installed
- Git installed

**Steps:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TAPUZE/EMA_DEMO.git
   cd EMA_DEMO
   ```

2. **Start local server:**
   
   **Windows:**
   ```powershell
   python -m http.server 8080
   ```
   
   **Mac/Linux:**
   ```bash
   python3 -m http.server 8080
   ```
   
   Or double-click: `START_SERVER.bat` (Windows only)

3. **Open in browser:**
   ```
   http://localhost:8080
   ```

### Option 3: Deploy to Hosting Service

#### Netlify (Free, Easy)
1. Go to https://netlify.com
2. Click "Add new site" > "Import from Git"
3. Connect GitHub account
4. Select `TAPUZE/EMA_DEMO` repository
5. Click "Deploy site"
6. Done! You get a URL like: `ema-demo.netlify.app`

#### Vercel (Free, Easy)
1. Go to https://vercel.com
2. Click "Import Project"
3. Import from GitHub: `TAPUZE/EMA_DEMO`
4. Click "Deploy"
5. Done! You get a URL like: `ema-demo.vercel.app`

## Login Credentials

**Provider Account:**
- Username: `provider`
- Password: `demo123`

**Admin Account:**
- Username: `admin`
- Password: `admin123`

## Features to Demonstrate

1. **AI Document Processing**
   - Navigate to: Documents > AI Document Processor
   - Bruce Springsteen medical record is pre-loaded
   - Click "Extract Data" - patient appears in search instantly

2. **Patient Search**
   - Go to: Patients > Patient Search
   - Search for "Jane Doe", "John Smith", or "Alice Johnson"
   - Click to view complete charts

3. **Clinical Documentation**
   - Select any patient
   - Click "New Visit"
   - Choose visit type (AWV, CCM, Follow-up, etc.)
   - Fill structured forms with real clinical data

4. **Scheduling**
   - Navigate to: Scheduling
   - View calendar with 30+ demo appointments
   - Click dates to see appointment details

5. **Messaging**
   - Go to: Messages
   - Compose and send messages
   - Messages persist across navigation

## Updating the Repository

### Make Changes Locally
```bash
# Navigate to project
cd C:\Users\User\Desktop\EMAF\v2

# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push origin master
```

### Pull Latest Changes
```bash
git pull origin master
```

## Repository Structure
```
EMA_DEMO/
├── index.html              # Entry point
├── css/                    # Stylesheets
├── js/                     # JavaScript modules
│   ├── app.js             # Main controller
│   ├── data-manager.js    # Persistence layer
│   ├── navigation.js      # Routing
│   └── ...
├── pages/                  # Application pages
├── data/                   # Demo data
├── README.md              # Main documentation
├── PERSISTENCE_SYSTEM.md  # Technical docs
└── DEMO_GUIDE.md          # Demo scripts
```

## Troubleshooting

### "Page not loading"
- Check if server is running on correct port
- Clear browser cache (Ctrl+F5)
- Check browser console for errors

### "Data not persisting"
- localStorage must be enabled in browser
- Check if running on `localhost` or served via http/https
- File:// protocol doesn't work - must use server

### "GitHub Pages not working"
- Wait 2-3 minutes after enabling
- Check Pages settings are correct
- Ensure index.html is in root directory

## Support

For issues or questions:
- Email: kalmangreenfield@gmail.com
- GitHub Issues: https://github.com/TAPUZE/EMA_DEMO/issues

## License

This is a demonstration project for educational purposes.

---

**Repository Created**: November 9, 2025  
**Last Updated**: November 9, 2025
