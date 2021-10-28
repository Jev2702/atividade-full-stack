
export const login = (user) => new Promise(async (resolve, reject) => {
  try {
    if (user.usuario === "bling" && user.senha === "bling") {
      localStorage.setItem('token', "12345");
      resolve({ msg: "Login realizado com sucesso!", token: "12345" });
    } else {
      reject({ msg: "Usuário ou senha invalidos!", token: null });
    }
  } catch (erro) {
    reject({ msg: "Falha inesperada ou realizar login!", token: null });
  }

});


export const getToken = () => new Promise(async (resolve, reject) => {
  try {
    const token =  localStorage.getItem("token");
    resolve( token)
  } catch (error) {
    reject("")
  }

   
})


