from django.db import models

class ContactMessage(models.Model):
    STATUS_CHOICES = (
        ('unread', 'Unread'),
        ('read', 'Read'),
        ('replied', 'Replied'),
        ('closed', 'Closed'),
    )

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='unread')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Message from {self.name} - {self.created_at.strftime('%Y-%m-%d')}"

class HomepageContent(models.Model):
    hero_headline = models.CharField(max_length=200, default="WE PRINT WHAT YOU IMAGINE.")
    hero_description = models.TextField(default="Custom 3D printed products made around your ideas.")
    primary_cta_text = models.CharField(max_length=50, default="ORDER ON WHATSAPP")
    secondary_cta_text = models.CharField(max_length=50, default="EXPLORE SHOP")
    
    custom_cta_headline = models.CharField(max_length=200, default="HAVE YOUR OWN IDEA? LET'S MAKE IT REAL.")
    
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Homepage Content"

    def __str__(self):
        return "Homepage Content Settings"

class AboutContent(models.Model):
    headline = models.CharField(max_length=200, default="ABOUT CTRLPLUSPRINT")
    description = models.TextField()
    our_story = models.TextField(blank=True, null=True)
    our_process = models.TextField(blank=True, null=True)
    why_choose_us = models.TextField(blank=True, null=True)
    
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "About Content"

    def __str__(self):
        return "About Page Content"

class BusinessSettings(models.Model):
    business_name = models.CharField(max_length=100, default="CTRLPLUSPRINT")
    whatsapp_number = models.CharField(max_length=20)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    google_maps_url = models.URLField(blank=True, null=True)
    
    instagram_url = models.URLField(blank=True, null=True)
    facebook_url = models.URLField(blank=True, null=True)
    youtube_url = models.URLField(blank=True, null=True)
    
    default_whatsapp_message = models.TextField(default="Hi CTRLPLUSPRINT, I'm interested in {{product_name}}.")
    
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Business Settings"

    def __str__(self):
        return "Business Settings"

from django.contrib.auth.models import User

class AdminProfile(models.Model):
    ROLE_CHOICES = (
        ('super_admin', 'Super Admin'),
        ('product_manager', 'Product Manager'),
        ('order_manager', 'Order Manager'),
        ('content_manager', 'Content Manager'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='admin_profile')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='super_admin')

    def __str__(self):
        return f"{self.user.username} - {self.get_role_display()}"

class ActivityLog(models.Model):
    admin = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    action = models.CharField(max_length=100) # e.g. "Updated Product"
    object_name = models.CharField(max_length=200) # e.g. "BMW M Keychain"
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.admin} {self.action} {self.object_name}"
