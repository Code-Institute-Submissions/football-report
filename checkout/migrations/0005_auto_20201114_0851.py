# Generated by Django 3.1.2 on 2020-11-14 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0004_auto_20201113_1703'),
    ]

    operations = [
        migrations.AddField(
            model_name='package',
            name='original_cart',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='package',
            name='stripe_pid',
            field=models.CharField(default='', max_length=254),
        ),
        migrations.AlterField(
            model_name='package',
            name='price',
            field=models.DecimalField(decimal_places=2, default='', max_digits=10),
        ),
    ]
