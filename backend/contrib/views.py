from django.http import JsonResponse
from contrib.models import Resource
from contrib.serializers import ResourceSerializer
from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny


def char_count(request):
    text = request.GET.get("text", "")
    return JsonResponse({"count": len(text)})


class ResourcesViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
