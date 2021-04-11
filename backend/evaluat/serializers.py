from rest_framework import serializers
from .models import User, Group, Evaluation


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'email', 'number', 'linkedin', 'github', 'groups')


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('groupname', 'students',
                  'githubRepo', 'owner', 'evaluations')
        depth = 2


class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = ('evaluator', 'evaluatee', 'accountability',
                  'commitment', 'conflict', 'trust', 'results', 'comments')
        depth = 2
