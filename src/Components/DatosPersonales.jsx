import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const DatosPersonales = ({ nextStep, handleDataChange, formData }) => {
  const formik = useFormik({
    initialValues: {
      nombre: formData.nombre || '',
      email: formData.email || '',
      telefono: formData.telefono || '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('El nombre es obligatorio'),
      email: Yup.string().email('Introduce un email válido').required('El email es obligatorio'),
      telefono: Yup.string().required('El teléfono es obligatorio'),
    }),
    onSubmit: (values) => {
      handleDataChange(values); // Actualiza formData en App
      nextStep(); // Pasa al siguiente paso
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.nombre && formik.errors.nombre && <p className="error">{formik.errors.nombre}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="text"
          name="telefono"
          id="telefono"
          value={formik.values.telefono}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.telefono && formik.errors.telefono && <p className="error">{formik.errors.telefono}</p>}
      </div>

      <button type="submit">Siguiente</button>
    </form>
  );
};

export default DatosPersonales;
