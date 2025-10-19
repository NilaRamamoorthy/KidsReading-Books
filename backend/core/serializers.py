from rest_framework import serializers
from .models import SiteLogo

class SiteLogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteLogo
        fields = ['id', 'name', 'image']

from rest_framework import serializers
from .models import PageImage

class PageImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageImage
        fields = ['name', 'image']


from rest_framework import serializers
from .models import UserRoleCard, StepCard

class UserRoleCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRoleCard
        fields = '__all__'

class StepCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = StepCard
        fields = '__all__'

from rest_framework import serializers
from .models import GoldPlanPerk

class GoldPlanPerkSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoldPlanPerk
        fields = '__all__'

from rest_framework import serializers
from .models import FAQ

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'

from rest_framework import serializers
from .models import Review, Brand

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'quote', 'author']

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name', 'logo']

# core/serializers.py
from rest_framework import serializers
from .models import SchoolIntro

class SchoolIntroSerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolIntro
        fields = "__all__"


from rest_framework import serializers
from .models import Book, BookPage

class BookPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookPage
        fields = ['id', 'page_number', 'content_image']

class BookSerializer(serializers.ModelSerializer):
    pages = BookPageSerializer(many=True, read_only=True)

    class Meta:
        model = Book
        fields = ['id', 'title', 'cover_image', 'age_group', 'pages']


from rest_framework import serializers
from .models import VideoContent

class VideoContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoContent
        fields = "__all__"
