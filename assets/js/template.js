var marca = $('#cars');
var modelosMarca = $('#modelos');
var estado = $('#estadoBrasil');
var ano = $('#anoMinimo, #anoMaximo');
var preco = $('#valorMinimo, #valorMaximo');
var km = $('#kmMinimo, #kmMaximo');
var target = null;

//init
preencheElementos(db.ano, ano);
preencheElementos(db.precos, preco)
preencheElementos(db.km, km);
preencheElementos(db.estado, estado);

function preencheElementos(list, element){
    list.map(function(value){
        element.append(`<option value=${value}>${value}</option>`)
    });
}

function exibeModelo () {
    limpaListaModelos();
    var marcaSelecionada = marca.val();
    preencheElementos(db.carros[marcaSelecionada], modelosMarca);
}

function limpaListaModelos (){
    modelosMarca.html(`<option value="" selected>Modelo</option>`);
}

function formatValue(value) {
    var text = String(value);
    return `R$ ${text.charAt(0)}${text.charAt(1)}.${text.charAt(2)}${text.charAt(3)}${text.charAt(4)},00`;
}

function getCardId(element){
    target = element;
}

function exibeCarros(list) {
    var template = '';
    $("#count").html(list.length);
    list.map(function (item){
        var foto = Math.floor(Math.random() * 3) + 1;
        var image = `assets/images/${item.marca}/${item.modelo}/${foto}.jpg`;

        template += `
        <div class="col">
            <div class="card text-dark bg-light h-100" id="${item.id}" onclick="getCardId(this)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="${image}" class="card-img-top" alt="${item.modelo}">
                <div class="card-body">
                    <h5 class="card-title">${item.marca} - ${item.modelo}</h5>
                    <h6 class="card-title">${formatValue(item.preco)}</h6>
                    <h6 class="card-title">Km: ${(item.km)}</h6>
                    <p class="card-text">Ano: ${item.ano}</p>
                    <span id="info_carro">${JSON.stringify(item)}</span>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Estado: ${item.estado}</small>
                </div>
            </div>
        </div>
        `;
    });

    if (template === ''){
        $('#cardGroup').html(template);
        $('#not_found').html(`<p>Não encontramos resultado para essa busca</p>`);
    } else {
        $('#cardGroup').html(template);
        $('#not_found').html('')
    }
}

function exibeConteudoModal(obj){
    template = `
    <div class="card mb-2">
        <img src="${obj.img}" class="img-fluid rounded-start" alt="${obj.modelo}">
        <div class="card-body">
            <p class="card-text">Km: ${obj.km}</p>
            <p class="card-text">Ano: ${obj.ano}</p>
            <p class="card-text">${obj.cidade} / ${obj.estado}</p>
            <p class="card-text">Vendedor: ${obj.nome}</p>
            <h5 class="card-title">${formatValue(obj.preco)}</h5>
            
        </div>
    </div>
    `;
    $("#modal_body").html(template)

}