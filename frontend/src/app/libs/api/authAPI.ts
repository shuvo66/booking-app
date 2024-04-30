import config from "../../../config/config";
import { HttpService } from "./httpService";

export class AuthAPI {
  constructor(private http: HttpService) {}
  register(payload: API.RegisterPayload) {
    return this.http.post<API.RegisterResponse>("api/auth/register", payload);
  }
  login(payload: API.LoginPayload) {
    return this.http.post<API.LoginResponse>("api/auth/login", payload);
  }
}
export const httpService = new HttpService(config.apiUrl);
export const authAPI = new AuthAPI(httpService);
