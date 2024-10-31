import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PreferenciasEntrenamiento = ({ nextStep, prevStep, handleDataChange, formData }) => {
    const formik = useFormik({
        initialValues: {
            tipoEntrenamiento: formData.tipoEntrenamiento || '',
            objetivos: formData.objetivos || '',
            disponibilidad: formData.disponibilidad || '',
        },
        validationSchema: Yup.object({
            tipoEntrenamiento: Yup.string().required('Seleccione un tipo de entrenamiento'),
            objetivos: Yup.string().required('Indique sus objetivos'),
            disponibilidad: Yup.string().required('Seleccione su disponibilidad'),
        }),
        onSubmit: (values) => {
            handleDataChange(values);
            nextStep();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="tipoEntrenamiento">Tipo de Entrenamiento</label>
                <input
                    type="text"
                    name="tipoEntrenamiento"
                    id="tipoEntrenamiento"
                    value={formik.values.tipoEntrenamiento}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.tipoEntrenamiento && formik.errors.tipoEntrenamiento && <p className="error">{formik.errors.tipoEntrenamiento}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="objetivos">Objetivos</label>
                <input
                    type="text"
                    name="objetivos"
                    id="objetivos"
                    value={formik.values.objetivos}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.objetivos && formik.errors.objetivos && <p className="error">{formik.errors.objetivos}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="disponibilidad">Disponibilidad</label>
                <input
                    type="text"
                    name="disponibilidad"
                    id="disponibilidad"
                    value={formik.values.disponibilidad}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.disponibilidad && formik.errors.disponibilidad && <p className="error">{formik.errors.disponibilidad}</p>}
            </div>

            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="submit">Siguiente</button>
        </form>
    );
};

export default PreferenciasEntrenamiento;
