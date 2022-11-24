from datetime import date
from django.db import models
from django.contrib.auth import models as auth_models
# Create your models here.


class Profile(models.Model):
    id = models.OneToOneField(auth_models.User, on_delete=models.CASCADE, primary_key=True)
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

    def top_moments(self):
        return super().get_queryset().order_by('-raiting', 'id')


class Moment(models.Model):
    objects = MomentsManager()
    title = models.CharField(max_length=255)
    description = models.TextField()
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)
    image_src = models.CharField(max_length=255, default='1.png')
    raiting = models.IntegerField(default=0)


class Comment(models.Model):
    text = models.TextField()
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    target = models.ForeignKey(Moment, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)


class Subscription(models.Model):
    author = models.ForeignKey(
        Profile, related_name="author_id", on_delete=models.CASCADE)
    target = models.ForeignKey(
        Profile, related_name="user_id", on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)


class Like(models.Model):
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    target_comment = models.ForeignKey(Comment, on_delete=models.CASCADE, null=True)
    target_moment = models.ForeignKey(Moment, on_delete=models.CASCADE, null=True)
    created_on = models.DateTimeField(auto_now_add=True)


class Tag(models.Model):
    title = models.CharField(max_length=255)
    moments = models.ManyToManyField(Moment)
