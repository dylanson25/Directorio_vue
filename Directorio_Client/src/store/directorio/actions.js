import { generateUUID } from "@/utils";

export const loadDirectorio = async ({ commit }) => {
  const data = localStorage.getItem("directorio");
  setTimeout(() => {
    if (data) {
      let directorio = JSON.parse(data);
      commit("clearDirectorio");
      commit("setDirectorio", directorio);
    } else {
      localStorage.setItem("directorio", []);
      commit("setDirectorio", []);
    }
  }, 1000);
};

export const createPerson = async ({ commit }, newPerson) => {
  const { nombre, direccion, phone } = newPerson;
  const uid = generateUUID();

  commit("addNewPerson", {
    uid,
    nombre,
    direccion,
    phone,
  });
};

export const deletePersona = async ({ commit }, uid) => {
  commit("deletePersona", uid);
};

export const updateEntry = async (
  { commit },
  { direccion, nombre, uid, phone }
) => {
  commit("updateEntry", { direccion, nombre, uid, phone });
};
