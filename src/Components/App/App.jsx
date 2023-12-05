import React, {useState } from 'react';
import './App.css';
import Appbar from '../Appbar/Appbar';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import PrimaryInput from '../PrimaryInput/PrimaryInput';
import PrimaryLabel from '../PrimaryLabel/PrimaryLabel'
import { PostNumerosPrimos } from '../../Services/axios';

function App() {
  const [numeroInicial, setNumeroInicial] = useState('');
  const [cantidadNumerosPrimos, setCantidadNumerosPrimos] = useState('');
  const [usuario, setUsuario] = useState('');
  const [resultado, setResultado] = useState('');

  const handleConsultarPrimos = async () => {
    const request = {
      "numeroInicial": numeroInicial,
      "cantidadPrimos": cantidadNumerosPrimos,
      "usuario": usuario
    };
    try {
      const data = await PostNumerosPrimos(request);
      setResultado(data);
    } catch (error) {
      console.log("Error al obtener los primos:", error);
    }
  }

  const handleNumeroInicialChange = (event) => {
    setNumeroInicial(event.target.value);
  };

  const handleCantidadPrimosChange = (event) => {
    setCantidadNumerosPrimos(event.target.value);
  };

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  return (
    <div>
      <Appbar />
      <div className='divCenter'>
        <PrimaryInput 
          text="Numero Inicial" 
          type="number" 
          value={numeroInicial}
          onChange={handleNumeroInicialChange}
          />
        <PrimaryInput 
          text="Cantidad Numeros Primos" 
          type="number" 
          value={cantidadNumerosPrimos}
          onChange={handleCantidadPrimosChange}
          />
        <PrimaryInput 
          text="Usuario"
          value={usuario}
          onChange={handleUsuarioChange}
          />
        <PrimaryButton
          text="Ver primos"
          onClick={handleConsultarPrimos}
           />
        <PrimaryLabel 
          text={`RESULTADO: ${resultado}`}/>
      </div>
    </div>
  );
}

export default App;
