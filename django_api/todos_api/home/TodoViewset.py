from rest_framework import viewsets
from .models import Todos_api
from .TodoSerializer import TodoSerializer
class TodoViewset(viewsets.ModelViewSet):
    queryset = Todos_api.objects.all()
    serializer_class = TodoSerializer