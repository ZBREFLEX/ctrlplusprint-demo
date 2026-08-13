from django.contrib import admin
from .models import WhatsAppEnquiry, CustomOrder, ReferenceFile

class ReferenceFileInline(admin.TabularInline):
    model = ReferenceFile
    extra = 1

@admin.register(WhatsAppEnquiry)
class WhatsAppEnquiryAdmin(admin.ModelAdmin):
    list_display = ('customer_name', 'customer_phone', 'product', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('customer_name', 'customer_phone')

@admin.register(CustomOrder)
class CustomOrderAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'customer_name', 'status', 'estimated_budget', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('order_id', 'customer_name', 'customer_phone')
    inlines = [ReferenceFileInline]
