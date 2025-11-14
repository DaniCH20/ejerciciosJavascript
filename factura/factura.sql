Drop database factura;
Create Database factura;

CREATE TABLE `productos` (
  `id` int(11)PRIMARY KEY NOT NULL,
  `codigo` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `producto` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `productos` (`id`, `codigo`, `producto`, `precio`, `cantidad`) VALUES
(10, '8523', 'televisor lg', '85.00', 9),
(11, '963', 'laptop hp', '56.00', 9),
(18, '7897685', 'nuevo', '896.00', 6),
(19, '75545', 'probando', '96344.00', 8),
(20, '78799', 'impresora epson', '45.00', 4);