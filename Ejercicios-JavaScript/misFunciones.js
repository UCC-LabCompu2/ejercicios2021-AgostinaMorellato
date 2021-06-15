/**
 * Conversion de Unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @method cambioGR
 * @param  {string} id - El id de los inputos de metros, yardas, pies y pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas.
 * @return
 */
function cambiarUnidades(id, valor){
    var metro, pulgada, pie, yarda;
    if (valor.includes(",")){
        valor = valor.replace(",",".");
    }
    if (isNaN(valor)){
        alert("Se ingreso un valor invalido "+id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else
        if (id=="metro") {
            metro=valor;
            pulgada = 39.3701*valor;
            pie = 3.2808*valor;
            yarda = 1.09361*valor;
    } else
        if (id=="pulgada") {
            pulgada=valor;
            metro = 0.0254*valor;
            pie = 0.0833*valor;
            yarda = 0.0277*valor;
    } else
        if (id=="pie") {
            pie=valor;
            metro = 0.3048*valor;
            pulgada = 12*valor;
            yarda = 0.3333*valor;
    } else
        if (id=="yarda") {
            yarda=valor;
            metro = 0.9144*valor;
            pie = 3*valor;
            pulgada = 36*valor;
    }
    document.lasunidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasunidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasunidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasunidades.unid_yarda.value = Math.round(yarda*100)/100;
}



function cambioGR(id){
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    } else if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad =(rad*180)/Math.PI;
    }
    document.getElementById( "grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMo){
    if (valorMo=="val_mostrar"){
        document.getElementById("divmo").style.display = 'block';
    }
    else if (valorMo=="val_ocultar"){
        document.getElementById("divmo").style.display = 'none';
    }
}

function sumar(){
    var num1, num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number (document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML= num1+num2;
}
function restar(){
    var num1, num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number (document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML= num1-num2;
}
function multiplicar(){
    var num1, num2;
    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number (document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML= num1*num2;
}
function dividir(){
    var num1, num2;
    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=Number (document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML= num1/num2;
}

function cargarWeb() {
    var cant, unidad, urlComp;
    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad ;
    window.open(urlComp);
}

function cargarRes(){
    var urlComp, can, un;
    urlComp = window.location.href.split("/")[5];
    can=urlComp.split("#")[1];
    un=urlComp.split("#")[2];

    document.getElementById("dist").value=can + " " + un;
}