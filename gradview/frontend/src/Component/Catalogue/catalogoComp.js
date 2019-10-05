const sem1 = [
    {
        name: 'F128',
        semestre: 1,
        creditos: 4,
        requisitos: ''
    },
    {
        name: 'F129',
        semestre: 1,
        creditos: 2,
        requisitos: ''
    },
    {
        name: 'HZ291',
        semestre: 1,
        creditos: 2,
        requisitos: ''
    },
    {
        name: 'MA111',
        semestre: 1,
        creditos: 6,
        requisitos: ''
    },
    {
        name: 'MA141',
        semestre: 1,
        creditos: 4,
        requisitos: ''
    },
    {
        name: 'MC102',
        semestre: 1,
        creditos: 6,
        requisitos: ''
    },
    {
        name: 'QG111',
        semestre: 1,
        creditos: 2,
        requisitos: ''
    },
    {
        name: 'QG122',
        semestre: 1,
        creditos: 2,
        requisitos: ''
    },


]

const sem2 = [
    {
        name: 'F228',
        semestre: 2,
        creditos: 4,
        requisitos: ['F128']
    },
    {
        name: 'F229',
        semestre: 2,
        creditos: 2,
        requisitos: ['F129', 'F128']
    },
    {
        name: 'LA122',
        semestre: 2,
        creditos: 4,
    },
    {
        name: 'MA211',
        semestre: 2,
        creditos: 6,
        requisitos: ['MA111', 'MA141']
    },
    {
        name: 'MA327',
        semestre: 2,
        creditos: 4,
        requisitos: ['MA141']
    },
    {
        name: 'MC202',
        semestre: 2,
        creditos: 6,
        requisitos: ['MC102'],
    }
];

const sem3 = [
    {
        name: 'EA513',
        semestre: 3,
        creditos: 4,
        requisitos: ['MA111'],
    },
    {
        name: 'F315',
        semestre: 3,
        creditos: 4,
        requisitos: ['F128', 'MA211'],
    },
    {
        name: 'F328',
        semestre: 3,
        creditos: 4,
        requisitos: ['F228']
    },
    {
        name: 'F329',
        semestre: 3,
        creditos: 2,
        requisitos: ['F129', 'MA111'],
    },
    {
        name: 'MA311',
        semestre: 3,
        creditos: 6,
        requisitos: ['MA211'],
    },
    {
        name: 'MC322',
        semestre: 3,
        creditos: 4,
        requisitos: ['MC202'],
    }
];

const sem4 = [
    {
        name: 'EA772',
        semestre: 4,
        creditos: 4,
    }, {
        name: 'EM423',
        semestre: 4,
        creditos: 3,
        requisitos: ['F315'],
    },
    {
        name: 'F428',
        semestre: 4,
        creditos: 4,
        requisitos: ['F328'],
    },
    {
        name: 'F429',
        semestre: 4,
        creditos: 2,
        requisitos: ['F329'],
    },
    {
        name: 'MC358',
        semestre: 4,
        creditos: 4,
    },
    {
        name: 'MC404',
        semestre: 4,
        creditos: 4,
        requisitos: ['MC202'],
    }];

const catalogoComp = [...sem1, ...sem2, ...sem3, ...sem4]
export default catalogoComp;
/*
{
                name: 'EE400',
                semestre: ,
                creditos: ,
 ,
}, {
    name: 'EE532',
    semestre: ,
    creditos: ,
},
{
    name: 'MC458',
    semestre: ,
    creditos: ,
},
{
    name: 'MC613',
    semestre: ,
    creditos: ,
},
{
    name: 'MC750',
    semestre: ,
    creditos: ,
},
{
    name: 'ME323',
    semestre: ,
    creditos: ,
},
{
                    name: 'EE534',
                    semestre: ,
                    creditos: ,
 ,
}, {
    name: 'MC426',
    semestre: ,
    creditos: ,

},
{
    name: 'MC536',
    semestre: ,
    creditos: ,
},
{
    name: 'MC558',
    semestre: ,
    creditos: ,
},
{
    name: 'MC732',
    semestre: ,
    creditos: ,
},
{
    name: 'MS211',
    semestre: ,
    creditos: ,
},
*/