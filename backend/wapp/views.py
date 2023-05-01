from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WappSerializer
from .models import Wapp

class WappView(viewsets.ModelViewSet):
    serializer_class = WappSerializer
    queryset = Wapp.objects.all()
    
