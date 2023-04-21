import { useState } from 'react';
import { GoalBtn, ResultWrap, SaveBtn, ScoreWrap } from './ResultItem.styled';
import { Container } from 'components/global/Container';

export const ResultItemBavPens = ({ updateBavovnaPensy }) => {
  const [bavovnaScore, setBavovnaScore] = useState(0);
  const [pensyScore, setPensyScore] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const bavovnaIncrement = () => {
    setBavovnaScore(prevState => prevState + 1);
  };
  const pensyIncrement = () => {
    setPensyScore(prevState => prevState + 1);
  };

  const saveResult = () => {
    setIsSaved(true);
    updateBavovnaPensy(bavovnaScore, pensyScore);
  };

  return (
    <Container>
      <ResultWrap>
        <p>Бавовна</p>
        {!isSaved && (
          <GoalBtn type="button" onClick={bavovnaIncrement}>
            +
          </GoalBtn>
        )}
        <ScoreWrap>
          <span>{bavovnaScore}</span>
          <span>-</span>
          <span>{pensyScore}</span>
        </ScoreWrap>
        {!isSaved && (
          <GoalBtn type="button" onClick={pensyIncrement}>
            +
          </GoalBtn>
        )}
        <p>Пенси</p>
        <SaveBtn disabled={isSaved} type="button" onClick={saveResult}>
          Записати
        </SaveBtn>
      </ResultWrap>
    </Container>
  );
};
