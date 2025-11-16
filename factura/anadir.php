<?php
if (isset($_POST)) {
    $codigo = $_POST['codigo'];
    $cantidad = $_POST['cantidad'];
    require("conexion.php");

    $query = $pdo->prepare("UPDATE productos 
                            SET cantidad = cantidad + :cant 
                            WHERE codigo = :cod");

    $query->bindParam(":cod", $codigo);
    $query->bindParam(":cant", $cantidad);
    $query->execute();

    $pdo = null;
    echo "ok";
}
