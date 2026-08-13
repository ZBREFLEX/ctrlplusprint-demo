from rest_framework import serializers
from .models import ContactMessage, HomepageContent, AboutContent, BusinessSettings, AdminProfile, ActivityLog

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class HomepageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomepageContent
        fields = '__all__'

class AboutContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutContent
        fields = '__all__'

class BusinessSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessSettings
        fields = '__all__'

class AdminProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)

    class Meta:
        model = AdminProfile
        fields = ('id', 'user', 'username', 'email', 'role')

class ActivityLogSerializer(serializers.ModelSerializer):
    admin_name = serializers.CharField(source='admin.username', read_only=True)

    class Meta:
        model = ActivityLog
        fields = ('id', 'admin', 'admin_name', 'action', 'object_name', 'ip_address', 'created_at')
