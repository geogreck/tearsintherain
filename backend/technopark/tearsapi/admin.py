from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Profile)
admin.site.register(Moment)
admin.site.register(Comment)
admin.site.register(Subscription)
admin.site.register(MomentLike)
admin.site.register(CommentLike)
admin.site.register(Tag)
