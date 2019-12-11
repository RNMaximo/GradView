# MC030 - GradView
Uma visualização gráfica inteligente dos catálogos de cursos da UNICAMP.

## Sobre
Este projeto é composto de um front-end interativo feito em React, com armazenamento de dados em objetos JSON salvos em arquivos. O projeto atual possui alguns elementos específicos para a UNICAMP, mas que podem ser modificados para serem usado em outras universidades brasileiras.

<img alt="" src="/gradview/images/34.png">

## Funcionamento
### Coleta de Dados (crawling/scraping)
Os scripts de coleta de dados funcionam apenas para a versão do site da DAC disponível em dez/2019, podendo funcionar para anos posteriores caso não ocorram mudanças no layout das páginas. Estes scripts varrem as páginas da DAC e coletam dados de todas as disciplinas, cursos e suas modalidades desde o ano de 2012. Os  dados são salvos como objetos JSON em arquivos texto que posteriormente são usados na etapa de compilação do React.
### Navegação
Após o build os catálogos podem ser consultados localmente através do arquivo index.html.

## Instalação
```bash
# Clona o repositório
$ git clone https://gitlab.ic.unicamp.br/ra176675/mc030-gradview.git
# Coleta dados dos catálogos da UNICAMP, instala as dependências do projeto, constrói e abre o arquivo HTML no browser padrão.
$ sh init.sh
```

## Autores
* Douglas Delgado de Souza
* Renato Noronha Máximo
* Breno Bernard Nicolau de França

## Licença 
