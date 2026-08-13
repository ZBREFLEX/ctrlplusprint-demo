from django.db import models
from catalog.models import Product

class WhatsAppEnquiry(models.Model):
    STATUS_CHOICES = (
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('in_discussion', 'In Discussion'),
        ('converted', 'Converted'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    )

    customer_name = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=20)
    product = models.ForeignKey(Product, related_name='enquiries', on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    source = models.CharField(max_length=50, default='Website WhatsApp Button')
    admin_notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "WhatsApp Enquiries"
        ordering = ['-created_at']

    def __str__(self):
        return f"Enquiry from {self.customer_name} - {self.product.name if self.product else 'General'}"

class CustomOrder(models.Model):
    STATUS_CHOICES = (
        ('new', 'New'),
        ('reviewing', 'Reviewing'),
        ('quote_sent', 'Quote Sent'),
        ('approved', 'Approved'),
        ('printing', 'Printing'),
        ('ready', 'Ready'),
        ('completed', 'Completed'),
        ('rejected', 'Rejected'),
    )

    order_id = models.CharField(max_length=20, unique=True)
    customer_name = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=20)
    
    request_description = models.TextField()
    
    # Specs
    size = models.CharField(max_length=100, blank=True, null=True)
    material = models.CharField(max_length=100, blank=True, null=True)
    color = models.CharField(max_length=100, blank=True, null=True)
    finish = models.CharField(max_length=100, blank=True, null=True)
    quantity = models.IntegerField(default=1)
    
    # Pricing
    estimated_budget = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    final_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    admin_notes = models.TextField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.order_id} - {self.customer_name}"

    def save(self, *args, **kwargs):
        if not self.order_id:
            last_order = CustomOrder.objects.order_by('-id').first()
            if last_order:
                last_id = int(last_order.order_id.split('-')[1])
                self.order_id = f"CUSTOM-{last_id + 1:03d}"
            else:
                self.order_id = "CUSTOM-001"
        super().save(*args, **kwargs)

class ReferenceFile(models.Model):
    custom_order = models.ForeignKey(CustomOrder, related_name='reference_files', on_delete=models.CASCADE)
    file = models.FileField(upload_to='custom_orders/references/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Reference for {self.custom_order.order_id}"
