/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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