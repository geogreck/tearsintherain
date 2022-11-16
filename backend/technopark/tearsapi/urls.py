from django.urls import path
from .views import *

urlpatterns = [
    path('moments/new/', NewMomentsList.as_view()),
    path('moments/top/', TopMomentsList.as_view()),
    path('moments/<int:pk>', MomentCRUD.as_view()),
    path('moments/', MomentsList.as_view()),
    path('users/<int:pk>/moments', UserMomentsList.as_view()),
    path('users/<int:pk>', UserCRUD.as_view()),
    path('users/', UsersList.as_view())
]