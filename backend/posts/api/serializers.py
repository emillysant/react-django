from rest_framework.serializers import ModelSerializer
from ..models import Post

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ('nome', 
                  'logo', 
                  'estado_origem', 
                  'custo_por_kwh', 
                  'limite_minimo_kwh', 
                  'numero_total_clientes', 
                  'avaliacao_media_clientes')