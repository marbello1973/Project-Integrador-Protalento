// const num = /^[0-9]{0,3}$/;
// const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;
// const email = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;

export const checkEmail = (email: string) => {
  if (!email) return "email vacio";
  if (/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email)) return;
  else return "email invalido";
};
