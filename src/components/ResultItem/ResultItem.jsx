import { useState } from 'react';
import { GoalBtn, ResultWrap, SaveBtn, ScoreWrap } from './ResultItem.styled';
import { Container } from 'components/global/Container';

export const ResultItem = () => {
  const [bavovnaScore, setBavovnaScore] = useState(0);
  const [kabansScore, setKabansScore] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const bavovnaIncrement = () => {
    setBavovnaScore(prevState => prevState + 1);
  };
  const kabansIncrement = () => {
    setKabansScore(prevState => prevState + 1);
  };

  const saveResult = () => {
    setIsSaved(true);
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
          <span>{kabansScore}</span>
        </ScoreWrap>
        {!isSaved && (
          <GoalBtn type="button" onClick={kabansIncrement}>
            +
          </GoalBtn>
        )}
        <p>Кабани</p>
        <SaveBtn disabled={isSaved} type="button" onClick={saveResult}>
          Записати
        </SaveBtn>
      </ResultWrap>
    </Container>
  );
};
