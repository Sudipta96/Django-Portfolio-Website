from django.urls import path
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.index, name="index"),
    path('about/', views.about, name="about"),
    path('skills/', views.skills, name="skills"),
    path('services/', views.services, name="services"),
    path('portfolio/', views.portfolio, name="portfolio"),
    path('contact/', views.contact, name="contact"),
    path('project/<project_id>/', views.project_detail, name="project-detail"),
    # path('send_mail/', views.send_mail, name="send_mail"),
]
