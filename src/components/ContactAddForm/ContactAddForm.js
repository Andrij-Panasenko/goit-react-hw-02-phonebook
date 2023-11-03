import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('Required'),
  number: Yup.number().required('Must be filled'),
});

export const SearchForm = ({addContact}) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        
        validationSchema={contactSchema}

        onSubmit={(values, actions) => {
          addContact(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name:
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </label>

          <label>
            Number:
            <Field name="number" type="number" />
            <ErrorMessage name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};