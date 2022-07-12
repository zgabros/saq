import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function FurmularioUsuarios() {
  const db = getFirestore();
  const orderColl = collection(db, "users");
  const navigate = useNavigate();

  return (
    <div>
      <h1>Agregar procedimiento</h1>
      <Formik
        initialValues={{ Nombre: "", Apellido: "" }}
        validate={(values) => {
          let errors = {};
          if (!values.Nombre) {
            errors.Nombre = "Requerido";
          }
          if (!values.Apellido) {
            errors.Apellido = "Requerido";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addDoc(orderColl, values).then(({ id }) => {
              console.log(id);
            });
            setSubmitting(false);
          }, 1000);
          navigate("/");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <input
                type="nombre"
                name="Nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Nombre}
              />
              {errors.Nombre && touched.Nombre && errors.Nombre}
            </div>
            <div>
              <label>Apellido</label>
              <input
                type="apellido"
                name="Apellido"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Apellido}
              />
              {errors.Apellido && touched.Apellido && errors.Apellido}
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando" : "Enviar"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FurmularioUsuarios;
