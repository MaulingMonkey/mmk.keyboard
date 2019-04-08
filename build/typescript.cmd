@pushd "%~dp0.."
call tsc --build src demo || goto :err
call modularize-namespace --watch global.js --output modular.js --namespace mmk.keyboard || goto :err
:err
@popd
@exit /b %ERRORLEVEL%
