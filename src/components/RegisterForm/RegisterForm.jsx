import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { registerUser } from 'redux/auth/operations';
import { Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(registerUser(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Login:
        <input type="text" {...register('login', { required: true })} />
        {errors.login && <span>This field is required</span>}
      </Label>

      <Label>
        Password:
        <input
          type="password"
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === 'required' && (
          <span>This field is required</span>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <span>Password should be at least 6 characters long</span>
        )}
      </Label>

      <button type="submit">Submit</button>
    </Form>
  );
};
