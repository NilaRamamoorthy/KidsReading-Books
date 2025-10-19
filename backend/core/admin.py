from django.contrib import admin
from .models import SiteLogo

@admin.register(SiteLogo)
class SiteLogoAdmin(admin.ModelAdmin):
    list_display = ("name", "preview")
    readonly_fields = ("preview",)

    def preview(self, obj):
        if obj.image:
            return f'<img src="{obj.image.url}" width="100" style="border-radius:5px;"/>'
        return "No Image"
    preview.allow_tags = True
    preview.short_description = "Logo Preview"


# admin.py

from django.contrib import admin
from .models import PageImage  # or HomePageSection

@admin.register(PageImage)
class PageImageAdmin(admin.ModelAdmin):
    list_display = ('name', 'image')  # Optional: customize admin display


from django.contrib import admin
from .models import UserRoleCard, StepCard

@admin.register(UserRoleCard)
class UserRoleCardAdmin(admin.ModelAdmin):
    list_display = ('title', 'button_text')

@admin.register(StepCard)
class StepCardAdmin(admin.ModelAdmin):
    list_display = ('step_number', 'title')

from django.contrib import admin
from .models import GoldPlanPerk

@admin.register(GoldPlanPerk)
class GoldPlanPerkAdmin(admin.ModelAdmin):
    list_display = ('title',)


from django.contrib import admin
from .models import Review, Brand

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('author', 'short_quote')
    search_fields = ('author', 'quote')

    def short_quote(self, obj):
        return (obj.quote[:75] + "...") if len(obj.quote) > 75 else obj.quote
    short_quote.short_description = "Quote Preview"


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'logo_preview')
    search_fields = ('name',)

    def logo_preview(self, obj):
        if obj.logo:
            return f'<img src="{obj.logo.url}" width="200" height="300" style="object-fit: contain;" />'
        return "No image"
    logo_preview.short_description = "Logo"
    logo_preview.allow_tags = True


# core/admin.py
from django.contrib import admin
from .models import SchoolIntro

admin.site.register(SchoolIntro)


from django.contrib import admin
from .models import Book, BookPage

# Inline for BookPage so you can edit pages inside Book
class BookPageInline(admin.TabularInline):
    model = BookPage
    extra = 1  # number of blank pages to show
    fields = ('page_number', 'content_image')

# Book admin with inline pages
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'age_group')
    search_fields = ('title',)
    list_filter = ('age_group',)
    inlines = [BookPageInline]

# Optional: register BookPage separately if needed
@admin.register(BookPage)
class BookPageAdmin(admin.ModelAdmin):
    list_display = ('book', 'page_number')
    list_filter = ('book',)

from django.contrib import admin
from .models import VideoContent

@admin.register(VideoContent)
class VideoContentAdmin(admin.ModelAdmin):
    list_display = ('name', 'founder', 'distance', 'created_at')
    list_filter = ('created_at', 'founder')
    search_fields = ('name', 'founder')
    readonly_fields = ('created_at',)
    ordering = ('-created_at',)
