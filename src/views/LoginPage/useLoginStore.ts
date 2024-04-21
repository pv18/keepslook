import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { message } from 'antd';
import { authAPI } from 'api/authAPI';

interface IStore {
  isLoading: boolean;
  isLogged: boolean;
  token: string;
  logIn: (login: string, password: string) => void;
  checkIsLogged: (token: string) => void;
}

export const useLoginStore = create<IStore>()(
  immer((set, get) => ({
    isLoading: false,
    isLogged: false,
    token: '',
    logIn: async (login, password) => {
      set({ isLoading: true });
      try {
        const { data } = await authAPI.login(login, password);
        if (data.login) {
          set({ token: data.token, isLogged: true });
        }
      } catch (e) {
        message.error(`${e}`);
      } finally {
        set({ isLoading: false });
      }
    },
    checkIsLogged: async (token) => {
      set({ isLoading: true });
      try {
        const { data } = await authAPI.checkLogin(token);
        if (data) {
          set({ isLogged: data.is_admin });
        }
      } catch (e) {
        message.error(`${e}`);
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);
