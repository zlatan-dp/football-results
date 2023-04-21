import { Container } from 'components/global/Container';
import { TableWrap } from './TotalTable.styled';

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
        <table>
          <caption>Vsrata Lite League</caption>
          <thead>
            <tr>
              <th>Команди</th>
              <th>Перемоги</th>
              <th>Нічиї</th>
              <th>Поразки</th>
              <th>Забито</th>
              <th>Пропущено</th>
              <th>Різниця</th>
              <th>Очки</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Бавовна</td>
              <td>{bavovna.wins}</td>
              <td>{bavovna.draws}</td>
              <td>{bavovna.losses}</td>
              <td>{bavovna.goalsFor}</td>
              <td>{bavovna.goalsAgainst}</td>
              <td>{bavovnaGoalDif}</td>
              <td>{bavovnaPoints}</td>
            </tr>
            <tr>
              <td>Кабани</td>
              <td>{kabans.wins}</td>
              <td>{kabans.draws}</td>
              <td>{kabans.losses}</td>
              <td>{kabans.goalsFor}</td>
              <td>{kabans.goalsAgainst}</td>
              <td>{kabansGoalDif}</td>
              <td>{kabansPoints}</td>
            </tr>
            <tr>
              <td>Пенси</td>
              <td>{pensy.wins}</td>
              <td>{pensy.draws}</td>
              <td>{pensy.losses}</td>
              <td>{pensy.goalsFor}</td>
              <td>{pensy.goalsAgainst}</td>
              <td>{pensyGoalDif}</td>
              <td>{pensyPoints}</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </Container>
  );
};
