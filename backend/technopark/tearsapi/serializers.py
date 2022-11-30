
from rest_framework import serializers

from .models import Comment, Moment, Profile, Subscription, MomentLike, Tag


class MomentSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(
        source='author.id.username', read_only=True)

    class Meta:
        model = Moment
        fields = ['id', 'title', 'description',
                  'author', 'created_on', 'image_src', 'raiting', 'author_name']


class UserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(source='id.email', read_only=True)
    nickname = serializers.CharField(source='id.username',  read_only=True)

    class Meta:
        model = Profile
        fields = ['id', 'email', 'nickname',
                  'profile_pic', 'registration_date']


class CommentSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(
        source='author.id.username', read_only=True)
    target_name = serializers.CharField(source='target.title', read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'text', 'author', 'author_name',
                  'target', 'target_name', 'created_on', 'raiting']

class SubscriptionsSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(
        source='author.id.username', read_only=True)
    target_name = serializers.CharField(source='target.id.username', read_only=True)

    class Meta:
        model = Subscription
        fields = ['id', 'author', 'author_name', 'target', 'target_name', 'created_on']

class LikeMomentSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(
        source='author.id.username', read_only=True)
    target_name = serializers.CharField(source='target.title', read_only=True)

    class Meta:
        model = MomentLike
        fields = ['id', 'author', 'author_name',
                  'target', 'target_name', 'created_on']

class CommentMomentSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(
        source='author.id.username', read_only=True)
    target_name = serializers.CharField(source='target.text', read_only=True)

    class Meta:
        model = MomentLike
        fields = ['id', 'author', 'author_name',
                  'target', 'target_name', 'created_on']


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'title', 'raiting', 'moments']


