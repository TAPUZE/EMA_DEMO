# 🎬 Live Demo: Real-Time Persistence in Action

## Quick Start

1. **Start the server** (if not running):
   ```bash
   cd v2
   python -m http.server 8082
   ```

2. **Open browser**: http://localhost:8082

3. **Login**: 
   - Username: `admin` or `doctor`
   - Password: (any)
   - Role: **Provider** (to see all features)

---

## Demo Script 1: AI Document Processing → Patient Search

**Time**: ~2 minutes  
**Shows**: Patient data flows through entire system

### Steps:

1. **Navigate to AI Document Scan**
   - Click 📄 "AI Document Scan" in sidebar
   - Page loads, auto-starts Bruce Springsteen demo

2. **Watch Processing**
   - 5-step animation shows AI working
   - OCR → AI Analysis → Structuring → ICD-10 → Database
   - ✅ All steps complete (green checkmarks)

3. **Review Extracted Data**
   - Patient Info: Bruce Springsteen, DOB 9/23/1949
   - Diagnoses: 4 ICD-10 coded conditions
   - Birth measurements in Labs section
   - Confidence scores: 96%, 94%, 98%

4. **Save to System**
   - Click **"Save to Patient Chart"** (green button)
   - Toast: "✅ Patient added to system: Bruce Springsteen"
   - Auto-navigates to patient chart

5. **Verify in Chart**
   - Patient banner shows: "Bruce Springsteen (Male, 75 yo)"
   - MRN: 109439
   - All tabs populated (Demographics, Problems, Medications, Labs, Visits)
   - Labs tab shows 5 birth measurements

6. **Find in Patient Search**
   - Click 🔍 "Patient Search" in sidebar
   - **Bruce Springsteen appears in table!**
   - Shows: MRN 109439, DOB 09/23/1949, Age 75, Last Visit 09/30/1949
   - Flags: "Historical Record", "Newborn 1949", "Famous Patient"

7. **Test Search**
   - Type "Springsteen" in search box → ✅ Found
   - Type "109439" (MRN) → ✅ Found
   - Type "1949" (birth year) → ✅ Found

8. **Open Chart Again**
   - Click **"Open Chart"** button
   - Chart loads correctly
   - All data intact

**✅ Success**: Patient persists across navigation, search works, data survives!

---

## Demo Script 2: Send Message → View in List

**Time**: ~90 seconds  
**Shows**: Messages appear immediately in sent folder

### Steps:

1. **Navigate to Messages**
   - Click 💬 "Messages" in sidebar
   - See existing demo messages (6-7 items)

2. **Compose New Message**
   - Click **"New Message"** (top right)
   - Modal opens

3. **Fill Out Form**
   - To: `Jane Doe`
   - Subject: `Diabetes Follow-up Needed`
   - Message: `Hi Jane, Please schedule your 3-month A1C check. We need to review your progress. Thanks, Dr. Pompee`
   - Priority: ● Normal (selected)

4. **Send Message**
   - Click **"Send Message"**
   - Toast: "✅ Message sent to Jane Doe"
   - Modal closes

5. **View in Sent Folder**
   - Click **"Sent"** tab (top of message list)
   - **New message appears at top of list!**
   - Shows correct timestamp (just now)
   - Subject: "Diabetes Follow-up Needed"
   - Preview of message text

6. **Navigate Away and Back**
   - Click "Dashboard" in sidebar
   - Wait 2 seconds
   - Click "Messages" again
   - Click "Sent" tab
   - **Message still there!**

7. **Test After Browser Refresh**
   - Press F5 to refresh page
   - Login again
   - Navigate to Messages → Sent
   - **Message persists after reload!**

**✅ Success**: Messages saved, visible immediately, survive navigation and refresh!

---

## Demo Script 3: Multiple Operations

**Time**: ~3 minutes  
**Shows**: Full system integration

### Steps:

1. **Add Patient** (Bruce Springsteen via AI)
   - AI Document Scan → Process → Save
   - ✅ Patient added

2. **Search for Patient**
   - Patient Search → Search "Bruce"
   - ✅ Found immediately

3. **Open Chart**
   - Click "Open Chart"
   - ✅ Loads correctly

4. **Send Message About Patient**
   - Messages → New Message
   - To: "Dr. Chen"
   - Subject: "Historic Patient Record"
   - Body: "I just added Bruce Springsteen's 1949 newborn record to the system. Fascinating historical document!"
   - Send
   - ✅ Message sent

5. **Navigate Around**
   - Dashboard → Check patient count
   - Reports → See metrics
   - Back to Messages → Sent
   - ✅ Message still there

6. **Search Again**
   - Patient Search
   - ✅ Bruce still in list

7. **Send Another Message**
   - Messages → New Message
   - To: "Clinic Manager"
   - Subject: "Data Entry Complete"
   - Body: "Historical records uploaded successfully."
   - Send
   - ✅ Both messages in Sent folder

8. **Check Stats** (Open browser console)
   ```javascript
   window.dataManager.getStats()
   ```
   - Shows: `{ totalPatients: 1, totalMessages: 2, ... }`

**✅ Success**: All operations persist, system feels alive and interactive!

---

## Demo Script 4: Data Persistence Test

**Time**: ~2 minutes  
**Shows**: Data survives page reloads

### Setup:
Already completed Scripts 1 & 2 (patient added, message sent)

### Steps:

1. **Check Current State**
   - Patient Search: Bruce listed
   - Messages → Sent: 1-2 messages visible

2. **Hard Refresh Browser**
   - Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
   - Forces full page reload

3. **Login Again**
   - Username: `doctor`
   - Role: Provider
   - Login

4. **Verify Patient**
   - Patient Search
   - **✅ Bruce Springsteen still in list!**
   - Click "Open Chart"
   - **✅ Chart loads with all data!**

5. **Verify Messages**
   - Messages → Sent
   - **✅ Sent messages still visible!**
   - Timestamps preserved
   - Content intact

6. **Check localStorage** (Console)
   ```javascript
   JSON.parse(localStorage.getItem('emr_runtime_data'))
   ```
   - Shows saved data structure
   - Patients array has Bruce
   - Messages array has sent items

**✅ Success**: Data persists through browser refresh, localStorage working!

---

## Demo Script 5: Combined Demo Data

**Time**: ~90 seconds  
**Shows**: Runtime and static data work together

### Steps:

1. **Patient Search - Initial View**
   - Navigate to Patient Search
   - See demo patients: Jane Doe, John Smith, Bob Johnson
   - Count: 3 patients

2. **Add Bruce via AI**
   - AI Document Scan → Save Bruce
   - ✅ Added

3. **Patient Search - After Adding**
   - Patient Search again
   - **Now shows 4 patients!**
   - Bruce Springsteen + 3 demo patients
   - All in same table, same format

4. **Search Across Both**
   - Search "Doe" → ✅ Finds Jane (demo)
   - Search "Bruce" → ✅ Finds Springsteen (runtime)
   - Clear search → ✅ Shows all 4

5. **Filter Both**
   - Click "Recent" filter
   - Shows recent visits (mix of demo + runtime if applicable)
   - Click "With Alerts"
   - Shows flagged patients (mix of both)

6. **Open Charts**
   - Open Jane Doe chart → ✅ Demo data loads
   - Back to search
   - Open Bruce chart → ✅ Runtime data loads
   - Both work seamlessly!

**✅ Success**: Runtime data blends perfectly with demo data!

---

## Troubleshooting During Demo

### Issue: Patient doesn't appear after AI save

**Quick Fix**:
```javascript
// Open browser console (F12)
window.dataManager.getAllPatients()
// Should show Bruce
```

If empty:
```javascript
// Check if save happened
localStorage.getItem('patient_springsteen')
// Should show patient data
```

### Issue: Message not in Sent folder

**Check**:
```javascript
window.dataManager.getAllMessages()
// Should include sent message
```

**Re-send if needed**:
- Compose message again
- Watch console for: "✅ Message sent: ..."

### Issue: Data lost after refresh

**Verify localStorage**:
```javascript
localStorage.getItem('emr_runtime_data')
// Should return JSON string
```

**If null**:
- Check if browser is in private/incognito mode
- Check if localStorage is disabled
- Try different browser

### Issue: Search not finding patient

**Check spelling**:
- Type exact name or partial match
- Try MRN number instead

**Verify patient exists**:
```javascript
window.allPatientsList
// Should show combined list
```

---

## Impressive Talking Points

### For Technical Audience:

✅ **"Notice how the patient appears instantly in search after AI extraction - no backend API call, no page refresh needed."**

✅ **"The system combines static demo data with runtime data seamlessly. You can't tell which is which from the UI."**

✅ **"All changes persist to localStorage automatically. Watch - I'll refresh the browser... and there's the data, still intact."**

✅ **"The data manager uses a singleton pattern and event-driven architecture. Any component can listen for changes."**

### For Non-Technical Audience:

✅ **"This simulates a real clinic system. When we add a patient, they immediately appear everywhere in the app."**

✅ **"Messages you send stay in the system. You can navigate away and come back - everything is saved."**

✅ **"This is perfect for training staff or demonstrating workflows. It feels like the real thing."**

✅ **"Even if you close the browser and come back, your work is saved. Just like a real EMR."**

---

## Reset for Next Demo

If you need to start fresh:

```javascript
// Open console (F12)
window.dataManager.clearAllData()
// Then refresh page (F5)
```

Or manually:
```javascript
localStorage.removeItem('emr_runtime_data')
location.reload()
```

---

## Success Indicators

During demo, watch for these signs it's working:

✅ Toast messages appear after actions  
✅ Console logs show "✅ Added..." or "✅ Message sent..."  
✅ Data appears in lists immediately  
✅ Navigation doesn't lose data  
✅ Browser refresh preserves data  
✅ Search finds both demo and runtime items  
✅ Charts load correctly for all patients  

---

## Advanced Demo: Developer Features

For technical demos, show the data manager API:

```javascript
// Show statistics
window.dataManager.getStats()
// → { totalPatients: 1, totalMessages: 2, ... }

// List all patients
window.dataManager.getAllPatients()
// → [{ id: "springsteen001", name: "Bruce Springsteen", ... }]

// Get specific patient
window.dataManager.getPatient("springsteen001")
// → { id: "springsteen001", name: "Bruce Springsteen", ... }

// Check unread messages
window.dataManager.getUnreadCount()
// → 3

// Listen for events
window.addEventListener('emr:patientAdded', (e) => {
  console.log('Patient added:', e.detail.name);
});
```

This shows the system is **developer-friendly** and **extensible**!

---

## Time Estimates

- **Quick demo** (Script 1): 2 minutes
- **Standard demo** (Scripts 1-3): 5-7 minutes
- **Comprehensive demo** (All scripts): 10-12 minutes
- **With Q&A**: 15-20 minutes

---

## Demo Readiness Checklist

Before starting demo:

- [ ] Server running on port 8082
- [ ] Browser at http://localhost:8082
- [ ] Console open (F12) for showing logs
- [ ] Runtime data cleared (fresh start)
- [ ] Bruce document demo working
- [ ] Message composer tested
- [ ] Patient search loading correctly

Ready to impress! 🎉
