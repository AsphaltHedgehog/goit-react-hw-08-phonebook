import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import * as yup from 'yup';

import { editContact } from 'redux/operation';

import PropTypes from 'prop-types';


const validationSchema = yup.object().shape({
  name: yup.string().min(3, 'Name must be at least 3 characters').max(20, 'Name must be less then twenty characters').required('Name is required'),
  number: yup.string().min(6, 'Number must contain at least six symbols').max(12, 'Number must be less then twelve symbols').required('Number is required')
});


const EditForm = ({ data, onClose }) => {
  const dispatch = useDispatch();
  
  const handleSubmit = (values) => {
    console.log(values);
    console.log(data);
    const { id } = data;
    const { name, number } = values;

    if (data.name === values.name || data.number === values.number) {
      console.log(1);
      return
    };

    dispatch(editContact({ id, name, number }));
    
    onClose();
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Имя</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="p" />
        </div>

        <div>
          <label>Номер телефона</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="p" />
        </div>

        <button type="submit">Сохранить</button>
      </Form>
    </Formik>
  );
};

EditForm.propTypes = {
  data: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditForm;