import { Container } from 'components/global/Container';
import { TableWrap } from './TotalTable.styled';

export const TotalTable = () => {
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Кабани</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Пенси</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </Container>
  );
};
