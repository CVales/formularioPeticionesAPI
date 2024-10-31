import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const DatosPago = ({ nextStep, prevStep, handleDataChange, formData }) => {
    const formik = useFormik({
        initialValues: {
            metodoPago: formData.metodoPago || '',
            infoTarjeta: formData.infoTarjeta || '',
        },
        validationSchema: Yup.object({
            metodoPago: Yup.string().required('Seleccione un método de pago'),
            infoTarjeta: Yup.string().required('La información de la tarjeta es obligatoria'),
        }),
        onSubmit: (values) => {
            handleDataChange(values);
            nextStep();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="metodoPago">Método de Pago</label>
                <input
                    type="text"
                    name="metodoPago"
                    id="metodoPago"
                    value={formik.values.metodoPago}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.metodoPago && formik.errors.metodoPago && <p className="error">{formik.errors.metodoPago}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="infoTarjeta">Información de la Tarjeta</label>
                <input
                    type="text"
                    name="infoTarjeta"
                    id="infoTarjeta"
                    value={formik.values.infoTarjeta}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.infoTarjeta && formik.errors.infoTarjeta && <p className="error">{formik.errors.infoTarjeta}</p>}
            </div>

            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="submit">Finalizar Registro</button>
        </form>
    );
};

export default DatosPago;
