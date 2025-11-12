 function prepararPedido() {
            return new Promise((resolve, reject) => {
                console.log("Preparando el pedido...");
                setTimeout(() => {
                    resolve("Pedido preparado");
                }, 3000);
        });
    }

        function entregarPedido() {
            return new Promise((resolve, reject) => {
                console.log("Entregando el pedido...");
                setTimeout(() => {
                    resolve("Pedido entregado");
                }, 2000);
            });
        }

        async function procesarPedido() {
            try {
                const mensajePreparado = await prepararPedido();
                console.log(mensajePreparado);

                const mensajeEntregado = await entregarPedido();
                console.log(mensajeEntregado);
            } catch (error) {
                console.error("Hubo un error:", error);
            }
        }
 
        // Ejecutar el flujo de pedido
        procesarPedido();