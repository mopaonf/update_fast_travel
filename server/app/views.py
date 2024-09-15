from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *



@api_view(['GET', 'POST'])
def succursale_list(request):
    if request.method == 'GET':
        succursales = Succursale.objects.all()
        serializer = SuccursaleSerializer(succursales, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SuccursaleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def succursale_detail(request, pk):
    try:
        succursale = Succursale.objects.get(pk=pk)
    except Succursale.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SuccursaleSerializer(succursale)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = SuccursaleSerializer(succursale, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        succursale.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def client_list(request):
    if request.method == 'GET':
        clients = Client.objects.all()
        serializer = ClientSerializer(clients, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def client_detail(request, pk):
    try:
        client = Client.objects.get(pk=pk)
    except Client.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ClientSerializer(client)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ClientSerializer(client, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'POST'])
def assurance_list(request):
    if request.method == 'GET':
        assurances = Assurance.objects.all()
        serializer = AssuranceSerializer(assurances, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AssuranceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def assurance_detail(request, pk):
    try:
        assurance = Assurance.objects.get(pk=pk)
    except Assurance.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AssuranceSerializer(assurance)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = AssuranceSerializer(assurance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        assurance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def dash_api(request):
    data = {}
    data['ass'] = Assurance.objects.count()
    data['clients'] = Client.objects.count()
    data['succ'] = Succursale.objects.count()
    
    return Response(data)