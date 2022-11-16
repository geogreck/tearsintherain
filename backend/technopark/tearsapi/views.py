from django.shortcuts import render
from django.http import Http404
from tearsapi.models import Profile, Moment
from rest_framework import serializers
from rest_framework import generics
from .pagination import StandardResultsSetPagination

# Create your views here.


class MomentSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.id.username', read_only=True)
    class Meta:
        model = Moment
        fields = ['id', 'title', 'description',
                  'author', 'created_on', 'image_src', 'raiting', 'author_name']


class UserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(source='id.email', read_only=True)
    nickname = serializers.CharField(source='id.username',  read_only=True)
    class Meta:
        model = Profile
        fields = ['id', 'email', 'nickname', 'profile_pic', 'registration_date']

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
    