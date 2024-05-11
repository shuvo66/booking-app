type Listner = (state: string | null) => void;

export class AuthService {
  private listners = new Set<Listner>();

  getToken() {
    return localStorage.getItem("auth_token");
  }

  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  setToken(token: string) {
    localStorage.setItem("auth_token", token);
    this.listners.forEach((listner) => listner(token));
  }

  setRefreshToken(token: string) {
    localStorage.setItem("refreshToken", token);
  }

  setTokens(token: string, refreshToken: string) {
    this.setToken(token);
    this.setRefreshToken(refreshToken);
  }

  removeTokens() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("refreshToken");
    this.listners.forEach((listner) => listner(null));
  }

  listen(listner: Listner) {
    this.listners.add(listner);
    return () => this.listners.delete(listner);
  }
}

export const authService = new AuthService();
