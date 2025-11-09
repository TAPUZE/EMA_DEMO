# 🚀 QUICK START GUIDE - Wellness EMR v2.0

## 📖 How to Use This EMR Application

---

## 🔐 STEP 1: LOGIN

1. Open: **http://localhost:8081/index.html**
2. Login credentials are pre-filled:
   - **Username:** `dr.pompee`
   - **Password:** `password`
3. Click **"Sign In"** button

**Result:** You'll see the Dashboard with today's schedule

---

## 📊 STEP 2: EXPLORE THE DASHBOARD

The dashboard shows:
- **4 Stat Cards** - Appointments, Messages, Alerts, Patients Seen
- **Today's Schedule** - 8 appointments with status colors
- **Critical Alerts** - 2 urgent patient notifications
- **Recent Activity** - Last 4 system activities
- **Live Clock** - Updates every second

**Try This:**
- Watch the clock update in real-time
- Scroll through today's appointments
- Check the critical alerts panel

---

## 🔍 STEP 3: SEARCH FOR A PATIENT

1. Click **"Patient Search"** in the left sidebar
2. You'll see **3 patients** listed:
   - Jane Doe (MRN001) - Diabetic with CKD
   - John Smith (MRN002) - CHF and COPD
   - Alice Johnson (MRN003) - Post-amputation

**Try This:**
- Type "Jane" in the search box
- Click different filter buttons (All Patients, Recent, With Alerts)
- Click **"Open Chart"** on any patient

---

## 📋 STEP 4: VIEW PATIENT CHART

After selecting a patient, you'll see their complete chart with 6 tabs:

### Tab 1: Summary
- Active problems
- Current medications
- Most recent vitals
- Last visit details

### Tab 2: Problems
- Full problem list with ICD-10 codes
- Onset dates
- HCC classifications

### Tab 3: Medications
- All current medications
- Dosages and prescribers
- Start dates

### Tab 4: Visit History
- All previous visits
- Full SOAP notes
- Filter by time period

### Tab 5: Vitals
- Blood pressure, heart rate
- Weight, BMI
- Temperature, O2 saturation

### Tab 6: Labs
- Laboratory results
- Abnormal flags
- Reference ranges

**Try This:**
- Click through all 6 tabs
- Notice the patient banner at top stays visible
- Click **"New Visit"** button to document a visit

---

## 📝 STEP 5: CREATE A VISIT NOTE

1. From patient chart, click **"New Visit"** button
2. Fill in the form:

### Visit Information
- **Date** - Pre-filled with today
- **Type** - Choose from dropdown (Follow-up, Sick Visit, etc.)
- **Provider** - Auto-filled with Dr. Pompee

### Vital Signs
- Enter: BP, HR, Temp, Weight, Height
- **BMI calculates automatically!**
- Optional: O2 Saturation

### SOAP Note Sections
- **Chief Complaint** - Why patient came in
- **HPI** - History of present illness
- **ROS** - Check relevant systems
- **Physical Exam** - Examination findings

### Assessment (ICD-10 Diagnoses) ⭐ KEY FEATURE
1. Type in the **ICD-10 search box**
   - Try: "diabetes" or "E11.65" or "hypertension"
2. Watch the **dropdown appear** with matching codes
3. Click a diagnosis to add it
4. See it appear with **HCC code** (if applicable)
5. Add multiple diagnoses
6. Remove any by clicking the trash icon

### Plan
- Write treatment plan, medications, orders, follow-up

### Save Options
- **Save Draft** - Save without completing
- **Sign & Complete** - Finalize the visit

**Try This:**
1. Type "E11.65" in ICD-10 search
2. Click the diabetes result
3. Try searching "hypertension"
4. Add that diagnosis too
5. Click "Sign & Complete"
6. Go back to patient chart and see the new visit!

---

## 📅 STEP 6: CHECK THE SCHEDULE

1. Click **"Scheduling"** in sidebar
2. You'll see a calendar with:
   - Current month displayed
   - Appointments shown as blue dots
   - Number of appointments per day
   - Selected date in sidebar

**Try This:**
- Click **< and >** buttons to change months
- Click on any date with appointments
- See appointments for that day in the sidebar
- Scroll down to see "Upcoming Appointments" table

---

## 💬 STEP 7: VIEW MESSAGES

1. Click **"Messages"** in sidebar (shows badge "3")
2. You'll see 4 folders:
   - **Inbox** (3 unread) ⭐
   - Sent (2 messages)
   - Archived (empty)
   - Urgent (1 critical)

**Try This:**
1. Click on any message to open it
2. Read the full message in the modal
3. Click different folders to switch views
4. Notice urgent messages have red badges
5. Use checkboxes to filter by type

---

## 📊 STEP 8: VIEW REPORTS

1. Click **"Reports"** in sidebar
2. See comprehensive analytics:

### Top Section - Key Metrics
- Total Visits: 127
- New Patients: 18
- Avg Wait Time: 14 min
- Patient Satisfaction: 4.8/5.0

### Visit Types Chart
- Bar chart showing visit distribution
- Follow-up (41%), Annual Physical (30%), etc.

### Top Diagnoses
- Most common ICD-10 codes
- Number of times documented

### Demographics
- Age distribution
- Gender breakdown
- Insurance types

### HCC Capture Report ⭐ IMPORTANT
- Shows HCC codes being tracked
- Capture rate percentages
- Identifies gaps (CKD Stage 3 at 78%)

**Try This:**
- Change the date range dropdown
- Review HCC capture rates
- Scroll through recent activity log

---

## 🎯 KEY FEATURES TO TRY

### ⭐ ICD-10 Autocomplete (Most Important!)
1. Go to any patient
2. Click "New Visit"
3. Scroll to "Assessment / Diagnoses"
4. Type any of these:
   - "diabetes"
   - "E11"
   - "heart failure"
   - "I50"
   - "COPD"
5. Watch the smart dropdown appear!
6. Click to add
7. See HCC codes appear automatically

### 📱 Mobile Menu
1. If screen is narrow, you'll see hamburger icon (☰)
2. Click it to open/close sidebar
3. Try on mobile or resize browser window

### 🔔 Patient Banner
1. Select any patient
2. Notice blue banner at top shows patient info
3. This stays visible across all pages
4. Shows: Name, MRN, Age, Gender

### 💾 Auto-Save (Coming Soon)
- Currently: Manual save with buttons
- Future: Auto-saves every 2 minutes

---

## 🎓 LEARNING THE WORKFLOW

### Complete EMR Workflow:
1. **Login** → Dashboard
2. **Search Patient** → Find or add patient
3. **Open Chart** → Review medical history
4. **New Visit** → Document encounter
5. **Add Diagnoses** → Use ICD-10 autocomplete
6. **Sign Note** → Complete documentation
7. **Schedule** → Book follow-up
8. **Message** → Communicate with patient
9. **Reports** → Track metrics

---

## 💡 PRO TIPS

### Searching ICD-10 Codes:
- Search by **code** (e.g., "E11.65")
- Search by **description** (e.g., "diabetes hyperglycemia")
- Search by **condition** (e.g., "kidney disease")
- Results show **HCC codes** for risk adjustment

### Understanding HCC Codes:
- **HCC = Hierarchical Condition Category**
- Used for risk adjustment in Medicare
- Higher HCC = More complex patient = Higher reimbursement
- Example: HCC 19 = Diabetes with complications
- Track capture rate in Reports page

### Navigation Tips:
- Use **sidebar menu** for main navigation
- Use **tabs** within patient chart
- Use **breadcrumbs** to track location
- Use **patient banner** to confirm context

### Data Entry Tips:
- **BMI auto-calculates** from weight/height
- **Tab key** moves between fields
- **Required fields** are marked (chief complaint, diagnoses)
- **Save often** to avoid losing work

---

## 🐛 TROUBLESHOOTING

### Can't See Navigation Menu?
- Server must be running on port 8081
- Check browser console (F12) for errors
- Refresh page (Ctrl+R or Cmd+R)

### Pages Not Loading?
- Verify all files are in `v2/pages/` folder
- Check file names match exactly
- Clear browser cache

### ICD-10 Autocomplete Not Working?
- Type at least 2 characters
- Wait 300ms for debounce
- Check `data/icd10-codes.js` exists
- Open console to see any errors

### Patient Data Not Showing?
- Check `data/patients.js` exists
- Verify ES6 modules are supported (modern browser)
- Try different patient (Jane, John, Alice)

---

## 📚 PATIENT REFERENCE

### Patient 1: Jane Doe (MRN001)
- **Age:** 59 years old
- **Conditions:** Type 2 Diabetes, Hypertension, CKD Stage 3
- **Medications:** 4 (Metformin, Lisinopril, Atorvastatin, Aspirin)
- **Allergies:** Penicillin, Sulfa drugs
- **Last Visit:** Nov 1, 2025
- **Best For:** Diabetes management demonstrations

### Patient 2: John Smith (MRN002)
- **Age:** 67 years old
- **Conditions:** CHF, COPD, A-Fib, Hypertension
- **Medications:** 6 (includes inhalers and anticoagulation)
- **Allergies:** None
- **Last Visit:** Oct 28, 2025
- **Best For:** Complex cardiac/pulmonary cases

### Patient 3: Alice Johnson (MRN003)
- **Age:** 52 years old
- **Conditions:** Type 2 Diabetes, Post-BKA, Depression
- **Medications:** 5 (including pain management)
- **Allergies:** Codeine
- **Last Visit:** Nov 3, 2025
- **Best For:** Post-surgical and mental health documentation

---

## 🎉 YOU'RE READY!

Now you know how to:
- ✅ Login and navigate
- ✅ Search and select patients
- ✅ Review patient charts
- ✅ Document visits with SOAP notes
- ✅ Use ICD-10 autocomplete
- ✅ Manage schedule and appointments
- ✅ View messages and communications
- ✅ Generate reports and analytics

**Start exploring and enjoy your new EMR system!**

---

## 📞 NEED HELP?

- Check **README.md** for architecture details
- Check **COMPLETION.md** for feature checklist
- Review browser console (F12) for errors
- Check inline code comments for explanations

**Server Running?** Check: http://localhost:8081/index.html

**Have fun! 🎊**
