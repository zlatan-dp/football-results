import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { loginUser } from 'redux/auth/operations';
import { Form, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(loginUser(data));
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
        <input type="password" {...register('password', { required: true })} />
        {errors.password && errors.password.type === 'required' && (
          <span>This field is required</span>
        )}
      </Label>

      <button type="submit">Submit</button>
    </Form>
  );
};
