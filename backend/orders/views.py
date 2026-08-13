from rest_framework import viewsets
from .models import WhatsAppEnquiry, CustomOrder
from .serializers import WhatsAppEnquirySerializer, CustomOrderSerializer

class WhatsAppEnquiryViewSet(viewsets.ModelViewSet):
    queryset = WhatsAppEnquiry.objects.all()
    serializer_class = WhatsAppEnquirySerializer
    filterset_fields = ['status', 'product']
    search_fields = ['customer_name', 'customer_phone']

class CustomOrderViewSet(viewsets.ModelViewSet):
    queryset = CustomOrder.objects.all()
    serializer_class = CustomOrderSerializer
    filterset_fields = ['status']
    search_fields = ['customer_name', 'order_id']
