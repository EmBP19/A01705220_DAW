-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2021 at 05:56 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jurassic park`
--

-- --------------------------------------------------------

--
-- Table structure for table `incidente`
--

CREATE TABLE `incidente` (
  `id_incidente` int(11) NOT NULL,
  `incidente` varchar(30) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `incidente`
--

INSERT INTO `incidente` (`id_incidente`, `incidente`, `fecha`) VALUES
(1, 'Falla eléctrica', '2021-05-05 14:08:01'),
(2, 'Fuga Herbivoro', '2021-05-05 15:53:58'),
(3, 'Fuga de Velociraptors', '2021-05-05 15:54:15'),
(4, 'Fuga de TRex', '2021-05-05 15:54:44');

-- --------------------------------------------------------

--
-- Table structure for table `lugar`
--

CREATE TABLE `lugar` (
  `id_lugar` int(11) NOT NULL,
  `lugar` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lugar`
--

INSERT INTO `lugar` (`id_lugar`, `lugar`) VALUES
(1, 'Centro turístico'),
(2, 'Laboratorios'),
(3, 'Restaurante'),
(4, 'Centro operativo');

-- --------------------------------------------------------

--
-- Table structure for table `reporte`
--

CREATE TABLE `reporte` (
  `id_reporte` int(11) NOT NULL,
  `id_incidente` int(11) NOT NULL,
  `id_lugar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reporte`
--

INSERT INTO `reporte` (`id_reporte`, `id_incidente`, `id_lugar`) VALUES
(0, 2, 2),
(1, 1, 1),
(2, 3, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `incidente`
--
ALTER TABLE `incidente`
  ADD PRIMARY KEY (`id_incidente`);

--
-- Indexes for table `lugar`
--
ALTER TABLE `lugar`
  ADD PRIMARY KEY (`id_lugar`);

--
-- Indexes for table `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`id_reporte`),
  ADD UNIQUE KEY `FK - id_incidente` (`id_incidente`),
  ADD UNIQUE KEY `FK - id_lugar` (`id_lugar`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `incidente`
--
ALTER TABLE `incidente`
  MODIFY `id_incidente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `lugar`
--
ALTER TABLE `lugar`
  MODIFY `id_lugar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reporte`
--
ALTER TABLE `reporte`
  ADD CONSTRAINT `reporte_ibfk_1` FOREIGN KEY (`id_lugar`) REFERENCES `lugar` (`id_lugar`),
  ADD CONSTRAINT `reporte_ibfk_2` FOREIGN KEY (`id_incidente`) REFERENCES `incidente` (`id_incidente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
