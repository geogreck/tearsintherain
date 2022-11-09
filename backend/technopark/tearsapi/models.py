from datetime import date
from django.db import models
from django.contrib.auth import models as auth_models
# Create your models here.


class Profile(models.Model):
    id = models.OneToOneField(auth_models.User, unique=True, on_delete=models.CASCADE, primary_key=True)
    profile_pic = models.CharField(max_length=255, null=True)
    registration_date = models.DateField(auto_now_add=True)
    raiting = models.IntegerField(default=0)


class MomentsManager(models.Manager):
    def user_moments(self, pk):
        if pk is not None:
            return super().get_queryset().filter(author=pk)
        return None

    def new_moments(self):
        return super().get_queryset().order_by('-created_on')


class Moment(models.Model):
    objects = MomentsManager()
    title = models.CharField(max_length=255)
    description = models.TextField()
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)
    image_src = models.CharField(max_length=255, default='1.png')


class Comment(models.Model):
    text = models.TextField()
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    created_on = models.DateTimeField()


class Subscription(models.Model):
    author = models.ForeignKey(
        Profile, related_name="author_id", on_delete=models.CASCADE)
    target = models.ForeignKey(
        Profile, related_name="user_id", on_delete=models.CASCADE)
    created_on = models.DateTimeField()


class Like(models.Model):
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    target = models.ForeignKey(Comment, on_delete=models.CASCADE, null=True)
    target = models.ForeignKey(Moment, on_delete=models.CASCADE, null=True)
    created_on = models.DateTimeField()


class Tag(models.Model):
    title = models.CharField(max_length=255)
