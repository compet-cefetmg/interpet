/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    if(d.fields.ouvinte){
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
            '<tr>'+
                '<th width="30%">Sexo</th>'+
                '<td>'+ (d.fields.Q2 != null ? d.fields.Q2 : "") +'</td>'+
            '</tr>'+
            '<tr>'+
               '<th>CPF</th>'+
                '<td>'+ (d.fields.Q3 != null ? d.fields.Q3 : "") +'</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Telefone</th>'+
                '<td>'+ (d.fields.Q4 != null ?  d.fields.Q4 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>E-mail</th>'+
                '<td>' + (d.fields.Q5 != null ? d.fields.Q5 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Matrícula</th>'+
                '<td>' + (d.fields.Q6 != null ? d.fields.Q6 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Instituição de origem</th>'+
                '<td>' + (d.fields.Q9 != null ? d.fields.Q9 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Curso</th>'+
                '<td>' + (d.fields.Q10 != null ? d.fields.Q10 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Estadia</th>'+
                '<td>' + (d.fields.Q11 != null ? d.fields.Q11 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Alimentação</th>'+
                '<td>' + (d.fields.Q12 != null ? d.fields.Q12 : "") + '</td>'+
            '</tr>'+
        '</table>';
    }


    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<th width="30%">Sexo</th>'+
                '<td>'+ (d.fields.Q2 != null ? d.fields.Q2 : "") +'</td>'+
            '</tr>'+
            '<tr>'+
               '<th>CPF</th>'+
                '<td>'+ (d.fields.Q3 != null ? d.fields.Q3 : "") +'</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Unidade</th>'+
                '<td>' + (d.fields.unidade != null ? d.fields.unidade : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Telefone</th>'+
                '<td>'+ (d.fields.Q4 != null ?  d.fields.Q4 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>E-mail</th>'+
                '<td>' + (d.fields.Q5 != null ? d.fields.Q5 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Matrícula</th>'+
                '<td>' + (d.fields.Q6 != null ? d.fields.Q6 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Estadia</th>'+
                '<td>' + (d.fields.Q11 != null ? d.fields.Q11 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Alimentação</th>'+
                '<td>' + (d.fields.Q12 != null ? d.fields.Q12 : "") + '</td>'+
            '</tr>'+
        '</table>';
    '</table>';
}
 
$(document).ready(function() {
    var table = $('.datatables').DataTable( {
        "processing": true,
             "ajax": {
                 "processing": true,
                 "url": "/interpet/inscritos.json",
                 "dataSrc": ""
             },
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "fields.Q1" },
            { "data": "fields.Q8" },
        ],
        "order": [[1, 'asc']]
    } );
     
    // Add event listener for opening and closing details
    $('.datatables tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} );
