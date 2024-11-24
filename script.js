function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id' ,'foto')
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade <=10){
                // Criança
                img.setAttribute('src', '4anos.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', '16anosh.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', '20anosh.png')

            } else{
                //Idoso
                img.setAttribute('src', '40anosh.png')
            }
        }else{
            genero = "Mulher"
            if(idade >=0 && idade <=10){
                // Criança
                img.setAttribute('src', '4anosm.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', '16anosm.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', '20anosm.png')

            } else{
                //Idoso
                img.setAttribute('src', '40anosm.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}