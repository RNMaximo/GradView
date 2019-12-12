# MC030 - GradView
Uma visualização gráfica inteligente dos catálogos de cursos da UNICAMP.

## Sobre
Este projeto é composto de um front-end interativo feito em React, com armazenamento de dados em objetos JSON salvos em arquivos. O projeto atual possui alguns elementos específicos para a UNICAMP, mas que podem ser modificados para uso em outras universidades brasileiras.


## Instalação
#### Requisitos do sistema
É necessário ter instalado: 
* [**git**](https://git-scm.com/downloads) para clonar o repositório.
* [**Node.js**](https://nodejs.org/en/) para instalar dependências e construir a página HTML.

#### Linux
```bash
# Clona o repositório
$ git clone https://gitlab.ic.unicamp.br/ra176675/mc030-gradview.git
# Entra no repositório clonado
$ cd mc030-gradview/
# Instala as dependências do projeto, constrói e abre o arquivo HTML no browser padrão.
$ sh build-linux.sh
```

#### Windows
No menu "Iniciar" digite "cmd" e abra o "Prompt de Comandos" clicando com o botão direito e selecionando a opção "Executar como Administrador". Aceite o pedido de permissão no popup.
```bat
:: Clona o repositório
git clone https://gitlab.ic.unicamp.br/ra176675/mc030-gradview.git
:: Entra no repositório clonado
cd mc030-gradview/
:: Instala as dependências do projeto, constrói e abre o arquivo HTML no browser padrão.
build-windows.bat
```

#### Navegação
Após a instalação e construção do HTML, os catálogos podem ser consultados localmente através do arquivo `index.html`, localizado em `mc030-gradview/gradview/frontend/build`.

## Dados dos Catálogos
### Coleta de Dados (crawling/scraping)
Os scripts de coleta de dados funcionam apenas para a versão do site da [DAC](https://www.dac.unicamp.br/portal/graduacao/catalogos-de-cursos) disponível em dez/2019, podendo funcionar para anos posteriores caso não ocorram mudanças no layout das páginas. 
Estes scripts varrem as páginas da DAC e coletam dados de todas as disciplinas, cursos e suas modalidades desde o ano de 2012. 
Os dados são salvos como objetos JSON em arquivos texto que posteriormente são usados na etapa de compilação do React.

### Atualizando os catálogos de cursos (Anos 2021 em diante)
Para rodar o script de atualização dos catálogos basta executar o script do Matlab `update_data/update_data.m` e ele irá automaticamente gerar os arquivos necessários para um novo build contendo as informações mais atuais da DAC.
Será necessário construir o HTML novamente, utilizando o build descrito na instalação ou pelo comando `npm run-script build` em `mc030-gradview/gradview/frontend`.


## Funcionalidades
A seguir estão capturas da tela da aplicação destacando algumas de suas funcionalidades.

<div align="center">
    <img align="center" src="/images/34.png" alt="GradView curso 34" width="65%">
</div>

### Diferentes vizualizações
É possivel colorir as disciplinas com base na quantidade de créditos de aulas teóricas, práticas, de laboratório, orientadas, à distância que a mesma possui ou se ela é uma sugestão para cursar créditos de eletivas.
Também é possível modificar o tamanho de cada disciplina para que seja proporcional à quantidade total de créditos da mesma.

<div align="center">
    <img align="center" src="/images/34-TP.png" alt="GradView curso 34 na visualização Teoria / Prática"  width="40%">
    <img align="center" src="/images/34-TP-CR.png" alt="GradView curso 34 na visualização Teoria / Prática e Tamanho por créditos"  width="42%">
</div>

### Campo de busca por nome, ementa e código da disciplina.
Todas as disciplinas que **não** possuem o texto procurado em seu código, nome ou ementa ficam com baixa opacidade.
A busca não diferencia letras maiúsculas de minúsculas, não diferencia letras acentuadas de sua letra sem acento nem ç de c.


<div align="center">
    <img align="center" src="/images/34-B-redes.png" alt="GradView curso 34 buscando a palavra redes"  width="44.5%">
    <img align="center" src="/images/34-B-MC.png" alt="GradView curso 34 buscando a palavra MC"  width="40%">
</div>

###  Efeito quando mouse está sobre uma disciplina
Toda a cadeia de disciplinas pré-requisitos anteriores à disciplina sob o mouse ficam coloridas enquanto as outras disciplinas do catálogo ficam cinza e com baixa opacidade.

<div align="center">
    <img align="center" src="/images/34-hover-MC732.png" alt="GradView curso 34 na visualização Teoria / Prática"  width="40%">
</div>

### Arrastar disciplinas dentro do mesmo semestre e para outros.
É possível arrastar as disciplinas e caso ela não tenha todos seus pré-requisitos cumpridos até o semestre em que está posicionada, uma exclamação aparece no canto direito superior da mesma.
Ao clicar na exclamação é aberto um popup com a lista de pré-requisitos não cumpridos.
<div align="center">
    <img align="center" src="/images/34-Move-F429.png" alt="GradView curso 34 com disciplina F 429 movida para o semestre 1 e com exclamação"  width="40%">
    <img align="center" src="/images/34-Move-F429(!).png" alt="GradView curso 34 popup com lista de pré-requisitos não cumpridos"  width="40%">
</div>

### Planejamento de eletivas
É possível visualizar os blocos de eletivas do curso ao clicar em 'Mostrar Eletivas' e arrastá-las para os semestres. As eletivas movidas para um semestre terão uma borda preta e podem ser removidas arrastando para o retângulo com texto 'REMOVER'.
<div align="center">
    <img align="center" src="/images/34-EL-0.png" alt="GradView curso 34 na visualização Teoria / Prática"  width="40%">
    <img align="center" src="/images/34-EL-TP-4.png" alt="GradView curso 34 na visualização Teoria / Prática"  width="40%">
</div>


## Autores
* Douglas Delgado de Souza
* Renato Noronha Máximo
* Breno Bernard Nicolau de França

## Como contribuir


## Licença 
