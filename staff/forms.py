from django import forms
from django.contrib.auth import authenticate

class LoginForm(forms.Form):
    username = forms.CharField(label='Usuário', max_length=100, widget=forms.TextInput(attrs={'class': 'form-control'}))
    password = forms.CharField(label='Senha', max_length=100, widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    def login(self, request):
        username = self.data.get('username')
        password = self.data.get('password')
        user = authenticate(username=username, password=password)
        return user
