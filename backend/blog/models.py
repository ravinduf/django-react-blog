from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

# Create your models here.
class Categories(models.TextChoices):
    WORLD = 'world'
    ENVIRONMENT = 'environment'
    TECHNOLOGY = 'technology'
    DESIGN = 'design'
    CULTURE = 'culture'
    BUSINESS = 'business'
    POLITICS = 'politics'
    OPINION = 'opinion'
    SCIENCE = 'science'
    STYLE = 'style'
    TRAVEL = 'travel'


class BlogPost(models.Model):
    title = models.CharField(max_length = 50)
    slug = models.SlugField()
    category = models.CharField(max_length = 50, choices = Categories.choices, default = Categories.WORLD)
    thumbnail = models.ImageField(uploaded_to='photos')
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        slug = original_slug
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count())

        count = 1
        
        while(BlogPost.objects.all().filter(slug__iexact=slug).count()):
            slug = original_slug + '-' + str(count)
            count += 1
        
        self.slug = slug

        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass

        # super(BlogPost, self).save(*args, **kwargs)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    
    