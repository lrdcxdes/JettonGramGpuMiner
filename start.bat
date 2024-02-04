
call ".\npm_install.bat"

:_minerstart
node send_universal.js --api tonhub --timeout 5 --givers 1000 --bin opencl
goto _minerstart

pause