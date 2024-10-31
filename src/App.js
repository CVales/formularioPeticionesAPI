import React, { useState } from 'react';
import "./App.css"

import DatosPersonales from './Components/DatosPersonales';
import InformacionContacto from './Components/InformacionContacto';
import PreferenciasEntrenamiento from './Components/PreferenciasEntrenamiento';
import DatosPago from './Components/DatosPago';
import Perfil from './Components/Perfil';

const App = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false); // Nuevo estado para confirmar el envío
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    tipoEntrenamiento: '',
    objetivos: '',
    disponibilidad: '',
    metodoPago: '',
    infoTarjeta: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleDataChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      direccion: '',
      ciudad: '',
      codigoPostal: '',
      tipoEntrenamiento: '',
      objetivos: '',
      disponibilidad: '',
      metodoPago: '',
      infoTarjeta: '',
    });
    setStep(1); // Regresa al primer paso
    setIsSubmitted(false); // Restablece el estado de envío
  };

  const enviarDatosAPI = async (datos) => {
    try {
      const respuesta = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });
  
      if (respuesta.ok) {
        console.log('Usuario registrado correctamente en MongoDB Atlas');
        setIsSubmitted(true); // Cambia el estado cuando se confirma el envío
        setStep(6); // Mueve al paso de confirmación
      } else {
        console.log('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error en la conexión con el servidor:', error);
    }
  };
  
  return (
    <div className="App">
      <header>
        <h1>Registro en FitLife</h1>
      </header>
      <main>
        {step === 1 && <DatosPersonales nextStep={nextStep} handleDataChange={handleDataChange} formData={formData} />}
        {step === 2 && <InformacionContacto nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} formData={formData} />}
        {step === 3 && <PreferenciasEntrenamiento nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} formData={formData} />}
        {step === 4 && <DatosPago nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} formData={formData} />}
        {step === 5 && <Perfil formData={formData} resetForm={resetForm} enviarDatosAPI={enviarDatosAPI} />}
        {step === 6 && isSubmitted && (
          <div className="confirmation">
            <h2>¡Datos enviados correctamente!</h2>
            <p>Los datos se han mandado a la base de datos exitosamente.</p>
            <button onClick={resetForm}>Volver a iniciar el formulario</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
