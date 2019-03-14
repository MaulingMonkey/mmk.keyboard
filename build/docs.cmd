:: Build the library's typescript documentation.

:: `npm ci` will obliterate local node_modules, which is lame when VS Code might be reading types from it.
:: Instead, only run it if we're missing typedoc (e.g. on fresh checkouts)
@if exist "%~dp0..\node_modules\.bin\typedoc.cmd" goto :skip-npm-ci
    @echo npm ci
    @if ERRORLEVEL 1 goto :error-npm-failed
:skip-npm-ci

call "%~dp0\..\node_modules\.bin\typedoc" ^
    --out "%~dp0\..\docs" ^
    --mode file ^
    --sourcefile-url-prefix "https://github.com/MaulingMonkey/mmk.keyboard/blob/master/src/" ^
    --exclude "**\impl\*.ts" ^
    --exclude "**\rawEventListeners\*.ts" ^
    "%~dp0\..\src"
@if ERRORLEVEL 1 goto :error-typedoc-failed
@exit /b 0



:error-npm-failed
@echo ERROR: `npm ci` command failed, check terminal for details.
@exit /b 1

:error-typedoc-failed
@echo ERROR: typedoc command failed, check terminal for details.
@exit /b 1
