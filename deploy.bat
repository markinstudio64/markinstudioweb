@echo off
echo Removing existing Git repository...
if exist ".git" (
  rmdir /s /q ".git"
  echo Removed .git folder
) else (
  echo .git folder not found, continuing...
)

echo Initializing new Git repository...
git init
if errorlevel 1 (
  echo ERROR: Failed to initialize Git repository
  pause
  exit /b 1
)

echo Adding files to repository...
git add .
if errorlevel 1 (
  echo ERROR: Failed to add files
  pause
  exit /b 1
)

echo Committing changes...
git commit -m "Fix Vercel deployment issues: update dependencies and motion imports"
if errorlevel 1 (
  echo ERROR: Failed to commit changes
  pause
  exit /b 1
)

echo Adding remote origin...
git remote add origin https://github.com/markinstudio64/markin1.git
if errorlevel 1 (
  echo ERROR: Failed to add remote origin
  pause
  exit /b 1
)

echo Setting main branch and pushing...
git branch -M main
git push -u origin main
if errorlevel 1 (
  echo ERROR: Failed to push to remote repository
  pause
  exit /b 1
)

echo Success! Repository has been pushed to GitHub.
pause