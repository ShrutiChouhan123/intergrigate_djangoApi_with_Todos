from django.db import models

# Create your models here.
class Todos_api(models.Model):
    uname = models.CharField(max_length=30)
    email = models.EmailField()
    def __str__(self) -> str:
        return self.uname + ' ' + self.email