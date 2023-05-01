from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
import requests
class Wapp(models.Model):
    city = models.CharField(max_length=120)
    temp = models.FloatField(null=True)
    humidity = models.FloatField(null=True)

    def __str__(self):
        return self.city

@receiver(post_save, sender=Wapp)
def update_details(sender, instance, created, **kwargs):
    if created or instance.temp is None:
        api_key = "231f9a1f603b3c2b6af57b239d14b2d7"
        url = f"http://api.openweathermap.org/data/2.5/weather?q={instance.city}&appid={api_key}"
        response = requests.get(url)
        instance.temp = response.json()['main']['temp']
        instance.humidity = response.json()['main']['humidity']
        instance.save()