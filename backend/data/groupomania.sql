-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 13, 2021 at 10:33 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `groupomania`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'zzzz', 'eeeeeee', '2021-03-24 14:09:27', '2021-03-24 14:09:27', 1),
(2, 'eeeee', 'rrrrrrr', '2021-03-24 14:11:27', '2021-03-24 14:11:27', 1),
(3, 'zzzz', 'eeeeee', '2021-03-24 14:18:17', '2021-03-24 14:18:17', 1),
(4, 'zzzzz', 'eeeeeee', '2021-03-24 14:19:55', '2021-03-24 14:19:55', 1),
(5, 'eeeee', 'rrrrr', '2021-03-24 14:36:42', '2021-03-24 14:36:42', 1),
(6, 'zzzzz', 'eeeee', '2021-03-24 14:37:26', '2021-03-24 14:37:26', 1),
(7, 'eeeee', 'rrrrrr', '2021-03-24 14:45:52', '2021-03-24 14:45:52', 1),
(8, 'eeeeee', 'rrrrrrrrrr', '2021-03-24 14:47:14', '2021-03-24 14:47:14', 1),
(9, 'eeee', 'rrrrr', '2021-03-24 15:18:01', '2021-03-24 15:18:01', 1),
(10, 'aaaaaaaaaaa', 'zzzzzzzzzz', '2021-03-24 15:33:18', '2021-03-24 15:33:18', 1),
(11, 'zzz', 'eeee', '2021-03-24 15:35:16', '2021-03-24 15:35:16', 1),
(12, 'zzzz', 'eeeee', '2021-03-24 15:47:18', '2021-03-24 15:47:18', 1),
(13, 'eeee', 'rrrr', '2021-03-24 15:57:20', '2021-03-24 15:57:20', 1),
(14, 'eeee', 'rrrr', '2021-03-24 15:58:16', '2021-03-24 15:58:16', 1),
(15, 'zzzz', 'eeeee', '2021-03-24 15:58:57', '2021-03-24 15:58:57', 1),
(16, 'eeee', 'rrrrr', '2021-03-29 13:48:36', '2021-03-29 13:48:36', 1),
(17, 'zzzzz', 'zzzzzzzzzzzzzzzz', '2021-03-30 10:38:40', '2021-03-30 10:38:40', 1),
(18, 'zzzzee', 'eeeeeeee', '2021-03-30 13:36:46', '2021-03-30 13:36:46', 1),
(19, 'eeeee', 'rrrrrrr', '2021-04-01 12:46:03', '2021-04-01 12:46:03', 1),
(20, 'eeee', 'rrrrrrr', '2021-04-01 12:48:04', '2021-04-01 12:48:04', 1),
(21, 'eeee', 'rrrrrrr', '2021-04-01 12:48:05', '2021-04-01 12:48:05', 1),
(22, 'eeee', 'rrrrrrr', '2021-04-01 12:52:40', '2021-04-01 12:52:40', 1),
(23, 'eeeee', 'rrrrrr', '2021-04-01 13:01:23', '2021-04-01 13:01:23', 1),
(24, 'rrrr', 'tttttt', '2021-04-01 13:05:49', '2021-04-01 13:05:49', 1),
(25, 'rrrr', 'tttttt', '2021-04-01 13:07:34', '2021-04-01 13:07:34', 1),
(26, '[object Object],[object Object],[object Object]', '[object Object],[object Object],[object Object]', '2021-04-01 13:08:07', '2021-04-01 13:08:07', 1),
(27, '[object Object],[object Object],[object Object],[object Object]', '[object Object],[object Object],[object Object],[object Object]', '2021-04-01 13:09:03', '2021-04-01 13:09:03', 1),
(28, 'rrrr', 'tttttt', '2021-04-01 13:09:34', '2021-04-01 13:09:34', 1),
(29, 'rrrr', 'tttttt', '2021-04-01 13:10:01', '2021-04-01 13:10:01', 1),
(30, 'rrrr', 'tttttt', '2021-04-01 13:10:57', '2021-04-01 13:10:57', 1),
(31, 'rrrr', 'tttttt', '2021-04-01 13:21:04', '2021-04-01 13:21:04', 1),
(32, 'rrrr', 'tttttt', '2021-04-01 13:23:09', '2021-04-01 13:23:09', 1),
(33, 'eeeee', 'rrrrrr', '2021-04-01 13:27:00', '2021-04-01 13:27:00', 1),
(34, 'eeeee', 'rrrrrr', '2021-04-01 13:27:01', '2021-04-01 13:27:01', 1),
(35, 'eeee', 'rrrrr', '2021-04-01 13:34:59', '2021-04-01 13:34:59', 1),
(36, 'eeee', 'rrrr', '2021-04-01 13:36:11', '2021-04-01 13:36:11', 1),
(37, 'eeeee', 'rrrrrr', '2021-04-01 13:41:18', '2021-04-01 13:41:18', 1),
(38, 'zzzz', 'eeeeeeeeeee', '2021-04-02 11:50:34', '2021-04-02 11:50:34', 1),
(39, 'zzzz', 'eeeeeeeeeee', '2021-04-02 11:50:36', '2021-04-02 11:50:36', 1),
(40, 'li', 'tujff', '2021-04-02 11:52:34', '2021-04-02 11:52:34', 1),
(41, 'ororor', 'pppeeee', '2021-04-02 11:53:50', '2021-04-02 11:53:50', 1),
(42, 'ppppp', 'mmmmm', '2021-04-02 11:55:09', '2021-04-02 11:55:09', 1),
(43, 'pepzpe', 'aaaaaaaa', '2021-04-02 11:57:26', '2021-04-02 11:57:26', 1),
(44, 'lolmm', 'xnxnxnxnx', '2021-04-02 11:58:20', '2021-04-02 11:58:20', 1),
(45, 'eeeerrr', 'ttttttt', '2021-04-02 11:58:34', '2021-04-02 11:58:34', 1),
(46, 'ttttttt', 'ffffff', '2021-04-02 11:59:27', '2021-04-02 11:59:27', 1),
(47, 'zzzzzz', 'eeeeeee', '2021-04-02 12:00:22', '2021-04-02 12:00:22', 1),
(48, 'pppppp', 'mmmmm', '2021-04-02 12:03:42', '2021-04-02 12:03:42', 1),
(49, 'pppppp', 'mmmmm', '2021-04-02 12:05:31', '2021-04-02 12:05:31', 1),
(50, 'zzzz', 'tttttt', '2021-04-02 12:10:05', '2021-04-02 12:10:05', 1),
(51, 'zzzz', 'tttttt', '2021-04-02 12:15:57', '2021-04-02 12:15:57', 1),
(52, 'zzzz', 'eeee', '2021-04-06 10:24:21', '2021-04-06 10:24:21', 1),
(53, 'aaaaa', 'tttttt', '2021-04-06 10:24:48', '2021-04-06 10:24:48', 1),
(54, 'eeeeeee', 'rrrrrr', '2021-04-06 10:32:48', '2021-04-06 10:32:48', 1),
(55, 'yyyyy', NULL, '2021-04-07 09:36:48', '2021-04-07 09:36:48', 2);

-- --------------------------------------------------------

--
-- Table structure for table `commentaires`
--

CREATE TABLE `commentaires` (
  `id` int(11) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `articleId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `commentaires`
--

INSERT INTO `commentaires` (`id`, `text`, `createdAt`, `updatedAt`, `articleId`, `userId`) VALUES
(1, '', '2021-03-24 14:17:36', '2021-03-24 14:17:36', NULL, 1),
(2, '', '2021-03-24 14:18:22', '2021-03-24 14:18:22', NULL, 1),
(3, '', '2021-03-24 14:19:59', '2021-03-24 14:19:59', NULL, 1),
(4, 'zzzzzzz', '2021-03-24 14:22:01', '2021-03-24 14:22:01', NULL, 1),
(5, '', '2021-03-24 15:35:19', '2021-03-24 15:35:19', NULL, 1),
(6, 'sss', '2021-03-24 15:35:24', '2021-03-24 15:35:24', NULL, 1),
(7, '', '2021-03-24 15:47:21', '2021-03-24 15:47:21', NULL, 1),
(8, 'sssss', '2021-03-24 15:47:26', '2021-03-24 15:47:26', NULL, 1),
(9, 'eeeeeeee', '2021-03-30 10:38:16', '2021-03-30 10:38:16', NULL, 1),
(10, 'eeeeeeee', '2021-03-30 10:38:59', '2021-03-30 10:38:59', NULL, 1),
(11, 'ttttttttttttttttt', '2021-03-30 10:40:06', '2021-03-30 10:40:06', NULL, 1),
(12, 'pppppppppppppppppp', '2021-03-30 10:40:34', '2021-03-30 10:40:34', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `job`, `createdAt`, `updatedAt`) VALUES
(1, 'tttttt', 'bbbbbb', 'tttttt@ttttt', '$2a$08$7XD33tLDwsd1umy9g9PCFO4pZ8aTbh9V92HWiUlYEkhgh3MgdHcQS', 'dev', '2021-03-24 14:07:57', '2021-03-24 14:07:57'),
(2, 'tttt', 'yyyy', 'pppppp@test.ee', '$2a$08$q7MZFa4RYXooE5QsPdvpAOdXFO4bONEypXdnZaoIgJMAoFVuojOrC', 'dddd', '2021-04-07 09:36:21', '2021-04-07 09:36:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `articleId` (`articleId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `commentaires_ibfk_1` FOREIGN KEY (`articleId`) REFERENCES `articles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `commentaires_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
