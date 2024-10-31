const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://valessertage:..contraseñaOcultaPorSeguridad..@contacto.nqmuv.mongodb.net/?retryWrites=true&w=majority&appName=Contacto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(error => console.error('Error al conectar con MongoDB Atlas:', error));

// Esquema y modelo para usuario
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: String,
  direccion: String,
  ciudad: String,
  codigoPostal: String,
  tipoEntrenamiento: String,
  objetivos: String,
  disponibilidad: String,
  metodoPago: String,
  infoTarjeta: String,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Ruta para guardar el usuario
app.post('/api/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ message: 'Usuario guardado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el usuario' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
