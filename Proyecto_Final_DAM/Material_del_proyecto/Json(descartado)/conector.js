const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Configuración de la base de datos
const db = mysql.createConnection({
    host: "mysql.railway.internal",
    user: "root",
    password: "hlZtmKRIycbAzPKXfqajvlPKdnvVlTfB",
    database: "railway",
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conectado a la base de datos");
});

// Ejemplo de endpoint para obtener datos
app.get("/libros", (req, res) => {
    db.query("SELECT * FROM libros", (err, results) => {
        if (err) {
            console.error("Error al realizar la consulta:", err);
            res.status(500).send("Error al obtener datos");
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
