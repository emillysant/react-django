from django.test import TestCase
from posts.models import Post


class UsuarioTestCase(TestCase):

    def setUp(self):
        Post.objects.create(
            nome="EmpresaTest",
            logo="null",
            estado_origem="RJ",
            custo_por_kwh=500.00,
            limite_minimo_kwh=3500,
            numero_total_clientes=2,
            avaliacao_media_clientes=4.3,
        )

    def test_post_created(self):
        empresa_test = Post.objects.get(nome="EmpresaTest")
        self.assertEqual(empresa_test.logo, "null")
        self.assertEqual(empresa_test.estado_origem, "RJ")
        self.assertEqual(empresa_test.custo_por_kwh, 500.00)
        self.assertEqual(empresa_test.limite_minimo_kwh, 3500)
        self.assertEqual(empresa_test.numero_total_clientes, 2)
        self.assertEqual(empresa_test.avaliacao_media_clientes, 4.3)
        