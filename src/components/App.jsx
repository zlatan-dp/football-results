import { useState } from 'react';
import { bavovnaKabans } from 'helpers/BavovnaKabans';
import { bavovnaPensy } from 'helpers/BavovnaPensy';
import { kabansPensy } from 'helpers/KabansPensy';
import { TotalTable } from './TotalTable/TotalTable';
import { ResultList } from './ResultList/ResultList';

export const App = () => {
  const [bavovnaStats, setBavovnaStats] = useState({
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
  });

  const [kabansStats, setKabansStats] = useState({
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
  });

  const [pensyStats, setPensyStats] = useState({
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
  });

  const updateBavovnaKabans = (bavovnaGoals, kabansGoals) => {
    bavovnaKabans(bavovnaGoals, kabansGoals, setBavovnaStats, setKabansStats);
  };

  const updateBavovnaPensy = (bavovnaGoals, pensyGoals) => {
    bavovnaPensy(bavovnaGoals, pensyGoals, setBavovnaStats, setPensyStats);
  };

  const updateKabansPensy = (kabansGoals, pensyGoals) => {
    kabansPensy(kabansGoals, pensyGoals, setKabansStats, setPensyStats);
  };

  return (
    <>
      <TotalTable
        bavovna={bavovnaStats}
        kabans={kabansStats}
        pensy={pensyStats}
      />

      <ResultList
        updateBavovnaKabans={updateBavovnaKabans}
        updateBavovnaPensy={updateBavovnaPensy}
        updateKabansPensy={updateKabansPensy}
      />
    </>
  );
};
