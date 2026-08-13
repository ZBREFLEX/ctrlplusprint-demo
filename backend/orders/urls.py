from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WhatsAppEnquiryViewSet, CustomOrderViewSet

router = DefaultRouter()
router.register(r'enquiries', WhatsAppEnquiryViewSet)
router.register(r'custom-orders', CustomOrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
