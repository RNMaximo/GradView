:: Instala dependencias
cd gradview/frontend
call echo "Installing dependencies..."
call npm install

:: Cria o arquivo HTML
call echo "Building front-end application..."
call npm run-script build

:: Abre o arquivo criado no navegador padrão
call echo "Opening the application in default browser."
call start "" ./build/index.html