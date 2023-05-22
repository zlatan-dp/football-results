import { useEffect, useState } from 'react';
import { bavovnaKabans } from '../../helpers/BavovnaKabans';
import { bavovnaPensy } from '../../helpers/BavovnaPensy';
import { kabansPensy } from '../../helpers/KabansPensy';
import { TotalTable } from '../../components/TotalTable/TotalTable';
import { ResultList } from '../../components/ResultList/ResultList';
import { getTeams } from 'Api';

export default function Results() {
  const [teams, setTeams] = useState([]);

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

  useEffect(() => {
    getTeams().then(setTeams);
  }, []);

  return (
    <>
      <TotalTable
        bavovna={bavovnaStats}
        kabans={kabansStats}
        pensy={pensyStats}
        teams={teams}
      />

      <ResultList
        updateBavovnaKabans={updateBavovnaKabans}
        updateBavovnaPensy={updateBavovnaPensy}
        updateKabansPensy={updateKabansPensy}
      />
    </>
  );
}
