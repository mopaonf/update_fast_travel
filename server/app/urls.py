from django.urls import path
from . import views

urlpatterns = [
    path('dash_api/', views.dash_api, name='dash_api'),
    path('succursales/', views.succursale_list, name='succursale_list'),
    path('succursales/<int:pk>/', views.succursale_detail, name='succursale_detail'),
    path('clients/', views.client_list, name='client_list'),
    path('clients/<int:pk>/', views.client_detail, name='client_detail'),
    path('assurances/', views.assurance_list, name='assurance_list'),
    path('assurances/<int:pk>/', views.assurance_detail, name='assurance_detail'),
]