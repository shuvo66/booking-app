import { HttpAuthService } from "./httpService";
import { authService } from "../auth";
import config from "../../../config/config";

export class VerifyAPI {
  constructor(private http: HttpAuthService) {}
  verificationToken() {
    return this.http.get<{ userID: string }>("api/auth/validate-token");
  }
}
const httpService = new HttpAuthService(config.apiUrl, authService);
export const verifyAPI = new VerifyAPI(httpService);
