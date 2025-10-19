from django.urls import path
from .views import (
    SiteLogoView, PageImageListView, SchoolPageData, VideoContentList,
    GoldPlanPerksView, FAQListView, ReviewListView, BrandListView, BookListView
)
from . import views

urlpatterns = [
    path("api/logo/", SiteLogoView.as_view(), name="site-logo"),
    path('api/page-images/', PageImageListView.as_view(), name='page-images'),
    path('api/school-page/', SchoolPageData.as_view(), name='school-page-data'),
    path('api/gold-perks/', GoldPlanPerksView.as_view(), name='gold-plan-perks'),
    path('api/faqs/', FAQListView.as_view(), name='faq-list'),
    path('api/reviews/', ReviewListView.as_view(), name='reviews'),
    path('api/brands/', BrandListView.as_view(), name='brands'),
    path('api/books/', BookListView.as_view(), name='book-list'),
    path("api/videos/", VideoContentList.as_view(), name="video-list"),
    
    # ✅ New route for school intro
    path('api/school-intro/', views.school_intro, name='school-intro'),

]
