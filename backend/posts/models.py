from django.db import models

# Create your models here.

class Post(models.Model):
    nome = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='logos/')  # Certifique-se de ter o Pillow instalado para trabalhar com imagens
    estado_origem = models.CharField(max_length=255)
    custo_por_kwh = models.DecimalField(max_digits=5, decimal_places=2)
    limite_minimo_kwh = models.PositiveIntegerField()
    numero_total_clientes = models.PositiveIntegerField()
    avaliacao_media_clientes = models.FloatField()

    def __str__(self):
        return f"Post: {self.nome}"