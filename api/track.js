const axios = require('axios');

export default async function handler(req, res) {
    const trackingNumber = req.query.trackingNumber;
    try {
        const response = await axios.get(`https://api.linkdoscorreios.com.br/rastreamento/${trackingNumber}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Não foi possível obter os dados de rastreamento." });
    }
}