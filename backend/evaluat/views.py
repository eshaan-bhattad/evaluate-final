from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer, EvaluationSerializer
from .models import User, Group, Evaluation


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class GroupView(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()


class EvaluationView(viewsets.ModelViewSet):
    serializer_class = EvaluationSerializer
    queryset = Evaluation.objects.all()
