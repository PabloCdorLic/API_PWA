-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-07-2024 a las 02:36:15
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenda_estudio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(10) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `telefono` int(50) UNSIGNED DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `apellido`, `nombre`, `telefono`, `email`) VALUES
(9, 'Caliri', 'Pablo', 1162182093, 'pablo.h.caliri@gmail.com'),
(11, 'Martínez', 'Carlos', 1154782930, 'carlos.martinez@example.com'),
(12, 'Rodríguez', 'Ana', 1134567890, 'ana.rodriguez@example.com'),
(13, 'López', 'Juan', 1165478321, 'juan.lopez@example.com'),
(14, 'Pérez', 'Laura', 1123478901, 'laura.perez@example.com'),
(15, 'Fernández', 'Luis', 1176543210, 'luis.fernandez@example.com'),
(18, 'Sánchez', 'Lucía', 1109876543, 'lucia.sanchez@example.com'),
(20, 'Ramírez', 'Pedro', 1123456789, 'pedro.ramirez@example.com'),
(21, 'Flores', 'Elena', 1134567891, 'elena.flores@example.com'),
(22, 'Ríos', 'Diego', 1145678902, 'diego.rios@example.com'),
(23, 'Morales', 'Natalia', 1156789012, 'natalia.morales@example.com'),
(24, 'Dinubila', 'Analia', 1153645899, 'analia@hotmail.com'),
(26, 'Kakaroto', 'Goku', 1553236364, 'goku@hot');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
