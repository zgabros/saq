import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function FormularioProcedimientos() {
  const db = getFirestore();
  const orderColl = collection(db, "procedimientos");
  const navigate = useNavigate();

  return (
    <div>
      <h1>Agregar procedimiento</h1>
      <Formik
        initialValues={{ Nombre: "", Institucion: "" }}
        validate={(values) => {
          let errors = {};
          if (!values.Nombre) {
            errors.Nombre = "Requerido";
          }
          if (!values.Institucion) {
            errors.Institucion = "Requerido";
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
              <label>Intitucion</label>
              <input
                type="institucion"
                name="Institucion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Institucion}
              />
              {errors.Institucion && touched.Institucion && errors.Institucion}
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

export default FormularioProcedimientos;
