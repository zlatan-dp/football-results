import { Container } from 'components/global/container/Container';
import {
  TableWrap,
  Title,
  Table,
  TableHead,
  TH,
  TR,
  TD,
} from './TotalTable.styled';

export const TotalTable = ({ bavovna, kabans, pensy }) => {
  const bavovnaGoalDif = bavovna.goalsFor - bavovna.goalsAgainst;
  const bavovnaPoints = bavovna.wins * 3 + bavovna.draws;

  const kabansGoalDif = kabans.goalsFor - kabans.goalsAgainst;
  const kabansPoints = kabans.wins * 3 + kabans.draws;

  const pensyGoalDif = pensy.goalsFor - pensy.goalsAgainst;
  const pensyPoints = pensy.wins * 3 + pensy.draws;

  return (
    <Container>
      <TableWrap>
        <Table>
          <Title>Vsrata Lite League</Title>
          <TableHead>
            <TR>
              <TH>Команди</TH>
              <TH>Перем</TH>
              <TH>Нічиї</TH>
              <TH>Пораз</TH>
              <TH>Забито</TH>
              <TH>Пропущ</TH>
              <TH>Різн</TH>
              <TH>Очки</TH>
            </TR>
          </TableHead>

          <tbody>
            <TR>
              <TD>Бавовна</TD>
              <TD>{bavovna.wins}</TD>
              <TD>{bavovna.draws}</TD>
              <TD>{bavovna.losses}</TD>
              <TD>{bavovna.goalsFor}</TD>
              <TD>{bavovna.goalsAgainst}</TD>
              <TD>{bavovnaGoalDif}</TD>
              <TD>{bavovnaPoints}</TD>
            </TR>
            <TR>
              <TD>Кабани</TD>
              <TD>{kabans.wins}</TD>
              <TD>{kabans.draws}</TD>
              <TD>{kabans.losses}</TD>
              <TD>{kabans.goalsFor}</TD>
              <TD>{kabans.goalsAgainst}</TD>
              <TD>{kabansGoalDif}</TD>
              <TD>{kabansPoints}</TD>
            </TR>
            <TR>
              <TD>Пенси</TD>
              <TD>{pensy.wins}</TD>
              <TD>{pensy.draws}</TD>
              <TD>{pensy.losses}</TD>
              <TD>{pensy.goalsFor}</TD>
              <TD>{pensy.goalsAgainst}</TD>
              <TD>{pensyGoalDif}</TD>
              <TD>{pensyPoints}</TD>
            </TR>
          </tbody>
        </Table>
      </TableWrap>
    </Container>
  );
};
