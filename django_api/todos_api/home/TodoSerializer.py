from rest_framework import  serializers;
from .models import Todos_api

class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todos_api
        fields = '__all__'