const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  // Implementar la lógica para registrar un usuario aquí
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  // Implementar la lógica para iniciar sesión aquí
});

module.exports = router;
