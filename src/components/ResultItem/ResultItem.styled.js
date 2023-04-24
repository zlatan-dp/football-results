import styled from 'styled-components';

export const ResultWrap = styled.li`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  justify-content: center;

  :nth-child(even) {
    background-color: rgb(230, 230, 230);
  }
`;

export const ScoreWrap = styled.div``;

export const GoalBtn = styled.button`
  border: none;
  border-radius: 3px;
  padding: 3px;
  background-color: #95b7e6;
`;

export const SaveBtn = styled.button`
  border: none;
  border-radius: 3px;
  padding: 3px;
  background-color: #95b7e6;
  &:hover {
    background-color: rgb(113, 180, 235);
  }
`;
