from django.db import models

# Create your models here.


class Biodata(models.Model):
    name = models.CharField(max_length=100)
    profile_pic = models.ImageField(upload_to='img/profile_pic')
    designation = models.CharField(max_length=255)
    about_me = models.TextField()
    cv_file = models.FileField(upload_to='files')
    fb_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.name

class Skill(models.Model):
    skill_name = models.CharField(max_length=200)
    percentage = models.CharField(max_length=20)

    def __str__(self):
        return self.skill_name

class Training(models.Model):
    session = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    training_center = models.TextField(blank=True)
    training_detail = models.TextField()
    duration = models.CharField(max_length=255, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    before_divider = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Education(models.Model):
    session = models.CharField(max_length=100)
    degree_title = models.CharField(max_length=255)
    institution_name = models.TextField(blank=True)
    description = models.TextField()
    result = models.CharField(max_length=255, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    before_divider = models.BooleanField(default=True)

    def __str__(self):
        return self.degree_title





class Service(models.Model):
    icon = models.CharField(max_length=150)
    service_name = models.CharField(max_length=200)
    sevice_brief = models.TextField()

    def __str__(self):
        return self.service_name


class Catagory(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Project(models.Model):
    catagory = models.ForeignKey(Catagory, on_delete=models.CASCADE)
    project_title = models.CharField(max_length=255)
    project_image = models.ImageField(upload_to='img/project/project_image')
    project_brief = models.TextField()
    technologies = models.TextField()
    web_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)

    def __str__(self):
        return self.project_title


class Feature(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    feature_title = models.CharField(max_length=255)
    feature_image = models.ImageField(upload_to='img/project/feature')

    def __str__(self):
        return self.feature_title


class Message(models.Model):
    sent_by = models.CharField(max_length=255)
    sender_email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.sent_by
