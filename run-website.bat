@echo off
echo Starting Sri Balaji Silk website...
set PATH=%PATH%;%APPDATA%\npm;%USERPROFILE%\AppData\Roaming\npm
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
pnpm run dev
pause
