from rest_framework import viewsets, mixins
from .models import ContactMessage, HomepageContent, AboutContent, BusinessSettings, ActivityLog
from .serializers import ContactMessageSerializer, HomepageContentSerializer, AboutContentSerializer, BusinessSettingsSerializer, ActivityLogSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    filterset_fields = ['status']
    search_fields = ['name', 'email']

class HomepageContentViewSet(viewsets.ModelViewSet):
    queryset = HomepageContent.objects.all()
    serializer_class = HomepageContentSerializer

class AboutContentViewSet(viewsets.ModelViewSet):
    queryset = AboutContent.objects.all()
    serializer_class = AboutContentSerializer

class BusinessSettingsViewSet(viewsets.ModelViewSet):
    queryset = BusinessSettings.objects.all()
    serializer_class = BusinessSettingsSerializer

class ActivityLogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ActivityLog.objects.all()
    serializer_class = ActivityLogSerializer
    filterset_fields = ['action']
    search_fields = ['object_name', 'admin__username']
