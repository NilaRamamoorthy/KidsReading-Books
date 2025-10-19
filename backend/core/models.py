from django.db import models

class SiteLogo(models.Model):
    name = models.CharField(max_length=100, default="Main Logo")
    image = models.ImageField(upload_to='logos/')
    
    def __str__(self):
        return self.name

from django.db import models

class PageImage(models.Model):
    name = models.CharField(max_length=100, unique=True)  # e.g. "section1"
    image = models.ImageField(upload_to='page_images/')   # or 'images/' if you prefer

    def __str__(self):
        return self.name

from django.db import models

# Section 1: User Roles (Parent, Teacher, Admin)
class UserRoleCard(models.Model):
    title = models.CharField(max_length=100)  # e.g. "I’m a parent/guardian"
    description = models.TextField()
    button_text = models.CharField(max_length=50)
    image = models.ImageField(upload_to='user_roles/')
    button_link = models.URLField(blank=True)

    def __str__(self):
        return self.title

# Section 2: Steps (Step 1, Step 2, Step 3)
class StepCard(models.Model):
    step_number = models.PositiveSmallIntegerField()  # e.g. 1, 2, 3
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='steps/')

    def __str__(self):
        return f"Step {self.step_number}: {self.title}"

from django.db import models

class GoldPlanPerk(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='gold_perks/')

    def __str__(self):
        return self.title

class FAQ(models.Model):
    question = models.TextField()
    answer = models.TextField()

    def __str__(self):
        return self.question

from django.db import models

class Review(models.Model):
    quote = models.TextField()
    author = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.author} - {self.quote[:30]}..."

class Brand(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='brands/')  # adjust MEDIA settings accordingly

    def __str__(self):
        return self.name


# core/models.py
from django.db import models

class SchoolIntro(models.Model):
    title = models.CharField(max_length=255, default="Introducing the Guest Reader Program")
    description = models.TextField(blank=True, null=True)
    video = models.FileField(upload_to="school_videos/", blank=True, null=True)
    button_text = models.CharField(max_length=50, default="Learn More")
    button_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title
    

from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    cover_image = models.ImageField(upload_to='books/covers/')
    age_group = models.CharField(
        max_length=10,
        choices=[
            ('0-2', '0-2'),
            ('3-5', '3-5'),
            ('5-6', '5-6'),
            ('6-8', '6-8')
        ]
    )

class BookPage(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='pages')
    page_number = models.IntegerField()
    content_image = models.ImageField(upload_to='books/pages/')


from django.db import models

class VideoContent(models.Model):
    name = models.CharField(max_length=255)
    founder = models.CharField(max_length=255)
    distance = models.IntegerField(default=0)
    video = models.FileField(upload_to="videos/")
    cover_image = models.ImageField(upload_to="videos/covers/")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
