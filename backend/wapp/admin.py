from django.contrib import admin
from .models import Wapp

class WappAdmin(admin.ModelAdmin):
    list_display = ('city','temp','humidity')

admin.site.register(Wapp, WappAdmin)

