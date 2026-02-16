@echo off
echo Advanced Build Troubleshooting...
echo.

echo Step 1: Cleaning npm cache...
call npm cache clean --force
if errorlevel 1 (
  echo Warning: Failed to clean npm cache, continuing...
)

echo.
echo Step 2: Deleting node_modules and package-lock.json...
if exist "node_modules" (
  echo Deleting node_modules folder...
  rmdir /s /q "node_modules"
)
if exist "package-lock.json" (
  echo Deleting package-lock.json...
  del "package-lock.json"
)

echo.
echo Step 3: Installing dependencies...
call npm install
if errorlevel 1 (
  echo Attempting fallback installation with legacy peer deps...
  call npm install --legacy-peer-deps
  if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
  )
)

echo.
echo Step 4: Verifying type definitions...
call npx tsc --noEmit --skipLibCheck false
if errorlevel 1 (
  echo TypeScript errors found. Checking for missing types...
  call npm install --save-dev @types/node @types/react @types/react-dom
  if errorlevel 1 (
    echo Warning: Could not install type definitions automatically
  )
)

echo.
echo Step 5: Running TypeScript type check...
call npx tsc --noEmit
if errorlevel 1 (
  echo TypeScript errors still present. Attempting to rebuild...
  call npx tsc --build --clean
  call npx tsc --noEmit
  if errorlevel 1 (
    echo TypeScript errors found. Please fix them before building.
    pause
    exit /b 1
  )
)

echo.
echo Step 6: Building the project...
call npm run build
if errorlevel 1 (
  echo Build failed. Check for errors above.
  pause
  exit /b 1
)

echo.
echo SUCCESS: Build completed successfully!
echo You can now deploy your project.
pause