export class AuthService {
  getToken() {
    return localStorage.getItem("token");
  }
  setToken(token: string) {
    return localStorage.setItem("token", token);
  }
  removeToken() {
    return localStorage.removeItem("token");
  }
}
export const authService = new AuthService();
