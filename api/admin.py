from django.contrib import admin
from .models import Profile, Client, Plan, Diet, Exercise

# Register your models here.

admin.site.register(Profile)
admin.site.register(Client)
admin.site.register(Plan)
admin.site.register(Diet)
admin.site.register(Exercise)