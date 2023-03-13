from rest_framework import serializers
from .models import Exercise, Plan, Client, Diet


class ExerciseSerliazer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['name', 'sets', 'reps', 'weight']


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

