import config from "../../../config/config";
import { RegisterPayload } from "./@types";
import { HttpService } from "./httpService";

export class AuthAPI {
  constructor(private http: HttpService) {}
  register(payload: RegisterPayload) {
    return this.http.post<API.RegisterResponse>("api/auth/register", payload);
  }
}
export const httpService = new HttpService(config.apiUrl);
export const authAPI = new AuthAPI(httpService);
