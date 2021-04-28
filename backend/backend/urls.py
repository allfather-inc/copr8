from contrib.views import char_count
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from rest_framework import routers

from contrib.views import ResourcesViewSet

router = routers.DefaultRouter()
router.register(r'resources', ResourcesViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("char_count", char_count, name="char_count"),
    path('api/v1/', include(router.urls)),
    re_path(".*", TemplateView.as_view(template_name="index.html")),
]
