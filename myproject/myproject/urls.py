
from django.urls import path
from myapp import views  # Adjust based on your app name

urlpatterns = [
    path('', views.home, name='home'),
    path('api/hello-world/', views.hello_world, name='hello_world'),
    path('api/candlestick-data/', views.candlestick_data, name='candlestick_data'),
    path('api/line-chart-data/', views.line_chart_data, name='line_chart_data'),
    path('api/bar-chart-data/', views.bar_chart_data, name='bar_chart_data'),
    path('api/pie-chart-data/', views.pie_chart_data, name='pie_chart_data'),
]
