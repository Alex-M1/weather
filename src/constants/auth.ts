export enum AuthInputType {
  login = 'login',
  password = 'password',
  confirm = 'confirm'
}
export enum AuthPages {
  registration = 'registration',
  auth = 'authorization'
}

export const AUTH_REGULAR = {
  loginReg: /^[a-zA-Z0-9]{4,12}$/,
  passwordReg: /^(?=\D*\d)(?=[^a-z]*[a-z])[0-9a-z]{4,12}$/i,
};
