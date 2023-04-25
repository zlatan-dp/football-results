import { useForm } from 'react-hook-form';

export const GoalsForm = ({ team, submit, increment, close }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
    submit(data);
    increment();
    close();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div role="group" aria-label="Select a value">
        <p>Гол забив:</p>
        {team.map(player => (
          <label>
            <input type="radio" value={player} {...register('goal')} />
            {player}
          </label>
        ))}
        <p>Пас віддав:</p>
        {team.map(player => (
          <label>
            <input type="radio" value={player} {...register('pass')} />
            {player}
          </label>
        ))}
      </div>
      <button type="submit">Записати</button>
    </form>
  );
};
