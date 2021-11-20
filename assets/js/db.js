var db = {
    carros : {
        Audi: ["A1", "A3", "A4", "A5"],
        Chevrolet: ["Celta", "Classic", "Cruze", "S10"],
        Fiat: ["Uno", "Argo", "Fiorino","Toro"],
        Volkswagen: ["Gol", "Amarok", "Saveiro", "Fusca"],
        Honda: ["Civic", "Accord", "City", "Fit"],
        Hyundai: ["Creta","HB20","Sonata","Tucson"],
        Ford: ["Edge","Fusion","Mustang","Territory"],
        Mitsubishi: ["ASx", "Eclipse","Outlander","Pagero"],
        Renault: ["Captur", "Duster", "Logan", "Sandero"],
        Toyota: ["Corolla", "Etios", "Sw4", "Yaris"]
    },
    ano: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'],
    precos: ['10000','15000','20000','25000','30000','35000','40000','45000','50000'],
    estado:["MG", "SP", "PB", "RJ","SC"],
    km:["0","5000","10000","250000","300000","500000","600000"],
    nome: ["Felipe Bustamante", "Gabriel Alves", "Luis Valle", "Cintia Fontes", "Maria Julia", "Maicon Ribeiro"],
    cidade: {
        MG: ["Caratinga","Viçosa","Ipatinga"],
        SP: ["Santo André","São Paulo", "Presidente Prudente"],
        RJ: ["Rio de Janeiro", "Petrópolis", "Angra dos Reis"],
        PB: ["João Pessoa","Coremas","Pombal"],
        SC: ["Florianópolis", "Blumenau", "Balneário Camboriú"]
    }
};

//init
var listaDeBusca = [];
geraItemPesquisa();

function geraItemPesquisa(){
    var marcas = Object.keys(db.carros);

    for (var index = 0; index < 500; index++) {
        var marca = marcas[Math.floor(Math.random() * marcas.length)];
        var estado = db.estado[Math.floor(Math.random() * db.estado.length)];
        var object = {
            id: index + 1,
            marca: marca,
            modelo: db.carros[marca][Math.floor(Math.random() * db.carros[marca].length)],
            ano: Math.floor(Math.random() * 11) + 2010,
            preco: Math.floor(Math.random() * 40000) + 10000,
            estado: estado,
            km: Math.floor(Math.random() * 600000),
            nome: db.nome[Math.floor(Math.random() * db.nome.length)],
            cidade: db.cidade[estado][Math.floor(Math.random() * db.cidade[estado].length)],
        };

        listaDeBusca.push(object);
    }
}