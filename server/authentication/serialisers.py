from rest_framework import serializers
from .models import *

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']   

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    # fields = ['id', 'username','first_name','last_name','email',]
    exclude = ['password',]

class UserProfileUpdateSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['last_name', 'picture']
    # exclude = ['password',]


class UserRegistrationSerializer(serializers.ModelSerializer):
  # We are writing this becoz we need confirm password field in our Registratin Request
    # password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields=['email', 'username', "phoneNumber",'password',]
        extra_kwargs={
      'password':{'write_only':True}
    }

  # Validating Password and Confirm Password while Registration
    def validate(self, attrs):
        # password = attrs.get('password')
        # password2 = attrs.get('password2')
        # if password != password2:
        #     raise serializers.ValidationError("Les deux mots de passe ne correspondent pas")
        return attrs

    def create(self, validate_data):
        return User.objects.create_user(**validate_data)