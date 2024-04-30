export type RegisterPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type FormRegister = RegisterPayload & {
  confirmPassword: string;
};

export type FormLogin = LoginPayload & {
  confirmPassword: string;
};

export type RegisterResponse = {
  message: string;
  data: Register;
};

export type Register = {
  createuser: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    _id: string;
  };
  token: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};
export type LoginResponse = {
  message: string;
  data: {
    user: User;
    accessToken: string;
  };
};
