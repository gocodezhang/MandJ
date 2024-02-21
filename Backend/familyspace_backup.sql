-- MySQL dump 10.13  Distrib 8.1.0, for macos14.0 (x86_64)
--
-- Host: localhost    Database: familyspace
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `familyspace`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `familyspace` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `familyspace`;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `family_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FAMILY_CHAT_ID_FK` (`family_id`),
  KEY `FKiegpujs84ckhnbqj91uspyeme` (`user_name`,`user_id`),
  CONSTRAINT `FAMILY_CHAT_ID_FK` FOREIGN KEY (`family_id`) REFERENCES `family` (`id`),
  CONSTRAINT `FKiegpujs84ckhnbqj91uspyeme` FOREIGN KEY (`user_name`, `user_id`) REFERENCES `user` (`first_name`, `id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` VALUES (1,'2023-12-14 12:19:36.497000','test',2,2,'Jay'),(2,'2023-12-14 20:40:10.909000','test2',2,2,'Jay'),(3,'2023-12-14 20:44:49.206000','test3',2,2,'Jay'),(4,'2023-12-15 12:06:35.753000','test4',2,2,'Jay'),(5,'2023-12-15 15:56:11.025000','test5',2,2,'Jay'),(6,'2023-12-15 16:09:52.944000','test6',2,2,'Jay'),(7,'2023-12-15 16:17:42.669000','test7',2,2,'Jay'),(8,'2023-12-15 16:34:20.832000','test8',2,2,'Jay'),(9,'2023-12-15 16:36:28.963000','test9',2,2,'Jay'),(10,'2023-12-15 16:37:36.060000','test10',2,2,'Jay'),(11,'2023-12-15 16:40:26.782000','test11',2,2,'Jay'),(12,'2023-12-15 16:41:17.062000','test12',2,2,'Jay'),(13,'2023-12-15 16:45:38.567000','test13',2,2,'Jay'),(14,'2023-12-15 16:52:42.873000','test14',2,2,'Jay'),(15,'2023-12-15 16:58:28.384000','test15',2,2,'Jay'),(16,'2023-12-15 17:03:00.799000','12345',2,2,'Jay'),(17,'2023-12-15 17:14:20.888000','test16',2,2,'Jay'),(18,'2023-12-16 21:53:56.887000','test17',2,2,'Jay'),(19,'2023-12-16 22:06:17.945000','test18',2,2,'Jay'),(20,'2023-12-18 10:16:18.975000','test19',2,2,'Jay'),(21,'2023-12-18 12:09:56.620000','test20',2,2,'Jay'),(22,'2023-12-18 13:30:12.347000','test21',2,2,'Jay'),(23,'2023-12-18 13:31:46.812000','test22',2,2,'Jay');
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `end_time` datetime(6) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `participants` varbinary(255) DEFAULT NULL,
  `start_time` datetime(6) DEFAULT NULL,
  `family_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FAMILY_EVENT_ID_FK` (`family_id`),
  CONSTRAINT `FAMILY_EVENT_ID_FK` FOREIGN KEY (`family_id`) REFERENCES `family` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'2023-08-14 16:00:00.000000','Funston Beach, CA','Nori Beach Hangout',_binary '¬\í\0ur\0[Ljava.lang.String;­\ÒV\ç\é{G\0\0xp\0\0\0t\0Maria Hot\0	Jay Zhang','2023-08-14 12:00:00.000000',2),(2,'2023-08-14 20:00:00.000000','McCandless Park, Milpitas, CA','Nori Daily Fun',_binary '¬\í\0ur\0[Ljava.lang.String;­\ÒV\ç\é{G\0\0xp\0\0\0t\0Maria Hot\0	Jay Zhang','2023-08-14 19:00:00.000000',2);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family`
--

DROP TABLE IF EXISTS `family`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `family` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family`
--

LOCK TABLES `family` WRITE;
/*!40000 ALTER TABLE `family` DISABLE KEYS */;
INSERT INTO `family` VALUES (2,'MandJ');
/*!40000 ALTER TABLE `family` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` datetime(6) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `family_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FAMILY_PHOTO_ID_FK` (`family_id`),
  CONSTRAINT `FAMILY_PHOTO_ID_FK` FOREIGN KEY (`family_id`) REFERENCES `family` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (3,'2023-08-14 09:07:56.400000','https://res.cloudinary.com/dr7v4uirr/image/upload/v1692029203/family_photo_2_idoj6d.jpg',2),(4,'2023-08-14 09:08:17.489000','https://res.cloudinary.com/dr7v4uirr/image/upload/v1692029203/family_photo_1_jgwktw.jpg',2),(5,'2023-08-28 22:34:47.022000','https://res.cloudinary.com/dr7v4uirr/image/upload/v1693287286/bxg9rhgmlsyt1uynljul.png',2);
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `age` int DEFAULT NULL,
  `familyid` int DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `location` json DEFAULT NULL,
  `profile_photo` varchar(255) DEFAULT NULL,
  `family_id` int DEFAULT NULL,
  `family_user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ifpg93e07biojgn27b523a8t6` (`first_name`,`id`),
  KEY `FAMILY_USER_ID_FK` (`family_id`),
  KEY `FKamhjdsntwjx0lbh1i21jo1j2h` (`family_user_id`),
  CONSTRAINT `FAMILY_USER_ID_FK` FOREIGN KEY (`family_id`) REFERENCES `family` (`id`),
  CONSTRAINT `FKamhjdsntwjx0lbh1i21jo1j2h` FOREIGN KEY (`family_user_id`) REFERENCES `family` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,28,2,'Jay','male','Zhang','{\"latitude\": 37.409798, \"longitude\": -121.89792}','https://res.cloudinary.com/dr7v4uirr/image/upload/v1703266631/vfdmjpzgwfjpvyhcg0uz.png',2,NULL),(3,27,2,'Maria','female','Ho','{\"latitude\": 37.38289, \"longitude\": -122.03645}','https://res.cloudinary.com/dr7v4uirr/image/upload/v1692028830/female_profile_cxzv5b.png',2,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-20 21:09:30
