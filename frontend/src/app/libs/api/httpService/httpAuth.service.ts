import { AuthService } from '@/libs/auth';
import { HttpService } from './http.service';

export class HttpAuthService extends HttpService {
	constructor(getBaseURL: () => string, private auth: AuthService) {
		super(getBaseURL, {
			getToken: () => this.auth.getToken(),
			getRefreshToken: () => this.auth.getRefreshToken(),
			onUpdateToken: (token: string) => this.auth.setToken(token),
			onUnauthorised: () => this.auth.removeTokens(),
		});
	}
}
