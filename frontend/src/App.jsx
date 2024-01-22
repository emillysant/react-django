import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [consumoMensal, setConsumoMensal] = useState('');
  const [fornecedores, setFornecedores] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      // console.log(import.meta.env.VITE_API_URL);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
  
        // Verifica se a propriedade 'posts' existe no resultado
        if ('posts' in result && result.posts) {
          const postsResponse = await fetch(result.posts);
          if (!postsResponse.ok) {
            throw new Error('Network response for posts was not ok');
          }
          const postsResult = await postsResponse.json();
          console.log("fornecedores cadastrados: " , postsResult);
          setData(postsResult);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
  
    fetchData();
  }, []);
  


  const handleInputChange = (event) => {
    setConsumoMensal(event.target.value);
  };

  const handleSubmit = (event) => {
    setFornecedores([]);
    event.preventDefault();
    // Aqui você pode usar o valor de consumoMensal para realizar a lógica desejada
    const fornecedoresFiltrados = data.filter((fornecedor) => {
      return consumoMensal > fornecedor.limite_minimo_kwh;
    });
    setFornecedores(fornecedoresFiltrados);
    console.log("consumo de ", consumoMensal, "encontrou o fornecedor(es) :", fornecedoresFiltrados)
  };

  return (
    <>
       <form onSubmit={handleSubmit}>
        <label>
          Consumo Mensal de Energia (kWh):
          <input className='card'
            type="number"
            value={consumoMensal}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Buscar Fornecedores</button>
      </form>


      {/* Exibir fornecedores disponíveis */}
      {fornecedores.length > 0 && (
        <div>
          <h2>Fornecedores Disponíveis:</h2>
          <ul>
            {fornecedores.map((fornecedor, index) => (
                <li key={index} className="fornecedor-item">
                  <strong>Nome:</strong> {fornecedor.nome}<br />
                  <strong>Estado de Origem:</strong> {fornecedor.estado_origem}<br />
                  <strong>Custo por kWh:</strong> {fornecedor.custo_por_kwh}<br />
                  <strong>Limite Mínimo de kWh:</strong> {fornecedor.limite_minimo_kwh}<br />
                  <strong>Número Total de Clientes:</strong> {fornecedor.numero_total_clientes}<br />
                  <strong>Avaliação Média dos Clientes:</strong> {fornecedor.avaliacao_media_clientes}<br />
                </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default App
