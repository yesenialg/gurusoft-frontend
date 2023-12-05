import axios from "axios";

const apiBasePrimosUrl  = "https://localhost:7191/"

export async function PostNumerosPrimos(requestBody){
    console.log("ENTRA")
    const url = `${apiBasePrimosUrl}NumerosPrimos`
    console.log(url)
    console.log(requestBody)
    try {
        const response = await axios.post(url, requestBody);
        console.log(response)
        return response.data;
    } catch (error) {
        console.log("Error al obtener los primos:", error);
    }
}