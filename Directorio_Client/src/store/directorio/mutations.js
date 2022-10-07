export const setDirectorio = (state, directorio) => {
  state.directorio = [...state.directorio, ...directorio];
  state.isLoading = false;
};

export const setIsLoding = (state) => {
  state.isLoading = false;
};

export const clearDirectorio = (state) => {
  state.directorio = [];
};

export const addNewPerson = (state, persona) => {
  state.directorio.unshift(persona);
  state.socketio.io.emit("update_directorio", state.directorio);
};

export const deletePersona = (state, uid) => {
  const idx = state.directorio.findIndex((persona) => uid === persona.uid);
  state.directorio.splice(idx, 1);
  state.socketio.io.emit("update_directorio", state.directorio);
};

export const updateEntry = (state, registro) => {
  const idx = state.directorio.findIndex(({ uid }) => registro.uid === uid);
  state.directorio[idx] = registro;
  state.socketio.io.emit("update_directorio", state.directorio);
};
export const SOCKET_UPDATE_DIRECTORIO = (state, directorio) => {
  console.log(directorio);
  state.directorio = directorio;
};
