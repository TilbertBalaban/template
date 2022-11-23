import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// Notice: component rerenders when we type in input.
// TODO: test React Hook Form

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .min(6, 'Too Short!')
    .required('Required'),
});

interface FormValues {
  email: string;
}

interface CustomProps {
  formHeader: string;
}

const InnerForm = ({
  touched,
  errors,
  isSubmitting,
  formHeader,
}: CustomProps & FormikProps<FormValues>) => {
  return (
    <Form>
      <h2>{formHeader}</h2>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

interface MyFormProps {
  initialEmail?: string;
}

const MyForm = withFormik<MyFormProps & CustomProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    // add custom validation here (cannot I use Yup?)
    console.log(values);
    return errors;
  },
  validationSchema: ValidationSchema,

  handleSubmit: (values) => {
    console.log('submitting', values);
    return values;
  },
})(InnerForm);

const Formik = () => (
  <div>
    <h1>Formik example</h1>
    <MyForm formHeader="Sign up" initialEmail="test@email.com" />
  </div>
);

export { Formik };
