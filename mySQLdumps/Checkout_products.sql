-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: localhost    Database: Checkout
-- ------------------------------------------------------
-- Server version	5.5.46-0ubuntu0.14.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `manufacturer` varchar(45) DEFAULT NULL,
  `partId` varchar(45) DEFAULT NULL,
  `interface` varchar(45) DEFAULT NULL,
  `chipset` varchar(45) DEFAULT NULL,
  `memorySize` varchar(45) NOT NULL,
  `memoryType` varchar(45) DEFAULT NULL,
  `coreClock` varchar(45) DEFAULT NULL COMMENT '	',
  `tdp` int(4) DEFAULT NULL,
  `fan` varchar(45) DEFAULT NULL,
  `sli support` varchar(45) DEFAULT NULL,
  `crossfireSupport` varchar(45) DEFAULT NULL,
  `freesyncSupport` varchar(45) DEFAULT NULL,
  `length` varchar(45) DEFAULT NULL,
  `dvi-i` int(11) DEFAULT NULL,
  `miniDisplayPort` int(11) DEFAULT NULL,
  `displayport` int(11) DEFAULT NULL,
  `hdmi` int(11) DEFAULT NULL,
  `availability` varchar(45) DEFAULT NULL,
  `price` float(8,2) DEFAULT NULL,
  PRIMARY KEY (`id`,`memorySize`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'MSI Radeon R9 Fury X 4GB Video Card','MSI','V803-001R','PCI-Express x16','Radeon R9 Fury X','4GB','HBM','1.05 Ghz',275,'yes','no','4-way CrossFire','yes','7.68\" (195mm)',0,0,3,1,'yes',666.98),(2,'VisionTek Radeon R9 Nano 4GB Video Card','VisionTek','900829','PCI-Express x16','Radeon R9 Nano','4GB','HBM','1.0GHz',175,'yes','no','4-way CrossFire','yes','6.02\" (153mm)',0,0,3,1,'yes ',582.06),(3,'XFX Radeon R9 Fury 4GB Triple Dissipation Vid','XFX','R9-FURY-4TF9','PCI-Express x16','Radeon R9 Fury','4GB','HBM','1.0GHz',275,'yes','no','4-way CrossFire','yes','12.40\" (315mm)',0,0,3,1,'yes ',514.98),(4,'Asus Radeon R9 390 8GB Video Card','Asus','R9390-DC2-8GD5','PCI-Express x16','Radeon R9 390','8GB','GDDR5','1.0GHz',275,'yes','no','4-way CrossFire','yes','11.30\" (287mm)',2,0,1,1,'yes',481.92),(5,'XFX Radeon R9 295X2 8GB Core Edition Video Ca','XFX','R9-295X-8QFA','PCI-Express x16','Radeon R9 295X2','8GB','GDDR5','1.02Ghz',500,'Yes, water cooled','no','yes','no','12.01\" (305mm)',1,4,0,0,'yes',1981.13),(6,'MSI Radeon HD 7970 3GB Video Card','MSI','R7970-2PMD3GD5/OC','PCI-Express x16','Radeon HD 7970','3GB','GDDR5','1.01 Ghz',250,'yes','no','4-way CrossFire','no','10.83\" (275mm)',1,2,0,1,'yes',773.64),(7,'Diamond Radeon R9 290X 4GB Video Card','Diamond','R9290XD54G','PCI-Express x16','Radeon R9 290X','4GB','GDDR5','947 MHz',300,'yes','no','4-way CrossFire','no','10.79\" (274mm)',2,0,1,1,'yes',641.81),(8,'MSI Radeon R9 290X 4GB LIGHTNING Video Card','MSI','R9 290X LIGHTNING','PCI-Express x16','Radeon R9 290X','4GB','GDDR5','1.08Ghz',300,'yes','no','4-way CrossFire','no','11.89\" (302mm)',2,0,1,1,'yes',625.06),(9,'MSI Radeon R9 290X 4GB TWIN FROZR Video Card','MSI','912-V308-001','PCI-Express x16','Radeon R9 290X','4GB','GDDR5','1.04Ghz',300,'yes','no','4-way CrossFire','no','10.87\" (276mm)',2,0,1,1,'yes',495.02),(10,'Asus Radeon R9 290X 4GB Video Card','Asus','R9290X-4GD5','PCI-Express x16','Radeon R9 290X','4GB','GDDR5','1.0GHz',300,'yes','no','4-way CrossFire','no','10.87\" (276mm)',2,0,1,1,'yes',434.11),(11,'Sapphire Radeon R9 290 4GB Vapor-X Video Card','Sapphire','100362VXSR','PCI-Express x16','Radeon R9 290','4GB','GDDR5','1.03Ghz',250,'yes','no','4-way CrossFire','no','12.01\" (305mm)',2,0,1,1,'yes',424.30);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-05 18:05:02
