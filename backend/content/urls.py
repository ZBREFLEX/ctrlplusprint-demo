from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactMessageViewSet, HomepageContentViewSet, AboutContentViewSet, BusinessSettingsViewSet, ActivityLogViewSet

router = DefaultRouter()
router.register(r'contact-messages', ContactMessageViewSet)
router.register(r'homepage', HomepageContentViewSet)
router.register(r'about', AboutContentViewSet)
router.register(r'settings', BusinessSettingsViewSet)
router.register(r'logs', ActivityLogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
