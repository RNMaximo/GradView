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


## Dados
### Formatação dos Dados
Existem dois formatos de arquivos de dados. Um com informações de catálogos, cursos e modalidades e outro com as informações de uma proposta de cumprimento de currículo específico.
O único arquivo do primeiro formato está localizado em `mc030-gradview/gradview/frontend/src/Component/Catalogue/allCatalogues.js`. 
Já com relação ao segundo formato, existe um arquivo para cada ano, curso, modalidade existente em `allCatalogues.js`. Todos eles estão organizados por ano nas pastas dentro de `mc030-gradview/gradview/frontend/public/catalogues/`

#### Estrutura do objeto JSON com informações de catálogos, cursos e modalidades
<details>
 <summary>Clique para expandir / colapsar</summary>
 
```js
const catalogueOptions = {
  "2012": {
    '1': {
      name: "Matemática - Integral",
      modality: [
        {
          name: 'AA - Bacharelado em Matemática',
          file: '2012/curso1_mod1.js'
        },
        {
          name: 'AB - Licenciatura em Matemática',
          file: '2012/curso1_mod2.js'
        },
        {
          name: 'EF - Ênfase em Física Matemática',
          file: '2012/curso1_mod3.js'
        },
      ]
    },
    '2': {
      name: "Estatística - Integral",
      modality: [
        {
          name: '',
          file: '2012/curso2_mod1.js'
        },
      ]
    },
    //...
  },
  //...
  "2020": {
    '1': {
      name: "Matemática - Integral",
      modality: [
        {
          name: 'AA - Bacharelado em Matemática',
          file: '2020/curso1_mod1.js'
        },
        {
          name: 'EF - Ênfase em Física Matemática',
          file: '2020/curso1_mod2.js'
        },
      ]
    },
    '2': {
      name: "Estatística - Integral",
      modality: [
        {
          name: '',
          file: '2020/curso2_mod1.js'
        },
      ]
    }
    //...
  }
};
export default catalogueOptions;
```

</details>

#### Exemplo para o currículo de 2020, curso 34 - Engenharia de Computação - Integral, modalidade AA - Sistemas de Computação
<details>
 <summary>Clique para expandir / colapsar</summary>
 
```js
const catalogue = {
  totalCredits: 240,
  maxCreditsSem: 30,
  semesters: {
    'sem-1': {
      id: '1',
      subjects: ['HZ291', 'F_128', 'F_129', 'MA111', 'MA141', 'MC102', 'QG111',
                 'QG122']
    },
    'sem-2': {
      id: '2',
      subjects: ['F_228', 'F_229', 'MA211', 'MA327', 'MC202', 'LA122']
    },
    //...
  },

  eletivas: {
    'elet-1': {
      credits: 13,
      hasRestrictions: false,
      subjects: [],
    },
    'elet-2': {
      credits: 12,
      hasRestrictions: true,
      subjects: ['MC019', 'MC020', 'MC032', 'MC033', 'MC040', 'MC041', 'MC050',
                 'MC051'],
    },
    //...
  },

  subjects: {
    'F_128': {
      code: 'F_128',
      name: 'Física Geral I',
      ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da
               partícula. Trabalho e energia. Conservação da Energia. Momento
               linear e sua conservação. Colisões. Momento angular da partícula
               e de sistemas de partículas. Rotação de corpos rígidos.',
      semestre: 1,
      vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
      requisitos: '',
      color: '#B9A246',
      obligatory: true
    },
    'MC102': {
      code: 'MC102',
      name: 'Algoritmos e Programação de Computadores',
      ementa: 'Conceitos básicos de organização de computadores. Construção de
               algoritmos e sua representação em pseudocódigo e linguagens de
               alto nível. Desenvolvimento sistemático e implementação de
               programas. Estruturação, depuração, testes e documentação de
               programas. Resolução de problemas.',
      semestre: 1,
      vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
      requisitos: '',
      color: '#A2B946',
      obligatory: true
    },
    //...
  }
};

export default catalogue;
```

</details>

### Coleta de Dados (crawling/scraping)
Os scripts de coleta de dados funcionam apenas para a versão do site da [DAC](https://www.dac.unicamp.br/portal/graduacao/catalogos-de-cursos) disponível em dez/2019, podendo funcionar para anos posteriores caso não ocorram mudanças no layout das páginas. 
Estes scripts varrem as páginas da DAC e coletam dados de todas as disciplinas, cursos e suas modalidades desde o ano de 2012. 
Os dados são salvos como objetos JSON em arquivos texto que posteriormente são usados na etapa de compilação do React.

### Atualizando os catálogos de cursos (Anos 2021 em diante)
Para rodar o script de atualização dos catálogos basta executar o script do Matlab `update_data/update_data.m` e ele irá automaticamente gerar os arquivos necessários para um novo build contendo as informações mais atuais da DAC.
Será necessário construir o HTML novamente, utilizando o build descrito na instalação ou pelo comando `npm run-script build` em `mc030-gradview/gradview/frontend`.


## Autores
* Breno Bernard Nicolau de França
* Douglas Delgado de Souza
* Renato Noronha Máximo


## Licença 
MIT License

Copyright (c) 2019 Breno Bernard Nicolau de França; Douglas Delgado de Souza; Renato Noronha Maximo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.