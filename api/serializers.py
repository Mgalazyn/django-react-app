from rest_framework import serializers
from .models import Exercise, Plan, Client, Diet, Video
from django.contrib.auth import get_user_model

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'video_file']


class ExerciseSerliazer(serializers.ModelSerializer):
    #editable videos in exercise
    videos = VideoSerializer(many=True)

    class Meta:
        model = Exercise
        fields = ['id', 'name', 'sets', 'reps', 'weight', 'videos']


class PlanSerializer(serializers.ModelSerializer):
    #display exercises with full info
    exercises = ExerciseSerliazer(many=True)

    class Meta:
        model = Plan
        fields = ['client', 'trainer', 'name', 'exercises']


class ClientSerializer(serializers.ModelSerializer):
    #display plan with exercises's full information (reps, sets, weight)
    plans = PlanSerializer(many=True, read_only=True)

    class Meta:
        model = Client
        fields = ['trainer', 'plans']


class DietSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diet
        fields = ['client', 'trainer', 'name', 'kcal', 'proteins', 'fats', 'carbs']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model
        fields = '__all__'