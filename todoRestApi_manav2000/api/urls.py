from django.urls import path
from . import views


urlpatterns = [
    path('task-list/', views.task_list, name='task-list'),
    path('task-detail/<int:pk>/', views.task_detail, name='task-detail'),
    path('task-create/', views.task_create, name='task-create'),
    path('task-update/<int:pk>/', views.task_update, name='task-update'),
    path('task-delete/<int:pk>/', views.task_delete, name='task-delete'),
]
