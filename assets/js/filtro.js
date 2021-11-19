function filtrosParaBusca() {
    var filtros = [
        {marca: marca.val()},
        {modelo: modelosMarca.val()},
        {valorMin:  $('#valorMinimo').val()|| '10000'},
        {valorMax: $('#valorMaximo').val() || '50000'},
        {anoMin: $('#anoMinimo').val()|| '2010'},
        {anoMax: $('#anoMaximo').val() || '2021'},
        {estado: estado.val()},
        {kmMin:$('#kmMinimo').val()||'0'},
        {kmMax:$('#kmMaximo').val()||'600000'}

    ];

    return filtros.filter(function (filtro) {
        var item = Object.keys(filtro);
        return !(filtro[item] === null || filtro[item] === '');
    }).reduce(function(result, current) {
        return Object.assign(result, current);
    }, {});
}

function filtroPorCampo(list, key, filtro) {
    return list.filter(function (item) {
        return filtro[key] === item[key]
    });
}

function filtroPorRange(list, key, key1, key2, filtro) {
    return list.filter(function (item) {
        return filtro[key1] <= item[key] && item[key] <= filtro[key2]
    });
}