<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD php - API fetch</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>

<body>
    <div class="container">
      <br>
        <div class="row">

                 <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header bg-primary">
                        <h3 class="text-center">Nueva Linea</h3>
                    </div>
                    <div class="card-body">
                        <form action="" method="post" id="update">
                            <div class="form-group">
                                <label for="">Codigo</label>
                          
                                <input type="text" name="codigo" id="codigo" placeholder="Codigo" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="">Cantidad</label>
                                <input type="text" name="cantidad" id="cantidad" placeholder="cantidad" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="button" value="Enviar" id="enviar" class="btn btn-primary btn-block">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
              
                <table class="table table-hover table-resposive">
                    <thead class="thead-dark">
                        <tr>
                            <th>Codigo</th>
                            <th>Cantidad</th>
                            <th>Producto</th>
                            <th>Preci Unitario</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody id="resultado">

                    </tbody>
                </table>
                 <table class="table table-hover table-resposive">
                    <thead class="thead-light">
                        <tr id="subtotal">
                            <td>SubTotal:</td>
                        </tr>
                         <tr id="iva" >
                            <td>Iva(18%):</td>
                        </tr>
                         <tr id="total">
                            <td>Total:</td>
                        </tr>
                    </thead>
                    <tbody id="resultTotal">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</body>

</html>