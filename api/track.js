export default async (req, res) => {
    const { trackingNumber } = req.query;
    const apiUrl = `https://api.ship24.com/public/v1/trackers/search/${trackingNumber}/results`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY'  // Se necessário
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
