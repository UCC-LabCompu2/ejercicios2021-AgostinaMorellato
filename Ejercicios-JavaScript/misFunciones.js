/**
 * Conversion de Unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @method cambioGR
 * @param  {string} id - El id de los inputos de metros, yardas, pies y pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas.
 * @return
 */
function cambiarUnidades(id, valor){
    if (isNaN(valor)){
        alert("Se ingreso un valor invalido "+id);
        document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    } else
        if (id=="metro") {
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.2808*valor;
        document.lasunidades.unid_yarda.value = 1.09361*valor;
    } else
        if (id=="pulgada") {
        document.lasunidades.unid_metro.value = 0.0254*valor;
        document.lasunidades.unid_pie.value = 0.0833*valor;
        document.lasunidades.unid_yarda.value = 0.0277*valor;
    } else
        if (id=="pie") {
        document.lasunidades.unid_metro.value = 0.3048*valor;
        document.lasunidades.unid_pulgada.value = 12*valor;
        document.lasunidades.unid_yarda.value = 0.3333*valor;
    } else
        if (id=="yarda") {
        document.lasunidades.unid_metro.value = 0.9144*valor;
        document.lasunidades.unid_pie.value = 3*valor;
        document.lasunidades.unid_pulgada.value = 36*valor;
    }
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
    document.getElementsByName("sum_total")[0].value= num1+num2;
}
function restar(){
    var num1, num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number (document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].value= num1-num2;
}
function multiplicar(){
    var num1, num2;
    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number (document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].value= num1*num2;
}
function dividir(){
    var num1, num2;
    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=Number (document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].value= num1/num2;
}