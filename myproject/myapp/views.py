from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from datetime import datetime  # Import datetime module
import time  # Import time module

def home(request):
    return HttpResponse("Welcome to the Django API backend.")

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello, world!"})

@api_view(['GET'])
def candlestick_data(request):
    # Example data
    raw_data = [
        {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
        {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
        # Add more data as needed
    ]
    
    # Convert date strings to Unix timestamp
    def to_unix_timestamp(date_str):
        dt = datetime.strptime(date_str, '%Y-%m-%d')
        return int(time.mktime(dt.timetuple()) * 1000)

    data = {
        "data": [
            {
                "x": to_unix_timestamp(item["x"]),
                "open": item["open"],
                "high": item["high"],
                "low": item["low"],
                "close": item["close"]
            }
            for item in raw_data
        ]
    }
    
    return Response(data)

@api_view(['GET'])
def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    return Response(data)

@api_view(['GET'])
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return Response(data)

@api_view(['GET'])
def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100],
    }
    return Response(data)
