day1 = [
	{
		'start' : '8:00',
		'end' : '9:00',
		'description' : 'Credenciamento <br> Abertura: Diretoria Geral e Diretoria de Graduação',
		'place' : 'Campus Leopoldina - Auditório'
	},
	{
		'start' : '9:00',
		'end' : '9:30',
		'description' : 'COFFEE BREAK',
		'place' : 'Campus Leopoldina - Auditório'
	},
	{
		'start' : '9:30',
		'end' : '12:00',
		'description' : 'Mesa de abertura: PET: conectando saberes, conectando pessoas <br><br> <b>Fabíola de Sampaio Rodrigues Grazinoli Garrido</b> (Professora Associada de Química e Bioquímica da UFRRJ e Tutora do Programa de Educação Tutorial Conexões de Saberes no Instituto Três Rios desde 2010) <br><br> <b>Eugênia Cristina Muller Giancoli Jabour</b> (Professora de Ensino Básico Técnico e Tecnológico do IFSUDESTEMG e Tutora do Programa de Educação Tutorial do Curso de Eng. Mecatrônica e Sistemas de Informação no Campus Juiz de Fora desde 2010)',
		'place' : 'Campus Leopoldina - Auditório'
	},
	{
		'start' : '12:00',
		'end' : '14:00',
		'description' : 'Intervalo - Almoço',
		'place' : ''
	},
	{
		'start' : '14:00',
		'end' : '16:00',
		'description' : 'Relatos de experiência dos Grupos PET CEFET-MG: tutores e discentes',
		'place' : 'Campus Leopoldina - Auditório'
	},
	{
		'start' : '16:00',
		'end' : '16:30',
		'description' : 'COFFEE BREAK',
		'place' : 'Campus Leopoldina - Auditório'
	},
	{
		'start' : '16:30',
		'end' : '18:00',
		'description' : 'Relatos de experiência dos Grupos PET CEFET-MG: tutores e discentes',
		'place' : 'Campus Leopoldina - Auditório'
	},
]

day2 = [
	{
		'start' : '8:30',
		'end' : '10:00',
		'description' : 'Mesa: O PET CEFET MG em evidência: uma avaliação pelo CLAA <br><br><b>Igor Mota Morici</b> (Presidente do Comitê Local de Acompanhamento e Avaliação – CLAA – do PET e Professor do Departamento de Ciências Sociais e Filosofia - CEFET-MG)',
		'place' : 'Campus Leopoldina - Auditório'
	},
	{
		'start' : '10:00',
		'end' : '10:30',
		'description' : 'COFFEE BREAK',
		'place' : 'Campus Leopoldina - Auditório'
	},
	{
		'start' : '10:30',
		'end' : '12:00',
		'description' : 'Reflexões Petianas: encontro de discentes',
		'place' : 'Campus Leopoldina - Auditório'
	},
	{
		'start' : '10:30',
		'end' : '12:00',
		'description' : 'Reflexões Petianas: encontro de tutores',
		'place' : 'Campus Leopoldina - Sala'
	},
	{
		'start' : '12:00',
		'end' : '14:00',
		'description' : 'Intervalo - Almoço',
		'place' : ''
	},
	{
		'start' : '14:00',
		'end' : '15:30',
		'description' : 'Desdobramentos do PET no mundo do trabalho: relatos de ex-alunos petianos',
		'place' : 'Campus Leopoldina - Auditório'
	},
	{
		'start' : '15:30',
		'end' : '16:00',
		'description' : 'COFFEE BREAK',
		'place' : ''
	},
	{
		'start' : '16:00',
		'end' : '17:30',
		'description' : 'Encerramento: Revisão do documento produzido no I InterPET em 2016: avanços e desafios do PET no CEFET MG para os próximos anos',
		'place' : 'Campus Leopoldina - Auditório'
	}
]

function load_schedule(json, element) {
	$.each(json, function(j, i){
		if (i.end.length > 0) {
			$('<div class="page-header"> \
				<h3> \
					'+i.start+' às '+i.end+' \
					<small>'+i.place+'</small> \
				</h3> \
				<p>'+i.description+'</p></div>').appendTo(element)
		} else {
			$('<div class="page-header"> \
				<h3> \
					A partir das '+i.start+' \
					<small>'+i.place+'</small> \
				</h3> \
				<p>'+i.description+'</p></div>').appendTo(element)
		}
	});
}

$(document).ready(function() {
	load_schedule(day1, '#day1');
	load_schedule(day2, '#day2');
	$(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        }
    );
});

$.localScroll({
	offset:-70
});

$('#other').change(function() {
	if ($('#specify').is(':visible')) {
		$('#specify').hide(100);
		$('#specify input').val('');
	} else
		$('#specify').show(100);
});
