import config from "../../../config/config";
import { RegisterPayload } from "./@types";
import { HttpService } from "./httpService";

export class AuthAPI {
  constructor(private http: HttpService) {}
  register(payload: RegisterPayload) {
    return this.http.post("/api/auth/register", payload);
  }
}
export const authAPI = new AuthAPI(config.apiUrl);
