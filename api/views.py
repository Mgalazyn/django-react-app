from django.shortcuts import render
from rest_framework import viewsets
from .models import Client, Plan, Diet, Exercise, Video
from .serializers import PlanSerializer, ExerciseSerliazer, ClientSerializer, DietSerializer, VideoSerializer, UserSerializer
from django.contrib.auth import authenticate, get_user_model, login
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated



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
    

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = ()
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'Invalid username or password'})