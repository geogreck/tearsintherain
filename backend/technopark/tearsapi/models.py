from datetime import date
from django.db import models
from django.contrib.auth import models as auth_models

from .managers import *
# Create your models here.


class Profile(models.Model):
    id = models.OneToOneField(
        auth_models.User, on_delete=models.CASCADE, primary_key=True)
    profile_pic = models.CharField(max_length=255, null=True)
    registration_date = models.DateField(auto_now_add=True)
    raiting = models.IntegerField(default=0)


class Moment(models.Model):
    objects = MomentsManager()
    title = models.CharField(max_length=255)
    description = models.TextField(null=True)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)
    image_src = models.CharField(max_length=255, default='1.png')
    raiting = models.IntegerField(default=0)


class Comment(models.Model):
    objects = CommentsManager()
    text = models.TextField(null=True)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    target = models.ForeignKey(Moment, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)
    raiting = models.IntegerField(default=0)


class Subscription(models.Model):
    objects = SubscriptionsManager()
    author = models.ForeignKey(
        Profile, related_name="author_id", on_delete=models.CASCADE)
    target = models.ForeignKey(
        Profile, related_name="user_id", on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)


class MomentLike(models.Model):
    objects = LikeManager()
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    target = models.ForeignKey(
        Moment, on_delete=models.CASCADE, null=True)
    created_on = models.DateTimeField(auto_now_add=True)


class CommentLike(models.Model):
    objects = LikeManager()
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    target = models.ForeignKey(
        Comment, on_delete=models.CASCADE, null=True)
    created_on = models.DateTimeField(auto_now_add=True)


class Tag(models.Model):
    objects = TagManager()
    title = models.CharField(max_length=255)
    moments = models.ManyToManyField(Moment)
    raiting = models.IntegerField(default=0)
