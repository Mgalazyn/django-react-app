from django.shortcuts import render
from rest_framework import viewsets
from .models import Client, Plan, Diet, Exercise, Video
from .serializers import PlanSerializer, ExerciseSerliazer, ClientSerializer, DietSerializer, VideoSerializer, UserSerializer, LoginSerializer
from django.contrib.auth import authenticate, get_user_model, login
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status, generics, permissions


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
    permission_classes = (IsAuthenticated, )
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()


class CreateUserAPIView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        self.create(request, *args, **kwargs)
        return Response({'success': 'User created successfully'}, status=status.HTTP_201_CREATED)
    

class LoginView(APIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = authenticate(
            request=request,
            email=serializer.validated_data['email'],
            password=serializer.validated_data['password'],
            username=serializer.validated_data['username']
        )

        if user is not None:
            login(request, user)
            return Response({'success': True, 'message': 'Login succeeded'}, status=status.HTTP_200_OK)
        else:
            return Response({'success': False, 'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)