import { useState } from 'react';
import { Btn, ResultWrap, ScoreWrap, GoalsList } from './ResultItem.styled';
import { Modal } from 'components/Modal/Modal';
import { GoalsForm } from 'components/Form/Form';

export const ResultItem = ({
  updateFunction,
  teamOne,
  teamTwo,
  teamOneSquad,
  teamTwoSquad,
}) => {
  const [showOneModal, setShowOneModal] = useState(false);
  const [showTwoModal, setShowTwoModal] = useState(false);

  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const [teamOneGoals, setTeamOneGoals] = useState([]);
  const [teamTwoGoals, setTeamTwoGoals] = useState([]);

  const updateTeamOneGoals = value => {
    setTeamOneGoals([...teamOneGoals, value]);
  };

  const updateTeamTwoGoals = value => {
    setTeamTwoGoals([...teamTwoGoals, value]);
  };

  const teamOneIncrement = () => {
    setTeamOneScore(prevState => prevState + 1);
  };
  const teamTwoIncrement = () => {
    setTeamTwoScore(prevState => prevState + 1);
  };

  const saveResult = () => {
    setIsSaved(true);
    updateFunction(teamOneScore, teamTwoScore);
  };

  const toggleOneModal = () => {
    setShowOneModal(!showOneModal);
  };

  const toggleTwoModal = () => {
    setShowTwoModal(!showTwoModal);
  };

  return (
    <>
      <ResultWrap>
        <GoalsList>
          {teamOneGoals.map(player => (
            <li>
              <span style={{ marginRight: 8 }}>{player.pass}</span>
              <span>{player.goal}</span>
            </li>
          ))}
        </GoalsList>
        <p>{teamOne}</p>
        {!isSaved && (
          <Btn type="button" onClick={() => setShowOneModal(true)}>
            +
          </Btn>
        )}
        <ScoreWrap>
          <span>{teamOneScore}</span>
          <span>-</span>
          <span>{teamTwoScore}</span>
        </ScoreWrap>
        {!isSaved && (
          <Btn type="button" onClick={() => setShowTwoModal(true)}>
            +
          </Btn>
        )}
        <p>{teamTwo}</p>
        <GoalsList>
          {teamTwoGoals.map(player => (
            <li>
              <span style={{ marginRight: 8 }}>{player.goal}</span>
              <span>{player.pass}</span>
            </li>
          ))}
        </GoalsList>
        <Btn disabled={isSaved} type="button" onClick={saveResult}>
          Записати
        </Btn>
      </ResultWrap>

      {showOneModal && (
        <Modal onClose={toggleOneModal}>
          <Btn type="button" onClick={toggleOneModal}>
            Х
          </Btn>
          <GoalsForm
            team={teamOneSquad}
            submit={updateTeamOneGoals}
            increment={teamOneIncrement}
            close={toggleOneModal}
          />
        </Modal>
      )}

      {showTwoModal && (
        <Modal onClose={toggleTwoModal}>
          <Btn type="button" onClick={toggleTwoModal}>
            Х
          </Btn>
          <GoalsForm
            team={teamTwoSquad}
            submit={updateTeamTwoGoals}
            increment={teamTwoIncrement}
            close={toggleTwoModal}
          />
        </Modal>
      )}
    </>
  );
};

//    <Formik>
//   <Form>
//     {teamOneSquad.map(player => (
//       <label>
//         <Field type="radio" name="picked" value={player} />
//         {player}
//       </label>
//     ))}
//     <Btn type="submit">Записати</Btn>
//   </Form>
// </Formik>;
//
