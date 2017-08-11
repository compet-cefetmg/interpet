/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    if(d.fields.ouvinte){
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
            '<tr>'+
                '<th>Situação Acadêmica</th>'+
                '<td>' + (d.fields.Q21 != null ? d.fields.Q21 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Curso que atua</th>'+
                '<td>' + (d.fields.Q22 != null ? d.fields.Q22 : "") + '</td>'+
            '</tr>'+
            '<tr>'+
                '<th>Instituição de origem</th>'+
                '<td>' + (d.fields.Q23 != null ? d.fields.Q23 : "") + '</td>'+
            '</tr>'+
        '</table>';
    }


    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<th width="30%">Idade</th>'+
            '<td>'+ (d.fields.Q2 != null ? d.fields.Q2 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Egresso de escola</th>'+
            '<td>'+ (d.fields.Q3 != null ? d.fields.Q3 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Atividades Acadêmicas</th>'+
            '<td>'+ eval(d.fields.Q4).reduce(function(previousValue, currentValue){ return previousValue +  currentValue + ", "; }, "") +
            		(d.fields.Q5 ? ", " + d.fields.Q5 : "") +
            '</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Vínculo</th>'+
            '<td>' + (d.fields.Q7 != null ? d.fields.Q7 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Por que ingressou no PET?</th>'+
            '<td>' + (d.fields.Q8 != null ? d.fields.Q8 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Carga horária diária</th>'+
            '<td>' + (d.fields.Q9 != null ? d.fields.Q9 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Onde desenvolve a maior parte das atividades do PET?</th>'+
            '<td>' + (d.fields.Q10 != null ? d.fields.Q10 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Qual é a sua rotina semanal de contato com seu tutor?</th>'+
            '<td>' + (d.fields.Q11 != null ? d.fields.Q11 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Qual é o meio mais utilizado para o contato com seu tutor?</th>'+
            '<td>' + (d.fields.Q12 != null ? d.fields.Q12 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>O valor da bolsa é adequado?</th>'+
            '<td>' + (d.fields.Q13 != null ? d.fields.Q13 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>O recebimento da bolsa colabora para a sua permanência no CEFET-MG?</th>'+
            '<td>' + (d.fields.Q14 != null ? d.fields.Q14 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Das atividades desenvolvidas pelo grupo PET que você participa, com quais delas que você mais se identifica?</th>'+
            '<td>' + (d.fields.Q15 != null ? d.fields.Q15 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th colspan="2">Para cada interface do PET, cite uma atividade desenvolvida pelo grupo que você participa:</th>'+
        '</tr>'+
        '<tr>'+
            '<td align="right">Ensino</td>'+
            '<td>' + (d.fields.Q16 != null ? d.fields.Q16 : "") +'</td>'+
        '</tr>'+
            '<td align="right">Pesquisa</td>'+
            '<td>' + (d.fields.Q17 != null ? d.fields.Q17 : "") +'</td>'+
        '</tr>'+
            '<td align="right">Extensão</td>'+
            '<td>' + (d.fields.Q18 != null ? d.fields.Q18 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>De que forma o PET pode colaborar para o mundo do trabalho e para a formação acadêmica?</th>'+
            '<td>' + (d.fields.Q19 != null ? d.fields.Q19 : "") +'</td>'+
        '</tr>'+
        '<tr>'+
            '<th>Você pretende seguir carreira acadêmica?</th>'+
            '<td>' + (d.fields.Q20 != null ? d.fields.Q20 : "") +'</td>'+
        '</tr>'+
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
            { "data": "fields.Q6" },
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
