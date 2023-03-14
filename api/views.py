from django.shortcuts import render
from rest_framework import viewsets
from .models import Client, Plan, Diet, Exercise, Video
from .serializers import PlanSerializer, ExerciseSerliazer, ClientSerializer, DietSerializer, VideoSerializer


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


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

    def get_queryset(self):
        return self.queryset.filter(exercise__id=self.kwargs['exercise_pk'])   