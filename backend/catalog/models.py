from django.db import models
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True, null=True)
    accent_color = models.CharField(max_length=20, default='red', help_text="e.g. red, green, blue, gold")
    image = models.ImageField(upload_to='categories/', blank=True, null=True)
    display_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['display_order']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Product(models.Model):
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('draft', 'Draft'),
        ('out_of_stock', 'Out of Stock'),
        ('archived', 'Archived'),
    )

    name = models.CharField(max_length=200)
    sku = models.CharField(max_length=50, unique=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    short_description = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    
    price = models.DecimalField(max_digits=10, decimal_places=2)
    compare_at_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    is_custom_pricing = models.BooleanField(default=False, help_text="If true, shows 'Starts from ₹X'")
    
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    
    is_featured = models.BooleanField(default=False)
    featured_order = models.IntegerField(default=0)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/')
    is_main = models.BooleanField(default=False)
    display_order = models.IntegerField(default=0)

    class Meta:
        ordering = ['display_order']

    def __str__(self):
        return f"{self.product.name} Image"

class ProductSpecification(models.Model):
    product = models.ForeignKey(Product, related_name='specifications', on_delete=models.CASCADE)
    name = models.CharField(max_length=100) # e.g. Material
    value = models.CharField(max_length=200) # e.g. PLA

    def __str__(self):
        return f"{self.name}: {self.value}"

class ProductOption(models.Model):
    product = models.ForeignKey(Product, related_name='options', on_delete=models.CASCADE)
    name = models.CharField(max_length=100) # e.g. Available Colors
    choices = models.TextField(help_text="Comma separated list of choices e.g. Red, Green, Blue")

    def __str__(self):
        return f"{self.name} for {self.product.name}"
