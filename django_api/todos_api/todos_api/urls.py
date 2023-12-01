
from django.contrib import admin
from django.urls import path,include
from home.TodoViewset import TodoViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'todos', TodoViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls))
]
