from rest_framework import serializers
from .models import WhatsAppEnquiry, CustomOrder, ReferenceFile
from catalog.serializers import ProductSerializer

class WhatsAppEnquirySerializer(serializers.ModelSerializer):
    product_details = ProductSerializer(source='product', read_only=True)

    class Meta:
        model = WhatsAppEnquiry
        fields = '__all__'

class ReferenceFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReferenceFile
        fields = '__all__'

class CustomOrderSerializer(serializers.ModelSerializer):
    reference_files = ReferenceFileSerializer(many=True, read_only=True)

    class Meta:
        model = CustomOrder
        fields = '__all__'
