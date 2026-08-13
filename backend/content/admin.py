from django.contrib import admin
from .models import ContactMessage, HomepageContent, AboutContent, BusinessSettings, AdminProfile, ActivityLog

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('name', 'email')

@admin.register(HomepageContent)
class HomepageContentAdmin(admin.ModelAdmin):
    pass

@admin.register(AboutContent)
class AboutContentAdmin(admin.ModelAdmin):
    pass

@admin.register(BusinessSettings)
class BusinessSettingsAdmin(admin.ModelAdmin):
    pass

@admin.register(AdminProfile)
class AdminProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role')
    list_filter = ('role',)

@admin.register(ActivityLog)
class ActivityLogAdmin(admin.ModelAdmin):
    list_display = ('admin', 'action', 'object_name', 'created_at')
    list_filter = ('action', 'created_at')
    search_fields = ('object_name', 'admin__username')
