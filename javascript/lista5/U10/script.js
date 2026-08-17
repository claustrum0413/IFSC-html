select1 = document.getElementById("cidade")
select2 = document.getElementById("bairro")

select1.addEventListener('change', () => mostrarBairros(select1.value));

function mostrarBairros(cidade) {
    if (cidade == "garopaba") {
        select2.innerHTML = '<option value="">-- Selecione --</option>'
        select2.innerHTML += '<option value="">Encantada</option>';
        select2.innerHTML += '<option value="">Campo Duna</option>';
        select2.innerHTML += '<option value="">Ambrósio</option>';
        select2.innerHTML += '<option value="">Rosa</option>';
    }
    else if (cidade == "imbituba") {
        select2.innerHTML = '<option value="">-- Selecione --</option>'
        select2.innerHTML += '<option value="">Araçatuba</option>';
        select2.innerHTML += '<option value="">Alto Arroio</option>';
        select2.innerHTML += '<option value="">Itapiruba</option>';
    }
    else if (cidade == "paulolopes") {
        select2.innerHTML = '<option value="">-- Selecione --</option>'
        select2.innerHTML += '<option value="">Penha</option>';
        select2.innerHTML += '<option value="">Sorocaba</option>';
        select2.innerHTML += '<option value="">Areias</option>';
    }
    else {select2.innerHTML = '<option value="">-- Selecione uma cidade primeiro --</option>';}
}