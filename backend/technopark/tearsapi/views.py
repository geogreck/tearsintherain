from django.shortcuts import render
from django.http import Http404
from tearsapi.models import MomentLike, Profile, Moment, CommentLike
from rest_framework import serializers
from rest_framework import generics
from .pagination import ExtendedResultsSetPagination, StandardResultsSetPagination, TagPagination
from .serializers import *
# Create your views here.


class MomentCRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer


class MomentsList(generics.ListCreateAPIView):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer
    pagination_class = StandardResultsSetPagination


class UserMomentsList(generics.ListAPIView):
    serializer_class = MomentSerializer

    def get_queryset(self):
        user_id = self.kwargs['pk']
        query_set = Moment.objects.user_moments(user_id)
        if query_set.count() > 0:
            return query_set
        raise Http404


class NewMomentsList(generics.ListAPIView):
    serializer_class = MomentSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        return Moment.objects.new_moments()


class TopMomentsList(generics.ListAPIView):
    serializer_class = MomentSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        return Moment.objects.top_moments()


class UserCRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = UserSerializer


class UsersList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = UserSerializer


class CommentCRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommmentsList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    pagination_class = ExtendedResultsSetPagination


class CommentsByMoment(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        moment_id = self.kwargs['pk']
        return Comment.objects.moment_comments(moment_id)


class CommentsByAuthor(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        author_id = self.kwargs['pk']
        return Comment.objects.user_comments(author_id)


class CommentsByTargetAuthor(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        target_id = self.kwargs['pk']
        return Comment.objects.by_target_author(target_id)


class SubscriptionCRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionsSerializer


class SubscriptionList(generics.ListCreateAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionsSerializer
    pagination_class = ExtendedResultsSetPagination


class SubscriptionsByAuthor(generics.ListAPIView):
    queryset = Subscription.objects.all()
    pagination_class = ExtendedResultsSetPagination
    serializer_class = SubscriptionsSerializer

    def get_queryset(self):
        author_id = self.kwargs['pk']
        return Subscription.objects.by_author(author_id)


class SubscriptionsByTarget(generics.ListAPIView):
    queryset = Subscription.objects.all()
    pagination_class = ExtendedResultsSetPagination
    serializer_class = SubscriptionsSerializer

    def get_queryset(self):
        target_id = self.kwargs['pk']
        return Subscription.objects.by_target(target_id)


class MomentLikeCRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = MomentLike.objects.all()
    serializer_class = LikeMomentSerializer


class MomentLikesList(generics.ListCreateAPIView):
    queryset = MomentLike.objects.all()
    serializer_class = LikeMomentSerializer
    pagination_class = ExtendedResultsSetPagination


class MomentLikesByMoment(generics.ListAPIView):
    queryset = MomentLike.objects.all()
    serializer_class = LikeMomentSerializer
    pagination_class = ExtendedResultsSetPagination

    def get_queryset(self):
        moment_id = self.kwargs['pk']
        return MomentLike.objects.by_moment(moment_id)


class MomentLikesByAuthor(generics.ListAPIView):
    queryset = MomentLike.objects.all()
    serializer_class = LikeMomentSerializer
    pagination_class = ExtendedResultsSetPagination

    def get_queryset(self):
        author_id = self.kwargs['pk']
        return MomentLike.objects.by_author(author_id)


class MomentLikesByTargetAuthor(generics.ListAPIView):
    queryset = MomentLike.objects.all()
    serializer_class = LikeMomentSerializer
    pagination_class = ExtendedResultsSetPagination

    def get_queryset(self):
        target_id = self.kwargs['pk']
        return MomentLike.objects.by_target_author(target_id)


class CommentLikeCRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = CommentLike.objects.all()
    serializer_class = CommentMomentSerializer


class CommentLikesList(generics.ListCreateAPIView):
    queryset = CommentLike.objects.all()
    serializer_class = CommentMomentSerializer
    pagination_class = ExtendedResultsSetPagination


class CommentLikesByComment(generics.ListAPIView):
    queryset = CommentLike.objects.all()
    serializer_class = CommentMomentSerializer
    pagination_class = ExtendedResultsSetPagination

    def get_queryset(self):
        moment_id = self.kwargs['pk']
        return CommentLike.objects.by_moment(moment_id)


class CommentLikesByAuthor(generics.ListAPIView):
    queryset = CommentLike.objects.all()
    serializer_class = CommentMomentSerializer
    pagination_class = ExtendedResultsSetPagination

    def get_queryset(self):
        author_id = self.kwargs['pk']
        return CommentLike.objects.by_author(author_id)


class CommentLikesByTargetAuthor(generics.ListAPIView):
    queryset = CommentLike.objects.all()
    serializer_class = CommentMomentSerializer
    pagination_class = ExtendedResultsSetPagination

    def get_queryset(self):
        target_id = self.kwargs['pk']
        return CommentLike.objects.by_target_author(target_id)


class TagCRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    pagination_class = ExtendedResultsSetPagination


class TagsByPopularity(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    pagination_class = TagPagination

    def get_queryset(self):
        return Tag.objects.by_popularity()


class TagsByMoment(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get_queryset(self):
        moment_id = self.kwargs['pk']
        return Tag.objects.by_moment(moment_id)


class MomentsByTag(generics.ListAPIView):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer

    def get_queryset(self):
        tag_id = self.kwargs['pk']
        return Moment.objects.by_tag(tag_id)


class MomentsByTagName(generics.ListAPIView):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer

    def get_queryset(self):
        tag_name = self.kwargs['pk']
        return Moment.objects.by_tag_name(tag_name)
