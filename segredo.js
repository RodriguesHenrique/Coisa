function somadia() {

    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var ano = parseInt(document.getElementById("ano").value);

    var dia2 = parseInt(document.getElementById("dia2").value);
    var mes2 = parseInt(document.getElementById("mes2").value);
    var ano2 = parseInt(document.getElementById("ano2").value);


    var subdia = dia2 - dia;
    subdia = (subdia*1);
    //
    var submes = mes2 - mes;
    submes = (submes*30);
    //
    var subano = ano2 - ano;
    subano = (subano*365);

    diasp = subdia+submes+subano;

    var mteste = mes;

    for(mes ; mes <= mes2; mes++) {

        if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {

            diasp = diasp + 1;
        }

    }

    diasp = diasp - 1;

    if(diasp < 0){
        diasp = (diasp * -1);
    } 

    if (dia == 2 && mteste == 1 && ano == 2020) {
        document.getElementById("bloco").style.display = "none";
        document.getElementById("carinho").style.display = "list-item";
    }
    
    document.getElementById("resultado").innerHTML = 
    "<h2> Quantidade de dias passados: " + diasp + "<h2>";

    diasp = 0;


    /* if (result == "") {
        alert("Digite um número!!!");
    } else {
        document.getElementById("resultado").innerHTML = 
        "<h2> O resultado é " + result + ".<h2/>" + "Dias:" + ano;
    } */
}
