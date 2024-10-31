import React from 'react';

const Perfil = ({ formData, resetForm, enviarDatosAPI }) => {

  const handleSubmit = () => {
    enviarDatosAPI(formData); // Envía los datos a la API
    resetForm(); // Reinicia el formulario
  };

  return (
    <div>
      <h2>Perfil Completo</h2>
      <p><strong>Nombre:</strong> {formData.nombre}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Teléfono:</strong> {formData.telefono}</p>
      <p><strong>Dirección:</strong> {formData.direccion}</p>
      <p><strong>Ciudad:</strong> {formData.ciudad}</p>
      <p><strong>Código Postal:</strong> {formData.codigoPostal}</p>
      <p><strong>Tipo de Entrenamiento:</strong> {formData.tipoEntrenamiento}</p>
      <p><strong>Objetivos:</strong> {formData.objetivos}</p>
      <p><strong>Disponibilidad:</strong> {formData.disponibilidad}</p>
      <p><strong>Método de Pago:</strong> {formData.metodoPago}</p>
      <p><strong>Información de la Tarjeta:</strong> {formData.infoTarjeta}</p>

      <button onClick={handleSubmit}>Volver a iniciar el formulario</button>
    </div>
  );
};

export default Perfil;
