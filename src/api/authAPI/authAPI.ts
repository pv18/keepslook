import { AxiosResponse } from 'axios';
import { instance } from 'api/config';

export const authAPI = {
    login(login: string, password: string) {
        return instance.post<
            IAuthLoginResponse,
            AxiosResponse<IAuthLoginResponse>
        >('login', { login, password });
    },
    checkLogin(token: string) {
        return instance.post<
            { is_admin: boolean },
            AxiosResponse<{ is_admin: boolean }>
        >('is_admin', { token });
    },
};

export interface IAuthLoginResponse {
    login: boolean;
    token: string;
}
