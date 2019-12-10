#!/bin/bash

#
# Gera arquivos de dados

#
# Cria o arquivo HTML
echo "Building front-end application..."
cd gradview/frontend
npm run-script build > log.txt
echo "Building completed."

#
# Abre o arquivo criado no navegador padrão
echo "Opening the application in default browser."
xdg-open './build/index.html'