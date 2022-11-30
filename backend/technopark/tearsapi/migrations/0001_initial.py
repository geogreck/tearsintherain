# Generated by Django 4.1.2 on 2022-11-29 23:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(null=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('raiting', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Moment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(null=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('image_src', models.CharField(default='1.png', max_length=255)),
                ('raiting', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('profile_pic', models.CharField(max_length=255, null=True)),
                ('registration_date', models.DateField(auto_now_add=True)),
                ('raiting', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('moments', models.ManyToManyField(to='tearsapi.moment')),
            ],
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='author_id', to='tearsapi.profile')),
                ('target', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_id', to='tearsapi.profile')),
            ],
        ),
        migrations.CreateModel(
            name='MomentLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tearsapi.profile')),
                ('target', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tearsapi.moment')),
            ],
        ),
        migrations.AddField(
            model_name='moment',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tearsapi.profile'),
        ),
        migrations.CreateModel(
            name='CommentLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tearsapi.profile')),
                ('target', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tearsapi.comment')),
            ],
        ),
        migrations.AddField(
            model_name='comment',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tearsapi.profile'),
        ),
        migrations.AddField(
            model_name='comment',
            name='target',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tearsapi.moment'),
        ),
    ]
