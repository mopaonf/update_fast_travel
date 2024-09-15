import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, editable = False, db_index=True, default = uuid.uuid4)
    last_name = models.CharField(blank=False, null=False, max_length=50)
    first_name = models.CharField(blank=True, null=True, max_length=50)
    email = models.EmailField(max_length=255, blank=False, null=False,unique=True)
    phoneNumber = models.CharField(blank=True, null=True, max_length=50)
    REQUIRED_FIELDS = [
        'password',
        'last_name',
        'email',
    ]
    picture = models.TextField(blank=True, null=True)
    is_system_admin = models.BooleanField(default=False)
    is_task_admin = models.BooleanField(default=False)
    is_task_account_manager = models.BooleanField(default=False)
    is_repartitor = models.BooleanField(default=False)
    is_menber = models.BooleanField(default=True)



