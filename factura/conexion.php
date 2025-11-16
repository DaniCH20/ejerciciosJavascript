<?php
$hostDB = "localhost";
$puertoDB = "3307";
$nombreDB = "crud";
$usuarioDB = "root";
$contrasenaDB = "";


$dsn = "mysql:host=$hostDB;port=$puertoDB;dbname=$nombreDB;charset=utf8mb4";//se junta todo


$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $pdo = new PDO($dsn, $usuarioDB, $contrasenaDB, $options);//la variable que se usara en todas las conexiones
} catch (PDOException $e) {
    echo "No se ha podido conectar a la base de datos: " . $e->getMessage();
    exit;
}