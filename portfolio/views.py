from django.shortcuts import render, get_object_or_404, redirect
from .models import *
from .forms import ContactForm
from django.contrib import messages
# Create your views here.


from django.contrib.auth.models import User

username = 'admin'
email = 'admin@example.com'
password = 'super_password'

if User.objects.filter(username=username).count() == 0:
    User.objects.create_superuser(username, email, password)
    print('Superuser created.')
else:
    print('Superuser creation failed. User already exists.')


def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, f'Thank you, Your message has been sent!!')
            return redirect('portfolio:index')
        else:
            messages.warning(request, f'Invalid form input.Please try again!')
            return redirect('portfolio:index')
    else:
        form = ContactForm()
        biodata = Biodata.objects.order_by('-created_at').first()
        skills = Skill.objects.all()
        training_infos = Training.objects.all().order_by('-timestamp')
        edu_infos = Education.objects.all().order_by('-timestamp')
        services = Service.objects.all()
        categories = Catagory.objects.all()
        projects = Project.objects.all()

    context = {
        'form': form,
        'bio': biodata,
        'skills': skills,
        'training_infos': training_infos,
        'edu_infos': edu_infos,
        'services': services,
        'categories': categories,
        'projects': projects
    }
    return render(request, 'index.html', context=context)


def about(request):
    biodata = Biodata.objects.last()
    context = {'bio': biodata}
    return render(request, 'about.html', context=context)


def skills(request):
    skills = Skill.objects.all()
    training_infos = Training.objects.all().order_by('-timestamp')
    edu_infos = Education.objects.all().order_by('-timestamp')
    context = {
        'skills': skills,
        'training_infos': training_infos,
        'edu_infos': edu_infos,
    }
    return render(request, 'skills.html', context=context)


def services(request):
    services = Service.objects.all()
    context = {
        'services': services,
    }
    return render(request, 'services.html', context=context)


def portfolio(request):
    categories = Catagory.objects.all()
    projects = Project.objects.all()
    context = {
        'categories': categories,
        'projects': projects,
    }
    return render(request, 'portfolio.html', context=context)


def contact(request):
    form = ContactForm(request.POST or None)
    if request.method == 'POST':
        EMAIL_HOST_USER = "NEW USER"
        if form.is_valid():
            form.save()
            receiver = form.cleaned_data.get('sent_by')
            email_receiver = form.cleaned_data.get('sender_email')
            subject = form.cleaned_data.get('subject')
            message = form.cleaned_data.get('message')
            email_sender = EMAIL_HOST_USER
            messages.success(request, f'Thank you, Your message has been sent!!')
            return redirect('portfolio:contact')
        else:
            messages.warning(request, f'Invalid form input.Please try again!')
            return redirect('portfolio:index')
    context = {
        'form': form,
    }
    return render(request, 'contact.html', context=context)


def project_detail(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    features = Feature.objects.filter(project=project.id)
    print(project)
    print(features)
    context = {
        'project': project,
        'features': features,
    }
    return render(request, 'project_detail.html', context=context)
