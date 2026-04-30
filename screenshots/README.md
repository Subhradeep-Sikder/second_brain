# 📸 Screenshots Guide

This folder contains screenshots of the Second Brain application showcasing all features and functionality.

---

## 🎯 Screenshot Naming Scheme

All screenshots follow a structured naming convention for easy identification:

```
[NUMBER]-[FEATURE]-[MODE].png
```

**Format:** `01-auth-signup.png`
- **NUMBER**: Sequential number (01-14)
- **FEATURE**: What the screenshot shows
- **MODE**: Light/Dark (optional)

---

## 📋 Complete Screenshot List

### 1. Authentication & Login (2 screenshots)

#### `01-auth-signup.png`
**What to capture:**
- Sign up page with empty form
- Fields: Username, Password
- "Sign up" button visible
- Dark mode enabled (if possible)
- Include toggle to "Sign in" link

**Suggested content:**
- Username: (empty)
- Password: (empty)
- Show the clean form layout

#### `02-auth-signin.png`
**What to capture:**
- Sign in page with form
- Fields: Username, Password
- "Sign in" button visible
- Show the "Sign up" toggle link
- Light mode view

**Suggested content:**
- Focus on the signin form layout
- Show responsive design

---

### 2. Dashboard - Light Mode (2 screenshots)

#### `03-dashboard-light.png`
**What to capture:**
- Main dashboard with multiple content cards
- Sidebar visible (left side)
- Topbar visible (top with buttons)
- Multiple cards with different content types
- Light theme active
- Content cards showing: title, link, tags, date
- Both static filters and some dynamic tags visible

**Suggested content:**
- Show 6-8 content items
- Mix of Videos, Tweets, Documents
- Some cards with multiple tags
- Sidebar filters highlighted

#### `04-dashboard-empty.png`
**What to capture:**
- Empty dashboard state
- No content items yet
- Helpful message: "No all notes found"
- Sidebar with just static filters
- Add Content button prominent
- Light mode

**Suggested content:**
- Fresh user state
- Shows CTA for adding first content

---

### 3. Dashboard - Dark Mode (2 screenshots)

#### `05-dashboard-dark.png`
**What to capture:**
- Dashboard with dark theme active
- Multiple content cards visible
- Dark gray/black backgrounds
- Cards with white/light text
- Sidebar in dark mode
- Mix of content types

**Suggested content:**
- Same content as screenshot 03 but in dark mode
- Show theme works with all elements
- At least 6 cards visible

#### `06-dashboard-dark-filtered.png`
**What to capture:**
- Dashboard with dark theme
- Filter active (e.g., "Videos" selected)
- Sidebar showing active filter highlighted
- Only video content displayed
- Cards showing filtered results

**Suggested content:**
- Click on "Videos" filter
- Show only 3-4 video items
- Highlight the active filter state

---

### 4. Feature Demonstrations (4 screenshots)

#### `07-create-content-modal.png`
**What to capture:**
- Create Content modal open
- Form fields visible: Title, Link, Type, Tags
- Modal overlay
- Dark mode preferred
- Modal showing all input fields

**Suggested content:**
- Title: "Learning React Hooks"
- Link: "https://example.com/react-hooks"
- Type: "Article" (dropdown)
- Tags: "javascript, react, learning"
- Cancel and Save buttons visible

#### `08-sidebar-dynamic-tags.png`
**What to capture:**
- Sidebar with both static and dynamic filters
- Static: All Notes, Tweets, Videos, Documents
- Custom Tags section visible
- At least 5-6 custom tags shown
- Dark mode view
- Tags formatted as `#tagname`

**Suggested content:**
- Static filters at top
- Divider line separating sections
- "CUSTOM TAGS" label
- Tags like: #javascript #react #learning #productivity #web

#### `09-tag-filtering.png`
**What to capture:**
- Dashboard filtered by a custom tag
- Active tag highlighted in sidebar
- Only content with that tag displayed
- Dashboard showing filtered results
- Light or dark mode

**Suggested content:**
- Click on `#javascript` tag
- Show only 3-4 cards with javascript tag
- Highlight the active tag selection

#### `10-card-actions.png`
**What to capture:**
- Single content card in detail
- Card showing: Icon, Title, Link, Tags, Date
- Top-right actions: Share button, Delete button
- Icons clearly visible
- Dark mode preferred

**Suggested content:**
- Close-up of one card
- Show share icon and delete icon
- Display tags clearly
- Include: title, link text, creation date

---

### 5. Share Features (2 screenshots)

#### `11-share-brain-link.png`
**What to capture:**
- Topbar with Share Brain button clicked
- Alert/notification showing shared link
- Link visible in alert
- User can see the shareable URL
- Light or dark mode

**Suggested content:**
- Show the Share Brain button
- Display the alert with shared link
- Can show something like: "🚀 Share link copied to clipboard! http://localhost:5173/share/abc123def"

#### `12-public-brain-view.png`
**What to capture:**
- Public brain shared view (accessed via share link)
- No sidebar (public view only)
- No edit/delete buttons
- Content cards displayed
- Title "Public Brain" at top
- Dark mode view preferred

**Suggested content:**
- Show 4-6 content cards
- All same content as private view
- No auth required for this view
- Clean, read-only interface

---

### 6. UI & Theme (2 screenshots)

#### `13-topbar-actions.png`
**What to capture:**
- Topbar in detail
- All buttons visible: Theme toggle, Share Brain, Add Content, Logout
- Title "All Notes" on left
- Light mode active

**Suggested content:**
- Show all 4 action buttons clearly
- Moon icon for theme toggle
- Share icon for Share Brain
- Plus icon for Add Content
- Red "Logout" text
- Clean, minimal background

#### `14-theme-toggle.png`
**What to capture:**
- Side-by-side or sequence showing theme toggle
- Before: Light mode
- After: Dark mode
- Or show the Sun/Moon icon clearly
- Dark mode dashboard view

**Suggested content:**
- Show the theme toggle working
- Display light and dark versions of same content
- Highlight the Sun/Moon icon

---

## 📐 Screenshot Requirements

### Image Specifications
- **Format**: PNG (recommended) or JPG
- **Resolution**: At least 1280x720 (1080p or higher preferred)
- **Quality**: High quality, clear and readable
- **Dimensions**: 16:9 aspect ratio preferred

### Best Practices
1. **Clear Content**: Make sure text and UI elements are readable
2. **Clean State**: Use realistic but clean test data
3. **Consistent**: Try to use same colors and styling across screenshots
4. **Focus**: Show one feature per screenshot
5. **Responsive**: Try to show both desktop views (and mobile if possible)

### Example Test Data for Screenshots

**For Content Cards:**
```
1. Title: "React Hooks Guide"
   Link: https://medium.com/react-hooks-guide
   Type: Article
   Tags: react, javascript, learning

2. Title: "Understanding TypeScript"
   Link: https://youtube.com/typescript-guide
   Type: Video
   Tags: typescript, web-dev, tutorial

3. Title: "CSS Grid Layout"
   Link: https://twitter.com/css-grid-tip
   Type: Tweet
   Tags: css, design, frontend

4. Title: "Node.js Best Practices"
   Link: https://github.com/best-practices
   Type: Document
   Tags: nodejs, backend, devops

5. Title: "Web Performance"
   Link: https://google.com/web-performance
   Type: Article
   Tags: performance, web-dev, optimization
```

---

## 🎬 How to Take Screenshots

### Using Browser Tools
1. Open app at `http://localhost:5173`
2. Right-click → Inspect
3. Press `Ctrl+Shift+M` (toggle device toolbar)
4. Set viewport to 1280x720
5. Press `Ctrl+Shift+S` (Firefox/Chrome screenshot)

### Using Built-in Tools
- **Windows**: Snipping Tool or Snip & Sketch (Win+Shift+S)
- **Mac**: Command+Shift+4 or Screenshot app
- **Linux**: Flameshot or built-in screenshot tool

### Chrome Extension (Recommended)
- Install "Full Page Screen Capture" extension
- Captures entire page in high quality
- Can adjust resolution

---

## 📝 Naming Checklist

Before uploading screenshots, verify:

- ✅ File named correctly: `[NUMBER]-[FEATURE].png`
- ✅ Resolution is at least 1280x720
- ✅ Image is clear and readable
- ✅ Text and UI are visible
- ✅ Feature demonstrated clearly
- ✅ No personal information exposed
- ✅ File size is reasonable (<2MB)

---

## 📂 File Organization

```
screenshots/
├── 01-auth-signup.png
├── 02-auth-signin.png
├── 03-dashboard-light.png
├── 04-dashboard-empty.png
├── 05-dashboard-dark.png
├── 06-dashboard-dark-filtered.png
├── 07-create-content-modal.png
├── 08-sidebar-dynamic-tags.png
├── 09-tag-filtering.png
├── 10-card-actions.png
├── 11-share-brain-link.png
├── 12-public-brain-view.png
├── 13-topbar-actions.png
├── 14-theme-toggle.png
└── README.md (this file)
```

---

## 🎨 Tips for Better Screenshots

1. **Lighting**: Ensure good contrast and readability
2. **Content**: Use realistic but clean data
3. **Consistency**: Try to use similar test data across screenshots
4. **Focus**: Each screenshot should showcase one main feature
5. **Cropping**: Avoid unnecessary white space
6. **Quality**: Don't compress too much - maintain clarity

---

## 📸 How to Update README with Screenshots

Once you have all screenshots, update the main README.md:

1. Save screenshots to this folder with correct naming
2. Add the image markdown links in README.md screenshots section
3. Format: `![01-auth-signup](./screenshots/01-auth-signup.png)`
4. Add captions under each image

Example:
```markdown
## 📸 Screenshots

### Authentication
![01-auth-signup](./screenshots/01-auth-signup.png)
*Sign up page with dark mode support*
```

---

## ✅ Completion Checklist

- [ ] 14 screenshots captured
- [ ] All files named correctly
- [ ] Images are clear and readable
- [ ] Screenshots saved in this folder
- [ ] README.md in main directory updated with image links
- [ ] Image markdown links verified working
- [ ] All features are showcased

---

**Happy screenshot capturing! 📸**

For questions, refer to the main README.md or check the project documentation.
