export type ResponseData<T> = {
	body: T;
	code: number;
};

export type HttpResponse<T> =
	| { success: true; data: ResponseData<T>; message?: string }
	| { success: false; data?: ResponseData<T>; message: string };

export type RequestOptions = Omit<RequestInit, 'method' | 'body'>;

export type RequestBody = string | FormData | null;

export type HttpServiceConfig = {
	getToken?: () => string | null;
	getRefreshToken?: () => string | null;
	onUpdateToken?: (token: string) => void;
	onUnauthorised?: () => void;
};

export type RefreshTokenResponse = {
	access_token: string;
};
