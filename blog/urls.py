from django.urls import path
from .views import PostListView, PostDetailView, PostCreateView
from . import views

app_name = 'blog'

urlpatterns = [
    # path('', views.home, name='home'),
    path('', PostListView.as_view(), name='home'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('new/', PostCreateView.as_view(), name='post-new'),
    path('about',views.about, name='about')
]