export interface IUser {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
}

export interface IUserMutation{
  name: string;
  email: string;
  role: string;
  active: boolean;
}