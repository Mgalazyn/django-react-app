from django.shortcuts import render
from rest_framework import viewsets
from .models import Client, Plan, Diet, Exercise
from .serializers import PlanSerializer, ExerciseSerliazer, ClientSerializer, DietSerializer


# Create your views here.
class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerliazer


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class PlanViewSet(viewsets.ModelViewSet):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer


class DietViewSet(viewsets.ModelViewSet):
    queryset = Diet.objects.all()  
    serializer_class = DietSerializer