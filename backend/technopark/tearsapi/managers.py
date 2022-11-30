from django.db import models


class MomentsManager(models.Manager):
    def user_moments(self, pk):
        if pk is not None:
            return super().get_queryset().filter(author=pk)
        return None

    def new_moments(self):
        return super().get_queryset().order_by('-created_on')

    def top_moments(self):
        return super().get_queryset().order_by('-raiting', 'id')

    def by_tag(self, tag):
        return super().get_queryset().filter(tag=tag)

    def by_tag_name(self, tag):
        return super().get_queryset().filter(tag__title=tag)


class CommentsManager(models.Manager):
    def moment_comments(self, pk):
        if pk is not None:
            return super().get_queryset().filter(target=pk)
        return None

    def user_comments(self, pk):
        if pk is not None:
            return super().get_queryset().filter(author=pk)
        return None

    def by_target_author(self, pk):
        if pk is not None:
            return super().get_queryset().filter(target__author=pk)
        return None


class SubscriptionsManager(models.Manager):
    def by_author(self, pk):
        if pk is not None:
            return super().get_queryset().filter(author=pk)
        return None

    def by_target(self, pk):
        if pk is not None:
            return super().get_queryset().filter(target=pk)
        return None


class LikeManager(models.Manager):
    def by_moment(self, pk):
        if pk is not None:
            return super().get_queryset().filter(target=pk)
        return None

    def by_comment(self, pk):
        if pk is not None:
            return super().get_queryset().filter(target=pk)
        return None

    def by_author(self, pk):
        if pk is not None:
            return super().get_queryset().filter(author=pk)
        return None
    
    def by_target_author(self, pk):
        if pk is not None:
            return super().get_queryset().filter(target__author=pk)
        return None


class TagManager(models.Manager):
    def by_popularity(self):
        return super().get_queryset().order_by('-raiting')

    def by_moment(self, pk):
        return super().get_queryset().filter(moments__in=[pk])
