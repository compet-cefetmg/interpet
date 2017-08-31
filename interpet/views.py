from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import *
from django.core import serializers
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login as login_user
from django.contrib.auth import logout as logout_user
from django.contrib.auth import authenticate

# Create your views here.

def interpet(request):
	return render(request, 'interpet/interpet.html')

def inscricao(request):

	if request.method == 'POST':
		inscricao = Inscricao()
		inscricao.Q1 = request.POST.get('Q1') # Nome
		inscricao.Q2 = request.POST.get('Q2')
		inscricao.Q3 = request.POST.get('Q3')
		inscricao.Q4 = request.POST.get('Q4')
		inscricao.Q5 = request.POST.get('Q5')
		inscricao.Q6 = request.POST.get('Q6')
		inscricao.Q11 = request.POST.get('Q11')
		inscricao.Q12 = request.POST.get('Q12')
		
		if request.POST.get('ouvinte'):
			inscricao.ouvinte = request.POST.get('ouvinte')
			inscricao.Q7 = request.POST.get('Q7')
			inscricao.Q8 = "Ouvinte"
			inscricao.Q9 = request.POST.get('Q9')
			inscricao.Q10 = request.POST.get('Q10')
		
		else:
			inscricao.Q7 = "nao"
			inscricao.Q8 = request.POST.get('Q8').split('-')[1]
			inscricao.Q9 = "CEFET - "+request.POST.get('Q8').split('-')[0]
			inscricao.unidade = request.POST.get('Q8').split('-')[0]
		
		inscricao.save()


		return render(request, 'interpet/interpet.html', {"inscricaoSucesso": True})

	return render(request, 'interpet/inscricao.html')

def inscritosJson(request):
	data =  serializers.serialize("json",Inscricao.objects.all())
	return HttpResponse(data, content_type='application/json')

@login_required
def inscritos(request):
	return render(request, 'interpet/inscritos.html')

def sobre(request):
	return render(request,'interpet/sobre.html')

def inscricao_ouvinte(request):
	return render(request, 'interpet/inscricao-ouvinte.html')

def logout(request):
	logout_user(request)
	return redirect('/')

def login(request):
	context = {}

	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(username=username, password=password)
		if user:
			login_user(request, user)
			return redirect(request.POST.get('next'))
		else:
			context['error'] = "Usuário ou senha inválidos."
			context['username'] = username

	return render(request, 'interpet/login.html', context)
