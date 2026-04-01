from django.urls import path
from accounts import views as Userviews
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView


urlpatterns = [
    path('register/', Userviews.RegisterView.as_view()),

    #Get this from jwt djangorestframeworks for login 
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    #path to protected view that require token to access
    path('protected-view/',Userviews.ProtectedView.as_view())
]