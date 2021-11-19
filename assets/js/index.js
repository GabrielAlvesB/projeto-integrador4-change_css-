//Functions
function handleClick(){
    exibeCarros(buscarCarros());
    $('.result').css('display', 'block');
}

function buscarCarros(){
    var filtroEstado = null;
    var filtroMarca = null;
    var filtroModelo = null;
    var filtrosAtivos = filtrosParaBusca();

    var filtroValor = filtroPorRange(listaDeBusca, 'preco', 'valorMin', 'valorMax', filtrosAtivos);

    var filtroAno = filtroPorRange(filtroValor, 'ano', 'anoMin', 'anoMax', filtrosAtivos);

    var filtroKm = filtroPorRange(filtroAno, 'km', 'kmMin', 'kmMax', filtrosAtivos);


    if (filtrosAtivos.estado){
        filtroEstado = filtroPorCampo(filtroKm, 'estado', filtrosAtivos)
    }

    if (filtrosAtivos.marca){
        filtroMarca = filtroEstado ?
            filtroPorCampo(filtroEstado, 'marca', filtrosAtivos)
            : filtroPorCampo(filtroKm, 'marca', filtrosAtivos)

        if (filtrosAtivos.modelo){
            filtroModelo = filtroPorCampo(filtroMarca, 'modelo', filtrosAtivos)
        }
    }

    if(filtrosAtivos.estado && !filtrosAtivos.marca){
        return filtroEstado;
    } else if (filtrosAtivos.marca && !filtrosAtivos.modelo){
        return filtroMarca;
    } else if (filtrosAtivos.modelo){
        return filtroModelo;
    }

    return filtroKm;
}
