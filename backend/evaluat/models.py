from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    number = models.CharField(max_length=100)
    linkedin = models.CharField(max_length=100)
    github = models.CharField(max_length=100)
    groups = models.ManyToManyField(
        'evaluat.Group', related_name='group_user', blank=True)

    def __str__(self):
        return self.name

# class Course(models.Model):
#     instructor = models.ForeignKey(User,on_delete=models.CASCADE, default=None)
#     students = ArrayField(models.CharField(max_length=100),null = True, blank = True)
#     groups = ArrayField(models.CharField(max_length=100),null = True, blank = True)

#     def __str__(self):
#         return self.instructor


class Group(models.Model):
    groupname = models.CharField(max_length=100, default="")
    students = models.ManyToManyField(
        'evaluat.User', related_name='user_groups')
    githubRepo = models.CharField(max_length=100)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    evaluations = models.ManyToManyField(
        'evaluat.Evaluation', related_name="group_evaluations", blank=True)

    def __str__(self):
        return self.githubRepo


class Evaluation(models.Model):
    evaluator = models.ForeignKey(
        User, on_delete=models.CASCADE, default=None, related_name='evaluator')
    evaluatee = models.ForeignKey(
        User, on_delete=models.CASCADE, default=None, related_name='evaluatee')
    accountability = models.IntegerField(default=0)
    commitment = models.PositiveIntegerField(default=0)
    conflict = models.PositiveIntegerField(default=0)
    trust = models.PositiveIntegerField(default=0)
    results = models.IntegerField(default=0)
    comments = models.TextField(max_length=1000)

    def __str__(self):
        return self.evaluatee.name
