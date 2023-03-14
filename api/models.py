from django.db import models
from django.contrib.auth.models import User

# Create your models here.
#NEED TO IMPLEMENT TRAINER MODEL with clients, plans etc

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_trainer = models.BooleanField(default=False)
    email = models.EmailField(blank=True, null=True)
    plans = models.ManyToManyField('Client', through='Plan', related_name='trainer_plans')
    diets = models.ManyToManyField('Client', through='Diet', related_name='trainer_diets')

    def __str__(self) -> str:
        return self.user.username
    

class Exercise(models.Model):
    name = models.CharField(max_length=255)
    sets = models.PositiveIntegerField()
    reps = models.PositiveIntegerField()
    weight = models.CharField(max_length=255)


class Video(models.Model):
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name='videos')
    video_file = models.FileField(upload_to='api/static/videos/')


class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    trainer = models.ForeignKey(Profile, on_delete=models.SET_NULL, blank=True,
                                null=True, related_name='clients')


class Plan(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='plans')
    trainer = models.ForeignKey(Profile, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    exercises = models.ManyToManyField(Exercise)

    def __str__(self):
        return self.name
    

class Diet(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='diets')
    trainer = models.ForeignKey(Profile, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    kcal = models.PositiveIntegerField()
    proteins = models.PositiveIntegerField(null=True, blank=True)
    fats = models.PositiveIntegerField(null=True, blank=True)
    carbs = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self) -> str:
        return self.name
    
    def calculate_nutritions(self):
        if self.proteins is not None and self.fats is not None and self.carbs is not None:
            return
        
        self.proteins = int((self.kcal * 0.25) / 4)
        self.fats = int((self.kcal * 0.25) / 9)
        self.carbs = int((self.kcal * 0.5) / 4)

        self.save() 