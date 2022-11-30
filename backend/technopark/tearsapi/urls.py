from django.urls import path
from .views import *

urlpatterns = [
    path('moments/new/', NewMomentsList.as_view()),
    path('moments/top/', TopMomentsList.as_view()),
    path('moments/<int:pk>/comments', CommentsByMoment.as_view()),
    path('moments/<int:pk>/likes', MomentLikesByMoment.as_view()),
    path('moments/<int:pk>/tags', TagsByMoment.as_view()),
    path('moments/<int:pk>', MomentCRUD.as_view()),
    path('moments/likes/<int:pk>', MomentLikeCRUD.as_view()),
    path('moments/likes/users/<int:pk>', MomentLikesByTargetAuthor.as_view()),
    path('moments/likes/', MomentLikesList.as_view()),
    path('moments/', MomentsList.as_view()),

    path('tags/hot/', TagsByPopularity.as_view()),
    path('tags/<int:pk>/moments', MomentsByTag.as_view()),
    path('tags/<str:pk>/moments', MomentsByTagName.as_view()),
    path('tags/<int:pk>', TagCRUD.as_view()),
    path('tags/', TagList.as_view()),

    path('comments/<int:pk>/likes', CommentLikesByComment.as_view()),
    path('comments/<int:pk>', CommentCRUD.as_view()),
    path('comments/likes/<int:pk>', CommentLikeCRUD.as_view()),
    path('comments/likes/users/<int:pk>', CommentLikesByTargetAuthor.as_view()),
    path('comments/users/<int:pk>', CommentsByTargetAuthor.as_view()),
    path('comments/likes/', CommentLikesList.as_view()),
    path('comments/', CommmentsList.as_view()),

    path('subscriptions/<int:pk>', SubscriptionCRUD.as_view()),
    path('subscriptions/', SubscriptionList.as_view()),

    path('users/<int:pk>/moments', UserMomentsList.as_view()),
    path('users/<int:pk>/comments', CommentsByAuthor.as_view()),
    path('users/<int:pk>/followers', SubscriptionsByTarget.as_view()),
    path('users/<int:pk>/subscriptions', SubscriptionsByAuthor.as_view()),
    path('users/<int:pk>/likes/comments', CommentLikesByAuthor.as_view()),
    path('users/<int:pk>/likes/moments', MomentLikesByAuthor.as_view()),

    path('users/<int:pk>', UserCRUD.as_view()),
    path('users/', UsersList.as_view())
]
