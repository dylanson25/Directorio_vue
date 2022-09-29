export const getDirectorioByTerm =
  (state) =>
  (term = "") => {
    return term.length === 0
      ? state.directorio
      : state.directorio.filter((person) =>
          person.nombre.toLowerCase().includes(term.toLowerCase())
        );
  };
