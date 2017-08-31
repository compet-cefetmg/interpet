from django.db import models

# Create your models here.

class Inscricao(models.Model):
	Q1 = models.CharField(max_length=1000,verbose_name='Nome')	#Q1
	Q2 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Sexo') #Q2
	Q3 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='CPF')  #Q3
	Q4 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Telefone')#Q4
	Q5 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='E-mail')#Q5
	Q6 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Matricula')#Q6
	Q7 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Ex-Petiano')#Q7
	Q8 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='PET')#Q8
	Q9 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Instituicao')#Q9
	Q10 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Curso')#Q10
	Q11 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Estadia')#Q11
	Q12 = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Alimentação')#Q12
	unidade = models.CharField(max_length=1000, blank=True, null=True, verbose_name='Unidade')
	ouvinte = models.BooleanField(default=False)
	data = models.DateTimeField(auto_now=True, editable=True)

	def __str__(self):
		return self.Q1 + " - " + self.data.strftime("%H:%M %d/%m/%Y")

	class Meta:
		verbose_name = 'Inscrito'
		verbose_name_plural = 'Inscritos'