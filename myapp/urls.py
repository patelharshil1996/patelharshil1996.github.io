from django.contrib import admin
from django.urls import path, include
from myapp import views
urlpatterns = [
    path("", views.index, name='home'),
    path("about", views.about, name = 'about'),
    path("experience", views.experience, name = 'experience'),
    path("projects", views.projects, name = 'projects'),
    path("contact", views.contact, name = 'contact')

]