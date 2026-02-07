# Mill Automation System - Multi-Language Support

## 🌍 Supported Languages

The application now supports three languages:
- **English** 🇬🇧
- **हिंदी (Hindi)** 🇮🇳  
- **العربية (Arabic)** 🇸🇦

## 🎨 Features

### Language Switcher
- Located in the sidebar under "Appearance" section
- Click on "Language" to see available options
- Visual flags for easy identification
- Checkmark indicates current language
- Persists selection in browser localStorage

### RTL Support
- Arabic language automatically switches to Right-to-Left (RTL) layout
- Entire UI adapts including:
  - Text direction
  - Sidebar position
  - Table alignment
  - Navigation flow

### Theme Switcher
- 6 beautiful themes available:
  - Olive Green (Default)
  - Ocean Blue
  - Sunset Orange
  - Deep Forest
  - Lavender Dream
  - Dark Mode
- Color previews for each theme
- Smooth transitions between themes

## 🚀 How to Use

### Changing Language

1. Open the sidebar
2. Scroll to "Appearance" section
3. Click on "Language"
4. Select your preferred language
5. Page will reload to apply RTL changes (for Arabic)

### Changing Theme

1. Open the sidebar
2. Scroll to "Appearance" section
3. Click on "Theme"
4. Select your preferred theme
5. Theme applies instantly

## 🔧 Technical Details

### Translation System

Translations are managed in `src/translations.js`:
- Centralized translation keys
- Easy to add new languages
- Type-safe with consistent keys across languages

### Adding New Translations

To add a new language:

1. Open `src/translations.js`
2. Add a new language object following the existing pattern:

\`\`\`javascript
export const translations = {
  // ... existing languages
  fr: {
    name: 'Français',
    dir: 'ltr',
    dashboard: 'Tableau de bord',
    // ... add all translation keys
  }
};
\`\`\`

3. Update the Sidebar component to include the new language flag

### Components Using Translations

Currently translated components:
- ✅ Sidebar
- ✅ Dashboard
- ⏳ Reception (to be updated)
- ⏳ Processing (to be updated)
- ⏳ Accounting (to be updated)
- ⏳ Inventory (to be updated)
- ⏳ Staff (to be updated)
- ⏳ Reports (to be updated)

## 📝 Translation Keys

All translation keys are documented in `src/translations.js`. Key categories include:

- **Navigation**: Sidebar menu items
- **Page Headers**: Titles and subtitles
- **Actions**: Buttons and interactive elements
- **Labels**: Form fields and table headers
- **Messages**: Empty states and notifications

## 🎯 Best Practices

1. **Always use translation keys** instead of hardcoded text
2. **Test in all languages** before committing changes
3. **Keep translations concise** for better UI fit
4. **Use consistent terminology** across the application
5. **Consider text expansion** (some languages require more space)

## 🐛 Known Issues

- Page reload required when switching to/from Arabic (for RTL layout)
- Some components still need translation implementation

## 🔮 Future Enhancements

- [ ] Add more languages (French, Spanish, etc.)
- [ ] Translate remaining components
- [ ] Add language-specific date/number formatting
- [ ] Implement translation management UI
- [ ] Add translation export/import functionality
