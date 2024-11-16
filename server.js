const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// API для получения курсов
app.get('/api/rates', async (req, res) => {
  try {
    const response = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    res.json({ bitcoin: response.data });
  } catch (error) {
    res.status(500).send('Error fetching data from Binance');
  }
});

// Регистрация нового пользователя
app.post('/api/register', (req, res) => {
  const { username, referralCode } = req.body;
  // Проверка реферального кода, создание пользователя и сохранение в MongoDB
  res.json({ message: 'User registered successfully' });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
