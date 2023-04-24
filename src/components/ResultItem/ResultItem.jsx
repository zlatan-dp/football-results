import { useState } from 'react';
import { GoalBtn, ResultWrap, SaveBtn, ScoreWrap } from './ResultItem.styled';

export const ResultItem = ({ updateFunction, teamOne, teamTwo }) => {
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

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

  return (
    <ResultWrap>
      <p>{teamOne}</p>
      {!isSaved && (
        <GoalBtn type="button" onClick={teamOneIncrement}>
          +
        </GoalBtn>
      )}
      <ScoreWrap>
        <span>{teamOneScore}</span>
        <span>-</span>
        <span>{teamTwoScore}</span>
      </ScoreWrap>
      {!isSaved && (
        <GoalBtn type="button" onClick={teamTwoIncrement}>
          +
        </GoalBtn>
      )}
      <p>{teamTwo}</p>
      <SaveBtn disabled={isSaved} type="button" onClick={saveResult}>
        Записати
      </SaveBtn>
    </ResultWrap>
  );
};
