const express = require('express');
const app = express();
const openaiIntegration = require('./openAI_Integration');

// Configurar middleware y rutas de Express aquí
app.use(express.static('./'));

app.post('/analyze', async (req, res) => {
    const sentiment = await openaiIntegration.analyzeSentiment('This is a test prompt.');
    res.json({ sentiment });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});