const app = require('./app.js');
const dotenv = require('dotenv');
dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {console.log(`Servidor rodando na porta ${PORT}`);})