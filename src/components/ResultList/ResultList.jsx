import { ResultItem } from '../ResultItem/ResultItem';
import { Container } from 'components/global/container/Container';

const BavovnaTeam = ['МкРей', 'Дімас', 'Рафа', 'Білий', 'Рамон'];
const KabansTeam = ['Стас', 'Сас', 'Вєталь', 'Євген', 'Дімон'];
const PensyTeam = ['Жека', 'Тьосса', 'СД', 'Філ', 'Слава'];

export const ResultList = ({
  updateBavovnaKabans,
  updateBavovnaPensy,
  updateKabansPensy,
}) => {
  return (
    <Container>
      <ul>
        <ResultItem
          updateFunction={updateBavovnaKabans}
          teamOne={'Бавовна'}
          teamTwo={'Кабани'}
          teamOneSquad={BavovnaTeam}
          teamTwoSquad={KabansTeam}
        />
        <ResultItem
          updateFunction={updateBavovnaPensy}
          teamOne={'Бавовна'}
          teamTwo={'Пенси'}
          teamOneSquad={BavovnaTeam}
          teamTwoSquad={PensyTeam}
        />
        <ResultItem
          updateFunction={updateKabansPensy}
          teamOne={'Кабани'}
          teamTwo={'Пенси'}
          teamOneSquad={KabansTeam}
          teamTwoSquad={PensyTeam}
        />
      </ul>
    </Container>
  );
};
