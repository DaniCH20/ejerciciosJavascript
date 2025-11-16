<?php
$data = file_get_contents("php://input");
require "conexion.php";
$consulta = $pdo->prepare("SELECT * FROM productos ORDER BY id DESC");
$consulta->execute();
if ($data != "") {
    $consulta = $pdo->prepare("SELECT * FROM productos WHERE id LIKE '%".$data."%' OR producto LIKE '%".$data."%' OR precio LIKE '%".$data."%'");
    $consulta->execute();
}
$resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
foreach ($resultado as $data) {
    $precioTotal = $data['precio'] * $data['cantidad'];
    echo "<tr>
            <td>" . $data['codigo'] . "</td>
            <td>" . $data['cantidad'] . "</td>
            <td>" . $data['producto'] . "</td>
            <td>" . $data['precio'] . "</td>
            <td class='precioTotal'>" . $precioTotal . "</td> 										
        </tr>";
}
