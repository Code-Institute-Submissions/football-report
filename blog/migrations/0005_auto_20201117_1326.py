# Generated by Django 3.1.2 on 2020-11-17 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20201117_1317'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='article_image',
            field=models.ImageField(default='inthenet.jpg', upload_to='article_pics'),
        ),
    ]
