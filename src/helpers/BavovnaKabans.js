export const bavovnaKabans = (
  bavovnaGoals,
  kabansGoals,
  setBavovnaStats,
  setKabansStats
) => {
  setBavovnaStats(prevState => ({
    ...prevState,
    goalsFor: prevState.goalsFor + bavovnaGoals,
    goalsAgainst: prevState.goalsAgainst + kabansGoals,
  }));

  setKabansStats(prevState => ({
    ...prevState,
    goalsFor: prevState.goalsFor + kabansGoals,
    goalsAgainst: prevState.goalsAgainst + bavovnaGoals,
  }));
  if (bavovnaGoals > kabansGoals) {
    setBavovnaStats(prevState => ({
      ...prevState,
      wins: prevState.wins + 1,
    }));

    setKabansStats(prevState => ({
      ...prevState,
      losses: prevState.losses + 1,
    }));
  }
  if (bavovnaGoals < kabansGoals) {
    setBavovnaStats(prevState => ({
      ...prevState,
      losses: prevState.losses + 1,
    }));

    setKabansStats(prevState => ({
      ...prevState,
      wins: prevState.wins + 1,
    }));
  }
  if (bavovnaGoals === kabansGoals) {
    setBavovnaStats(prevState => ({
      ...prevState,
      draws: prevState.draws + 1,
    }));

    setKabansStats(prevState => ({
      ...prevState,
      draws: prevState.draws + 1,
    }));
  }
};
