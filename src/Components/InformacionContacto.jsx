import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const InformacionContacto = ({ nextStep, prevStep, handleDataChange, formData }) => {
    const formik = useFormik({
        initialValues: {
            direccion: formData.direccion || '',
            ciudad: formData.ciudad || '',
            codigoPostal: formData.codigoPostal || '',
        },
        validationSchema: Yup.object({
            direccion: Yup.string().required('La dirección es obligatoria'),
            ciudad: Yup.string().required('La ciudad es obligatoria'),
            codigoPostal: Yup.string().required('El código postal es obligatorio'),
        }),
        onSubmit: (values) => {
            handleDataChange(values);
            nextStep();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    value={formik.values.direccion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.direccion && formik.errors.direccion && <p className="error">{formik.errors.direccion}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="ciudad">Ciudad</label>
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={formik.values.ciudad}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.ciudad && formik.errors.ciudad && <p className="error">{formik.errors.ciudad}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="codigoPostal">Código Postal</label>
                <input
                    type="text"
                    name="codigoPostal"
                    id="codigoPostal"
                    value={formik.values.codigoPostal}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.codigoPostal && formik.errors.codigoPostal && <p className="error">{formik.errors.codigoPostal}</p>}
            </div>

            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="submit">Siguiente</button>
        </form>
    );
};

export default InformacionContacto;
