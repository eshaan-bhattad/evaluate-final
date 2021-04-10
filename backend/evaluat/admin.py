from django.contrib import admin
from .models import User
from .models import Group
from .models import Evaluation


class EvaluationAdmin(admin.ModelAdmin):
    list_display = ('evaluator', 'evaluatee', 'accountability',
                    'commitment', 'conflict', 'trust', 'comments')


class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'number', 'linkedin', 'github')


class GroupAdmin(admin.ModelAdmin):
    list_display = ('groupname', 'githubRepo', 'owner')


# Register your models here.

admin.site.register(Evaluation, EvaluationAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Group, GroupAdmin)
