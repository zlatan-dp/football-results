import styled from 'styled-components';

export const TableWrap = styled.section`
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

export const Title = styled.caption`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #95b7e6;
  color: white;
  text-transform: uppercase;
`;

export const TR = styled.tr`
  text-align: center;
`;

export const TH = styled.th`
  font-weight: 500;
  width: 90px;
  padding: 5px;
  border: 1px solid #2a2a2a;
`;

export const TD = styled.td`
  width: 90px;
  padding: 5px;
  border: 1px solid #2a2a2a;
`;
