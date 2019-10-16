const sem1 = [
  {
    code: 'F128',
    name: 'Física Geral I',
    ementa: 'Cinemática do ponto. Leis de Newton. Estática e dinâmica da partícula. Trabalho e energia. Conservação da Energia. Momento linear e sua conservação. Colisões. Momento angular da partícula e de sistemas de partículas. Rotação de corpos rígidos.',
    semestre: 1,
    creditos: 4,
    vector: {T:2, P:0, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ''
  },
  {
    code: 'F129',
    name: 'Física Experimental I',
    semestre: 1,
    creditos: 2,
    vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:4, C:2},
    requisitos: ''
  },
  {
    code: 'HZ291',
    name: "Tópicos Especiais de Humanidades I",
    semestre: 1,
    creditos: 2,
    vector: {T:0, P:0, L:2, O:0, D:0, HS:2, SL:4, C:4},
    requisitos: ''
  },
  {
    code: 'MA111',
    name: "Cálculo I",
    semestre: 1,
    vector: {T:4, P:2, L:0, O:0, D:0, HS:6, SL:6, C:6},
    creditos: 6,
    requisitos: ''
  },
  {
    code: 'MA141',
    name: "Geometria Analítica e Vetores",
    ementa: "Sistemas lineares. Vetores, operações. Bases, sistemas de coordenadas. Distância, norma e ângulo. Produtos escalar e vetorial. Retas no plano e no espaço. Planos. Posições relativas, interseções, distâncias e ângulos. Círculo e esfera. Coordenadas polares, cilíndricas e esféricas. Seções cônicas, classificação. Introdução às quádricas.",
    semestre: 1,
    creditos: 4,
    vector: {T:3, P:1, L:0, O:0, D:0, HS:4, SL:4, C:4},
    requisitos: ''
  },
  {
    code: 'MC102',
    name: "Algoritmos e Programação de Computadores",
    ementa: "Conceitos básicos de organização de computadores. Construção de algoritmos e sua representação em pseudocódigo e linguagens de alto nível. Desenvolvimento sistemático e implementação de programas. Estruturação, depuração, testes e documentação de programas. Resolução de problemas.",
    semestre: 1,
    creditos: 6,
    vector: {T:4, P:0, L:2, O:0, D:0, HS:6, SL:6, C:6},
    requisitos: ''
  },
  {
    code: 'QG111',
    semestre: 1,
    creditos: 2,
    requisitos: ''
  },
  {
    code: 'QG122',
    semestre: 1,
    creditos: 2,
    requisitos: ''
  },


]

const sem2 = [
  {
    code: 'F228',
    semestre: 2,
    creditos: 4,
    requisitos: ['F128']
  },
  {
    code: 'F229',
    semestre: 2,
    creditos: 2,
    requisitos: ['F129', 'F128']
  },
  {
    code: 'LA122',
    semestre: 2,
    creditos: 4,
  },
  {
    code: 'MA211',
    semestre: 2,
    creditos: 6,
    requisitos: ['MA111', 'MA141']
  },
  {
    code: 'MA327',
    semestre: 2,
    creditos: 4,
    requisitos: ['MA141']
  },
  {
    code: 'MC202',
    semestre: 2,
    creditos: 6,
    requisitos: ['MC102'],
  }
];

const sem3 = [
  {
    code: 'EA513',
    semestre: 3,
    creditos: 4,
    requisitos: ['MA111'],
  },
  {
    code: 'F315',
    semestre: 3,
    creditos: 4,
    requisitos: ['F128', 'MA211'],
  },
  {
    code: 'F328',
    semestre: 3,
    creditos: 4,
    requisitos: ['F228']
  },
  {
    code: 'F329',
    semestre: 3,
    creditos: 2,
    requisitos: ['F129', 'MA111'],
  },
  {
    code: 'MA311',
    semestre: 3,
    creditos: 6,
    requisitos: ['MA211'],
  },
  {
    code: 'MC322',
    semestre: 3,
    creditos: 4,
    requisitos: ['MC202'],
  }
];

const sem4 = [
  {
    code: 'EA772',
    semestre: 4,
    creditos: 4,
  }, {
    code: 'EM423',
    semestre: 4,
    creditos: 3,
    requisitos: ['F315'],
  },
  {
    code: 'F428',
    semestre: 4,
    creditos: 4,
    requisitos: ['F328'],
  },
  {
    code: 'F429',
    semestre: 4,
    creditos: 2,
    requisitos: ['F329'],
  },
  {
    code: 'MC358',
    semestre: 4,
    creditos: 4,
  },
  {
    code: 'MC404',
    semestre: 4,
    creditos: 4,
    requisitos: ['MC202'],
  }];

const catalogoComp = [...sem1, ...sem2, ...sem3, ...sem4]
export default catalogoComp;
/*
{
                code: 'EE400',
                semestre: ,
                creditos: ,
 ,
}, {
    code: 'EE532',
    semestre: ,
    creditos: ,
},
{
    code: 'MC458',
    semestre: ,
    creditos: ,
},
{
    code: 'MC613',
    semestre: ,
    creditos: ,
},
{
    code: 'MC750',
    semestre: ,
    creditos: ,
},
{
    code: 'ME323',
    semestre: ,
    creditos: ,
},
{
                    code: 'EE534',
                    semestre: ,
                    creditos: ,
 ,
}, {
    code: 'MC426',
    semestre: ,
    creditos: ,

},
{
    code: 'MC536',
    semestre: ,
    creditos: ,
},
{
    code: 'MC558',
    semestre: ,
    creditos: ,
},
{
    code: 'MC732',
    semestre: ,
    creditos: ,
},
{
    code: 'MS211',
    semestre: ,
    creditos: ,
},
*/