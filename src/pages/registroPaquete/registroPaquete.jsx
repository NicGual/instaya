import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './registroPaquete.css'
const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          dimensionPaquete: "",
          ciudadPartida: "",
          ciudadDestino: "",
          remitente: "",
          direccionRecibe: "",
          pesoPaquete: "",
          envioRapido: "",
        }}
        validate={(valores) => {
          let errores = {};

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="dimensionPaquete">dimensionPaquete</label>
              <Field
                type="text"
                id="dimensionPaquete"
                name="dimensionPaquete"
                placeholder="1x1 cm"
              />
              <ErrorMessage
                name="dimensionPaquete"
                component={() => (
                  <div className="error">{errors.dimensionPaquete}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="ciudadPartida">ciudadPartida</label>
              <Field
                type="text"
                id="ciudadPartida"
                name="ciudadPartida"
                placeholder="Bogota"
              />
              <ErrorMessage
                name="ciudadPartida"
                component={() => (
                  <div className="error">{errors.ciudadPartida}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="ciudadDestino">ciudadDestino</label>
              <Field
                type="text"
                id="ciudadDestino"
                name="ciudadDestino"
                placeholder="Tunja"
              />
              <ErrorMessage
                name="ciudadDestino"
                component={() => (
                  <div className="error">{errors.ciudadDestino}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="remitente">remitente</label>
              <Field
                type="text"
                id="remitente"
                name="remitente"
                placeholder="Pancracia Tocarruncho"
              />
              <ErrorMessage
                name="remitente"
                component={() => (
                  <div className="error">{errors.remitente}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="direccionRecibe">direccion de recibo</label>
              <Field
                type="text"
                id="direccionRecibe"
                name="direccionRecibe"
                placeholder="Pancracia Tocarruncho"
              />
              <ErrorMessage
                name="direccionRecibe"
                component={() => (
                  <div className="error">{errors.direccionRecibe}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="pesoPaquete">peso del paquete</label>
              <Field
                type="text"
                id="pesoPaquete"
                name="pesoPaquete"
                placeholder="1kg"
              />
              <ErrorMessage
                name="pesoPaquete"
                component={() => (
                  <div className="error">{errors.pesoPaquete}</div>
                )}
              />
            </div>
            <div>
              <label>
                <Field type="radio" name="envioRapido" value="Si" /> Si
              </label>
              <label>
                <Field type="radio" name="envioRapido" value="No" /> No
              </label>
            </div>

            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
