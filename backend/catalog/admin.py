from django.contrib import admin
from .models import Category, Product, ProductImage, ProductSpecification, ProductOption

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1

class ProductSpecificationInline(admin.TabularInline):
    model = ProductSpecification
    extra = 1

class ProductOptionInline(admin.TabularInline):
    model = ProductOption
    extra = 1

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'is_active', 'display_order')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'sku', 'category', 'price', 'status', 'is_featured')
    list_filter = ('status', 'category', 'is_featured')
    search_fields = ('name', 'sku')
    inlines = [ProductImageInline, ProductSpecificationInline, ProductOptionInline]
