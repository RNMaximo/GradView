#!/bin/bash

#
# Gera arquivos de dados


#
# Instala dependencias
cd gradview/frontend
echo "Installing dependencies..."
npm install --silent > log.txt

#
# Cria o arquivo HTML
echo "Building front-end application..."
npm run-script build > log.txt

#
# Abre o arquivo criado no navegador padrão
echo "Opening the application in default browser."
xdg-open './build/index.html'