from django.urls import path
from django.contrib.auth import views as auth_views
from . import views as users_view

app_name = 'users'

urlpatterns = [
    path('login', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path('logout', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    path('profile', users_view.profile, name='profile'),
    path('register', users_view.register, name='register')
]
