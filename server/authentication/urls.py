from django.urls import path
from .views import *

urlpatterns = [
    path('login/', login_view),
    path('register/', register),
    path('users_list/', users_list),
    path('get_user_profile/', get_user_profile),
    path('update_profile/', update_profile)
]
