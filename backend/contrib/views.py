from django.http import JsonResponse
from contrib.models import Resource
from contrib.serializers import ResourceSerializer
from rest_framework import viewsets, generics


def char_count(request):
    text = request.GET.get("text", "")
    return JsonResponse({"count": len(text)})


class ResourcesViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
