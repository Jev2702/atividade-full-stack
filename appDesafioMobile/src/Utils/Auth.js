import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = (usuario, senha) => new Promise(async (resolve, reject) => {
  try {
    if (usuario === "bling" && senha === "bling") {
      AsyncStorage.setItem('token', "12345");
      resolve({ msg: "Login realizado com sucesso!", token: "12345" });
    } else {
      reject({ msg: "Usuário ou senha invalidos!", token: null });
    }
  } catch (erro) {
    reject({ msg: "Falha inesperada ou realizar login!", token: null });
  }

});

export const logOut = () => new Promise(async (resolve, reject) => {
  try {
    AsyncStorage.removeItem('token');
    resolve({ msg: "LogOut realizado com sucesso!"}); 
  } catch (erro) {
    reject({ msg: "Falha inesperada ou realizar LogOut!", token: null });
  }
})
export const getToken = () => new Promise(async (resolve, reject) => {
  try {
    const token = AsyncStorage.getItem("token");
    resolve(token)
  } catch (error) {
    reject("")
  }


})


