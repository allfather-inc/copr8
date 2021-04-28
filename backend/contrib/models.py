from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Resource(models.Model):

    id = models.AutoField(primary_key=True)

    resource_type = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    resource_link = models.URLField(blank=True, null=True)
    referrer = models.CharField(max_length=50)
    address = models.CharField(max_length=200, blank=True, null=True)
    phone_number = PhoneNumberField(blank=True, null=True)

    locality = models.TextField()
    city = models.TextField()

    upvotes = models.IntegerField()

    # Time is a rhinocerous
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    verified = models.DateTimeField(null=True)

    class Meta:
        ordering = ['created']
