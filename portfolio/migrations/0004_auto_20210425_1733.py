# Generated by Django 3.0 on 2021-04-25 11:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_auto_20210424_1143'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='catagory',
        ),
        migrations.DeleteModel(
            name='Feature',
        ),
        migrations.DeleteModel(
            name='Project',
        ),
    ]
