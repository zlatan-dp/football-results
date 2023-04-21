export const bavovnaPensy = (
  bavovnaGoals,
  pensyGoals,
  setBavovnaStats,
  setPensyStats
) => {
  setBavovnaStats(prevState => ({
    ...prevState,
    goalsFor: prevState.goalsFor + bavovnaGoals,
    goalsAgainst: prevState.goalsAgainst + pensyGoals,
  }));

  setPensyStats(prevState => ({
    ...prevState,
    goalsFor: prevState.goalsFor + pensyGoals,
    goalsAgainst: prevState.goalsAgainst + bavovnaGoals,
  }));
  if (bavovnaGoals > pensyGoals) {
    setBavovnaStats(prevState => ({
      ...prevState,
      wins: prevState.wins + 1,
    }));

    setPensyStats(prevState => ({
      ...prevState,
      losses: prevState.losses + 1,
    }));
  }
  if (bavovnaGoals < pensyGoals) {
    setBavovnaStats(prevState => ({
      ...prevState,
      losses: prevState.losses + 1,
    }));

    setPensyStats(prevState => ({
      ...prevState,
      wins: prevState.wins + 1,
    }));
  }
  if (bavovnaGoals === pensyGoals) {
    setBavovnaStats(prevState => ({
      ...prevState,
      draws: prevState.draws + 1,
    }));

    setPensyStats(prevState => ({
      ...prevState,
      draws: prevState.draws + 1,
    }));
  }
};
