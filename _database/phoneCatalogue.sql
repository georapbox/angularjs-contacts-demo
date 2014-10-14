-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 29, 2013 at 12:21 PM
-- Server version: 5.5.32
-- PHP Version: 5.3.10-1ubuntu3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `phoneCatalogue`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phoneNo` varchar(50) DEFAULT NULL,
  `mobileNo` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `photo`, `name`, `phoneNo`, `mobileNo`, `email`) VALUES
(1, 'graptis.jpg', 'George Raptis', '(+30) 2410 282021', '(+30) 6972 088132', 'info@georap.gr'),
(3, 'avatar2.jpg', 'Damion Dauphin', '(+30) 2410 569878', '(+30) 6972 123456', 'dauphin@gmail.com'),
(4, 'avatar3.jpg', 'Marva Colson', '(+30) 210 282589', '(+30) 6972 659898', 'colson_m@yahoo.com'),
(5, NULL, 'Adrian Berube', '(+30) 2410 123456', '(+30) 6972 321654', 'adrian_berube@gmail.com'),
(6, NULL, 'Laurinda Jun', '(+30) 210 458021', '(+30) 6978 123789', 'jun_la@gmail.com'),
(7, 'avatar3.jpg', 'Pearlene Ketchum', '(+30) 2410 659876', '(+30) 6972 458971', 'ketchum@outlook.com'),
(8, NULL, 'Shad Prudhomme', '(+30) 2410 789789', '(+30) 6972 123123', 'prudhomme@gmail.com'),
(9, 'avatar5.jpg', 'Carlos Hardcastle', '(+30) 210 456789', '(+30) 6973 654879', 'hardcastle_c@outlook.com'),
(10, NULL, 'Lisette Cummings', '(+30) 2410 654897', '(+30) 6972 213489', 'cummings_lisette@gmail.com'),
(11, 'avatar4.jpg', 'Alonzo Noguera', '(+30) 2410 456789', '(+30) 6972 547895', 'noguera_alonso@outlook.com'),
(12, 'avatar6.jpg', 'Beverley Servantes', '(+30) 2410 123789', '(+30) 6972 123789', 'servantes_b@yahoo.com'),
(17, 'avatar1.jpg', 'John Doe', '(+30) 2410 123456', '(+30) 6972 123789', 'johnDoe@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
