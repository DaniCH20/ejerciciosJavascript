<html>
  <head>
    <title>Factura</title>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
   </head>
  <body>
    <h1>factura<h1>
      <form onClick="">
        <label>Codigo de producto:</label>
          <input id="codigo" ></input>
      <br>
       <label>Cantidad:</label>
          <input id="cantidad" ></input>
      <br><button type="submit">Enviar</button>
      </form>
      <table class="table table-hover table-resposive">
                    <thead class="thead-dark">
                        <tr>
                            <th>Codigo</th>
                            <th>Cantidad</th>
                            <th>Producto</th>
                            <th>PrecioUnitario</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody id="resultado">
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
								 $precioTotal=$data['precio'] * $data['cantidad'];
								echo "<tr>
										<td>" . $data['codigo'] . "</td>
										<td>" . $data['cantidad'] . "</td>
										<td>" . $data['descripcion'] . "</td>
										<td>" . $data['precio'] . "</td>
										<td class='precioTotal'>" . $precioTotal . "</td> 										
									</tr>";
							}
						?>
                    </tbody>
                </table>
		
    </body>
</html>
