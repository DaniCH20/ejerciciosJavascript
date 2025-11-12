## Ejercicio Promesas

Las promesas son objetos que representan la terminación o el fracaso de una operación asíncrona.

**Realiza un ejercicio que simule mediante promesas la resolución de unpedido**

1. Crea la función prepararPedido que simule la preparación del pedido y devuelva una Promesa que se resuelve en 3 segundos con el mensaje "Pedido preparado".
2. Crea la función entregarPedido que simule la entrega del pedido y devuelva una Promesa que se resuelve en 2 segundos con el mensaje "Pedido entregado".
3. Crea una función procesarPedido que use async y await para:
   1. Llamar a prepararPedido y esperar su resolución.
   2. Llamar a entregarPedido después de que prepararPedido se haya completado.
   3. Usa un bloque try/catch para capturar y manejar cualquier error en el proceso de preparación o entrega.