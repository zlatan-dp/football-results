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

export const TotalTable = ({ bavovna, kabans, pensy, teams }) => {
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
            {teams.map(team => (
              <TR key={team._id}>
                <TD>{team.name}</TD>
                <TD>{team.results.wins}</TD>
                <TD>{team.results.draws}</TD>
                <TD>{team.results.losses}</TD>
                <TD>{team.results.goalsFor}</TD>
                <TD>{team.results.goalsAgainst}</TD>
                <TD>{team.results.goalsFor - team.results.goalsAgainst}</TD>
                <TD>{team.results.wins * 3 + team.results.draws}</TD>
              </TR>
            ))}
          </tbody>
        </Table>
      </TableWrap>
    </Container>
  );
};
