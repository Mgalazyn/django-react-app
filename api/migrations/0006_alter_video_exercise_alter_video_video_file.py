# Generated by Django 4.1.4 on 2023-03-23 20:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='exercise',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videos', to='api.exercise'),
        ),
        migrations.AlterField(
            model_name='video',
            name='video_file',
            field=models.FileField(upload_to='static/videos'),
        ),
    ]