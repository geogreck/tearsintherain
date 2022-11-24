from django.core.management.base import BaseCommand
from tearsapi.models import *
from django.contrib.auth import models as auth_models
from django.contrib.auth.hashers import make_password

import random
import string


class Command(BaseCommand):
    help = 'The Zen of Python'

    def handle(self, *args, **options):
        fill_db(options['ratio'][0])

    def add_arguments(self, parser):
        parser.add_argument(
            'ratio', type=int, nargs='+'
        )


def fill_db(ratio: int):
    users = []
    for i in range(0, ratio):
        users.append(auth_models.User(username=randomword(15),
                                      password=make_password(randomword(8)), email=randomword(15) + "@ya.ru"))
    auth_models.User.objects.bulk_create(users)
    user_id = auth_models.User.objects.count() - ratio + 1

    profiles = []
    for i in range(0, ratio):
        profiles.append(Profile(id_id=user_id + i, profile_pic="logo.png"))
    Profile.objects.bulk_create(profiles)

    moments = []
    for i in range(0, ratio * 10):
        moments.append(Moment(title="moment " + str(i), description="I really don't want to randomize it", author_id=random.randint(user_id, user_id + ratio - 1),
                              image_src=str((i / 10 + 1)) + '.png', raiting=random.randint(-100, 100)))
    Moment.objects.bulk_create(moments)
    moments_id = Moment.objects.count() - ratio * 10 + 1

    comments = []
    for i in range(0, ratio * 100):
        comments.append(Comment(text=randomword(20), author_id=random.randint(user_id, user_id + ratio - 1),
                                target_id=random.randint(moments_id, moments_id + ratio * 10 - 1)))
    comments = Comment.objects.bulk_create(comments)
    comment_id = Comment.objects.count() - ratio * 100 + 1

    subs = []
    for i in range(0, ratio * 10):
        subs.append(Subscription(author_id=i / 100 + 1, target_id=random.randint(user_id, user_id + ratio - 1)))
    Subscription.objects.bulk_create(subs)

    tags = []
    for i in range(0, ratio):
        tags.append(Tag(title=randomword(10)))
    Tag.objects.bulk_create(tags)

    likes = []
    for i in range(0, ratio * 200):
        target_comment = None
        target_moment = None
        if random.randint(1, 2) == 2:
            target_moment = random.randint(
                moments_id, moments_id + ratio * 10 - 1)
        else:
            target_comment = random.randint(
                comment_id, comment_id + ratio * 100 - 1)
        likes.append(Like(author_id=random.randint(user_id, user_id + ratio - 1),
                     target_comment_id=target_comment, target_moment_id=target_moment))
    Like.objects.bulk_create(likes)


def randomword(length):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(length))
