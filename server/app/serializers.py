from rest_framework import serializers
from .models import Succursale, Client, Assurance

class SuccursaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Succursale
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class AssuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assurance
        fields = '__all__'