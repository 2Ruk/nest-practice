export interface IUser {
  userId: string
  userPassword: string;
}

export interface IRegister extends IUser {
  userName: string;
  userConfirmPassword: string;

  okUserId: boolean;
  okUserPassword: boolean;
  okUserName: boolean;
  isEqualPassword: boolean;
}


export namespace defaultUserValue {
  export const user = (): IUser => {
    return {
      userId: '',
      userPassword: '',
    }
  }

  export const register = (): IRegister => {
    return {
      userId: '',
      userPassword: '',
      userName: '',
      userConfirmPassword: '',
      okUserId: false,
      okUserName: false,
      okUserPassword: false,
      isEqualPassword: false,
    }
  }
}



