"""gym_app_v2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers
from api.views import  ExerciseViewSet, DietViewSet, PlanViewSet, ClientViewSet, UserViewSet
from django.conf.urls.static import static
from django.conf import settings
from django.views.static import serve
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView
)
from api.views import CreateUserAPIView, LoginView

router = routers.DefaultRouter()
router.register('exercises', ExerciseViewSet, basename='exercise')
router.register('diet', DietViewSet, basename='diet')
router.register('plan', PlanViewSet, basename='plan')
router.register('client', ClientViewSet, basename='client')
router.register('user', UserViewSet, basename='user')


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.index, name='index'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('users/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('create/', CreateUserAPIView.as_view(), name='create-user'),
    path('login/', LoginView.as_view(), name='login'),
]


if settings.DEBUG:
    urlpatterns += static(
        "api/static/videos/",
        document_root=settings.STATICFILES_DIRS[0],
        show_indexes=True,
    )
else:
    urlpatterns += [
        path(
            "api/static/videos/<path:path>",
            serve,
            {"document_root": settings.STATICFILES_DIRS[0]},
        )
    ]