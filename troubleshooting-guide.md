# Troubleshooting Guide: Branding Agency Website

## Common Issues and Solutions

### 1. Blank Screen / No Design Showing

**Possible Causes:**
- JavaScript errors preventing React app from rendering
- Missing or incorrectly linked CSS files
- Tailwind CSS not processing properly

**Solutions:**
1. Check browser console for JavaScript errors (F12 Developer Tools)
2. Verify that Tailwind CSS is properly configured and building
3. Ensure all required dependencies are installed (`npm install`)
4. Restart the development server (`npm run dev`)

### 2. Components Not Loading

**Possible Causes:**
- Incorrect file paths in imports
- Missing components in the component tree
- Syntax errors in JSX/TSX files

**Solutions:**
1. Verify all import paths are correct
2. Check that all required components exist
3. Look for syntax errors in the console

### 3. Styles Not Applying

**Possible Causes:**
- Tailwind classes not being processed
- CSS files not properly imported
- Build configuration issues

**Solutions:**
1. Verify Tailwind is properly configured in `vite.config.ts`
2. Check that `src/styles/index.css` imports all necessary CSS files
3. Ensure the CSS file is imported in `main.tsx`

## Quick Fixes to Try

1. **Restart the development server:**
   ```bash
   npm run dev
   ```

2. **Clear browser cache:**
   - Hard refresh (Ctrl+F5 or Cmd+Shift+R)
   - Clear browser cache and cookies

3. **Verify Tailwind is working:**
   - Check if Tailwind utility classes are being applied in the browser inspector
   - Look for the presence of Tailwind-generated CSS in the page

4. **Check browser console:**
   - Open F12 Developer Tools
   - Look for any error messages
   - Check the Console and Network tabs for issues

## Development Server Info

- **Local URL:** http://localhost:3000/
- **Network URL:** http://192.168.10.3:3000/ (accessible from other devices on the same network)

## Recommended Steps

1. Open your browser and navigate to http://localhost:3000/
2. Open Developer Tools (F12) and check the Console tab for errors
3. If you see errors, copy them and share them for further troubleshooting
4. If the page appears blank, try a hard refresh (Ctrl+F5 or Cmd+Shift+R)
5. If issues persist, restart the development server with `npm run dev`