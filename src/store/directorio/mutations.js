export const setDirectorio = (state, directorio) => {
  state.directorio = [...state.directorio, ...directorio];
  state.isLoading = false;
};

export const clearDirectorio = (state) => {
  state.directorio = [];
};

export const addNewPerson = (state, persona) => {
  state.directorio.unshift(persona);
  localStorage.setItem("directorio", JSON.stringify(state.directorio));
};

export const deletePersona = (state, uid) => {
  const idx = state.directorio.findIndex((persona) => uid === persona.uid);
  state.directorio.splice(idx, 1);
  localStorage.setItem("directorio", JSON.stringify(state.directorio));
};
