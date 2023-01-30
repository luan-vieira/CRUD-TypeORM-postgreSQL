export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdate {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}
