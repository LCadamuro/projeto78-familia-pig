var arrayFotos = ["https://i.pinimg.com/736x/07/e2/e1/07e2e121fe41208806c5f97290708bf7.jpg", "https://c.files.bbci.co.uk/13FD/production/_99171150_peppapigpa.jpg", "https://img.elo7.com.br/product/zoom/21C30CF/painel-de-festa-george-pig-mod-2-pequeno-principe.jpg", "https://pbs.twimg.com/media/EgRn5JSWAAMXOp9.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4EL0LcoC-bOiPwf6cytf8x3D1J20DX94-9A&usqp=CAU"];
var familiaPig = ["Familia pig", "Peppa", "Jorge", "Papai pig", "Mamãe pig"];
var i = 0;

function next(){
    i++;
    var membrosDaFamilia = 4;
    if(i > membrosDaFamilia){
        i = 0;
    }
    var pFoto = arrayFotos[i];
    var pNome = familiaPig[i];

    document.getElementById("membro_da_familia").src = pFoto;
    document.getElementById("nome").innerHTML = pNome;
    
}
