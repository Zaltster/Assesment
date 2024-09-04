
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from myapp import views  # Update import to your app name


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('api/hello/', views.hello_world, name='hello_world'),
    path('api/candlestick-data/', views.candlestick_data, name='candlestick_data'),
    path('api/line-chart-data/', views.line_chart_data, name='line_chart_data'),
    path('api/bar-chart-data/', views.bar_chart_data, name='bar_chart_data'),
    path('api/pie-chart-data/', views.pie_chart_data, name='pie_chart_data'),
    
    # JWT Token endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

