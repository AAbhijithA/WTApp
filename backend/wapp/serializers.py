from rest_framework import serializers
from .models import Wapp

class WappSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wapp
        fields = ('id','city','temp','humidity')