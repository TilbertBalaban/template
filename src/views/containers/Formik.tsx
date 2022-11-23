import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import { tw, css } from 'twind/css';

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
      <div className={tw`flex`}>
        <Field
          type="email"
          name="email"
          className={tw`border border-gray-300 rounded-md p-1`}
        />
        {touched.email && errors.email && (
          <div
            className={tw(
              css({
                '&::before': { content: '"🙁"' },
              }),
              tw`flex items-center text(red-500 center) font-bold`,
            )}
          >
            {errors.email}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={tw`bg-blue-500 text-white rounded-md p-1 ml-2`}
        >
          Submit
        </button>
      </div>
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
    <h1
      className={tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}
    >
      Formik example
    </h1>
    <MyForm formHeader="Sign up" initialEmail="test@email.com" />
  </div>
);

export { Formik };
