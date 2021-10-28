import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/repos/",
});


export const getRepositorios = (path) => new Promise(async (resolve, reject) => {
    try {
        const result = await api.get(path)
        resolve(result);
    } catch (erro) {
        reject(erro)
    }
});
export default api;