import logo from './luiza4.png';
import { useState } from 'react';
import './App.css';

function App() {

  const[usuario, setUsuario] = useState('')
  const[usuarios, setUsuarios] = useState(['Maria', 'Lucas', 'Jose']);

  const adicionarUsuario = () => {
    if (usuarios.includes(usuario)) {
      alert('Usuario já existe na lista.');
      return;
    }

    setUsuarios([...usuarios, usuario]);
    setUsuario(''); // Limpar campo de entrada.
  }

  return (
    <div className='App'>
    <img src={logo} className ='DIGUE' alt= "Logo"/>      
      <hr/>
      <h2>Adicionar usuário</h2>
      <input 
        type='text'
        placeholder='Digite o nome do usuario'
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <button onClick={adicionarUsuario}>Adicionar</button>
      <hr/>
      <h2>Lista de usuários</h2>
      <ol>{usuarios.map((usuario, index) => (
        <li key={index}>{usuario}</li>
      ))}
      </ol>
    </div>
  );
}
export default App;
