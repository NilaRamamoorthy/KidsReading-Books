from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SiteLogo
from .serializers import SiteLogoSerializer

class SiteLogoView(APIView):
    def get(self, request):
        logo = SiteLogo.objects.first()  # always fetch first logo
        serializer = SiteLogoSerializer(logo)
        return Response(serializer.data)

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import PageImage
from .serializers import PageImageSerializer

class PageImageListView(APIView):
    def get(self, request):
        images = PageImage.objects.all()
        serializer = PageImageSerializer(images, many=True, context={'request': request})
        return Response(serializer.data)



from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserRoleCard, StepCard
from .serializers import UserRoleCardSerializer, StepCardSerializer

class SchoolPageData(APIView):
    def get(self, request):
        roles = UserRoleCard.objects.all()
        steps = StepCard.objects.all().order_by('step_number')

        roles_serializer = UserRoleCardSerializer(roles, many=True, context={'request': request})
        steps_serializer = StepCardSerializer(steps, many=True, context={'request': request})

        return Response({
            "roles": roles_serializer.data,
            "steps": steps_serializer.data
        })

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import GoldPlanPerk
from .serializers import GoldPlanPerkSerializer

class GoldPlanPerksView(APIView):
    def get(self, request):
        perks = GoldPlanPerk.objects.all()
        serializer = GoldPlanPerkSerializer(perks, many=True, context={'request': request})
        return Response(serializer.data)


from rest_framework.views import APIView
from rest_framework.response import Response
from .models import FAQ
from .serializers import FAQSerializer

class FAQListView(APIView):
    def get(self, request):
        faqs = FAQ.objects.all()
        serializer = FAQSerializer(faqs, many=True)
        return Response(serializer.data)

from rest_framework.generics import ListAPIView
from .models import Review, Brand
from .serializers import ReviewSerializer, BrandSerializer

class ReviewListView(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class BrandListView(ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


# core/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SchoolIntro
from .serializers import SchoolIntroSerializer

@api_view(['GET'])
def school_intro(request):
    intro = SchoolIntro.objects.first()
    serializer = SchoolIntroSerializer(intro)
    return Response(serializer.data)


from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer

class BookListView(APIView):
    def get(self, request):
        age_filter = request.GET.get('age')  # user entered age
        group_filter = request.GET.get('group')  # age group filter (0-2,3-5,...)

        books = Book.objects.all()

        if group_filter:
            books = books.filter(age_group=group_filter)
        
        if age_filter:
            try:
                age_filter = int(age_filter)
                # Filter age within the range of age_group
                def age_match(book):
                    start, end = map(int, book.age_group.split('-'))
                    return start <= age_filter <= end
                books = [b for b in books if age_match(b)]
            except:
                pass

        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)


from rest_framework.views import APIView
from rest_framework.response import Response
from .models import VideoContent
from .serializers import VideoContentSerializer

class VideoContentList(APIView):
    def get(self, request):
        videos = VideoContent.objects.all()
        serializer = VideoContentSerializer(videos, many=True)
        return Response(serializer.data)
