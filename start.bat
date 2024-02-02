
call ".\npm_install.bat"

:_minerstart
node send_universal_TESTING.js --api tonhub --timeout 1 --givers 100 --bin opencl
goto _minerstart

pause