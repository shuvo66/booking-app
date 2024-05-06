import { HttpAuthService } from "./httpService";
import { authService } from "../auth";
import config from "../../../config/config";

export class VerifyAPI {
  constructor(private http: HttpAuthService) {}
  verificationToken() {
    return this.http.get<{ userID: string }>("api/auth/validate-token");
  }
  logout() {
    return this.http.get<{ message: string }>("api/auth/log-out");
  }

  resetPassword(payload: API.ResetPasswordPayload) {
    return this.http.post<{ message: string }>(
      "api/auth/reset-password",
      payload
    );
  }
}
const httpService = new HttpAuthService(config.apiUrl, authService);
export const verifyAPI = new VerifyAPI(httpService);
