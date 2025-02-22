import axios from "axios"

export async function getDollarValue() {
    try {
      const response = await axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL");
      console.log("Cotação do Dólar:", response.data.USDBRL.bid);
    } catch (error) {
      console.error("Erro ao buscar cotação:", error);
    }
}
