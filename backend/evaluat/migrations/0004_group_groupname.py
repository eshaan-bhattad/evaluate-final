# Generated by Django 3.2 on 2021-04-10 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('evaluat', '0003_alter_evaluation_evaluator'),
    ]

    operations = [
        migrations.AddField(
            model_name='group',
            name='groupname',
            field=models.CharField(default='', max_length=100),
        ),
    ]
