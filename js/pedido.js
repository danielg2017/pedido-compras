$(document).ready(function () {
    var almacena = 0;
    var total = 0;

    $("#add").on("click", function () {
        var info = $("#info").val();
        var cant = $("#cant").val();
        var precio = $("#precio").val();
    });

    $("#add").on("click", function () {
        continfo = $("#cant").val();
        continfo = parseInt(continfo);

        conta = $("#precio").val() * $("#cant").val();
        conta = parseInt(conta);

        total = conta + total;
        total = parseInt(total);

        almacena = continfo + almacena;
        almacena = parseInt(almacena);

        const linea = `
                <tr>
                    <td class="info">${$("#info").val()}</td>
                    <td class="cant">${$("#cant").val()}</td>
                    <td class="precio">${$("#precio").val()}</td>
                    <td class="stprecio">${conta}</td>
                </tr>
            `;

        $("#table").append(linea);
        //$('#table').append($('#info').val());
        //$('#table').append('<td>'+$('#info').val()+'</td>');
        ////$('#table').append($('#cant').val());
        //$('#table').append('<td>' + $('#cant').val() + '</td>');
        ////$('#table').append($('#precio').val());
        //$('#table').append('<td>' + $('#precio').val() + '</td>');
        //$('#table').append('</tr>')
        //
        //$('#table_total').append('<tr>')

        $("#info").val("");
        $("#cant").val("");
        $("#precio").val("");

        listview = "Cant. Total de Articulos  " + almacena;
        $("#div_article").text(listview);

        listview = "Total de su Compra  " + "$  " + total;
        $("#div_total").text(listview);
    });
});
