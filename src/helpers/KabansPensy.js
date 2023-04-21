export const kabansPensy = (
  kabansGoals,
  pensyGoals,
  setKabansStats,
  setPensyStats
) => {
  setKabansStats(prevState => ({
    ...prevState,
    goalsFor: prevState.goalsFor + kabansGoals,
    goalsAgainst: prevState.goalsAgainst + pensyGoals,
  }));

  setPensyStats(prevState => ({
    ...prevState,
    goalsFor: prevState.goalsFor + pensyGoals,
    goalsAgainst: prevState.goalsAgainst + kabansGoals,
  }));
  if (kabansGoals > pensyGoals) {
    setKabansStats(prevState => ({
      ...prevState,
      wins: prevState.wins + 1,
    }));

    setPensyStats(prevState => ({
      ...prevState,
      losses: prevState.losses + 1,
    }));
  }
  if (kabansGoals < pensyGoals) {
    setKabansStats(prevState => ({
      ...prevState,
      losses: prevState.losses + 1,
    }));

    setPensyStats(prevState => ({
      ...prevState,
      wins: prevState.wins + 1,
    }));
  }
  if (kabansGoals === pensyGoals) {
    setKabansStats(prevState => ({
      ...prevState,
      draws: prevState.draws + 1,
    }));

    setPensyStats(prevState => ({
      ...prevState,
      draws: prevState.draws + 1,
    }));
  }
};
