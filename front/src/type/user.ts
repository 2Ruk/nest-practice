export interface IUser{
  userId: string
  userPw: string;
}

export function userInit():IUser{
  return{
    userId: '',
    userPw: '',
  }
}
