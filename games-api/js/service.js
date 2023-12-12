import { handleError, handleErrors } from "./exception.js";
var URL = 'http://localhost:3000/jogos';

export const getAllGames = () => {
    try {
       
        // fazendo uma solicitaçao  GET para obter ....
       
        const response = await fetch(URL);
       
        // lidando com erros nas resposta
       
        handleErrors(response);
       
        // converter os dados para json
       
        return await response.json();


    } catch (error) {
        console.log('Error >>>', error);

    }
};