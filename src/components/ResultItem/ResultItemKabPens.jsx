import { useState } from 'react';
import { GoalBtn, ResultWrap, SaveBtn, ScoreWrap } from './ResultItem.styled';
import { Container } from 'components/global/Container';

export const ResultItemKabPens = ({ updateKabansPensy }) => {
  const [kabansScore, setKabansScore] = useState(0);
  const [pensyScore, setPensyScore] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const kabansIncrement = () => {
    setKabansScore(prevState => prevState + 1);
  };
  const pensyIncrement = () => {
    setPensyScore(prevState => prevState + 1);
  };

  const saveResult = () => {
    setIsSaved(true);
    updateKabansPensy(kabansScore, pensyScore);
  };

  return (
    <Container>
      <ResultWrap>
        <p>Кабани</p>
        {!isSaved && (
          <GoalBtn type="button" onClick={kabansIncrement}>
            +
          </GoalBtn>
        )}
        <ScoreWrap>
          <span>{kabansScore}</span>
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
