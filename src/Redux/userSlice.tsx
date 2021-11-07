import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "usuario",
  initialState: {
    name: "",
    logado: false,
  },
  reducers: {
    changeUsuario(state, { payload }) {
      return { ...state, logado: true, name: payload };
    },
    logout(state) {
      return { ...state, logado: false, name: "" };
    },
  },
});

interface UsuarioProps{
  name: string;
  logado: boolean;
}

interface PropsLogado{
   usuario:UsuarioProps
}

export function selectUser(state: PropsLogado) {
  return state.usuario;
}

export const { changeUsuario, logout } = slice.actions;

export default slice.reducer;
