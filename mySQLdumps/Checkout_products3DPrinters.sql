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
-- Table structure for table `products3DPrinters`
--

DROP TABLE IF EXISTS `products3DPrinters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products3DPrinters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(45) DEFAULT NULL,
  `dimensions` varchar(45) DEFAULT NULL,
  `weight` varchar(45) DEFAULT NULL,
  `buildVolume` varchar(45) DEFAULT NULL,
  `layerResolution` varchar(45) DEFAULT NULL,
  `buildPlate` varchar(45) DEFAULT NULL,
  `buildPlateLeveling` varchar(45) DEFAULT NULL,
  `printTechnology` varchar(45) DEFAULT NULL,
  `filamentDiameter` varchar(45) DEFAULT NULL,
  `filamentMaterials` varchar(45) DEFAULT NULL,
  `filamentFederType` varchar(45) DEFAULT NULL,
  `nozzleDiameter` varchar(45) DEFAULT NULL,
  `software` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products3DPrinters`
--

LOCK TABLES `products3DPrinters` WRITE;
/*!40000 ALTER TABLE `products3DPrinters` DISABLE KEYS */;
INSERT INTO `products3DPrinters` VALUES (0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(1,'ULTIMAKER 2+','493x342x588','11.3 kg','223x223x205','from 600micron to 20 micron','Glass','Assisted leveling process','Fused Filament Fabrication (FFF)','2.85 mm','PLA,ABS,CPE','Bowden feder','0.25,0.4,0.6,0.8','cura'),(2,'ULTIMAKER 2 EXTENDED+','493x342x688','12.3 kg','223x223x305','from 600micron to 20 micron','Glass','Assisted leveling process','Fused Filament Fabrication (FFF)','2.85 mm','PLA,ABS,CPE','Bowden feder','0.25,0.4,0.6,0.8','cura'),(3,'MAKERBOT REPLICATOR','528x441x410','16 kg','252x199x150','100 microns','glass','Assisted leveling process','Fused Deposition Modeling','1.75 mm','PLA','Direct Feder','0.4','MakerBot Desktop'),(4,'Duplicator I3 V2',NULL,NULL,'200x200x180','100 microns','Heated Bed Plate',NULL,NULL,'1.75 mm','PLA, ABS, PVA, Stainless Steel, NinjaFlex, Ny','MK10 Single-Extruder (with Steel X-Carriage)',NULL,'Repetier, cura,matterControl simplify3D'),(5,'Cubicon 3DP','553.7x579x523','24kg','239x190x200','100 microns','garolite','automatic','Fused Filament Fabrication (FFF)','1.75 mm','PLA,ABS,TPU/Flexible',NULL,NULL,NULL);
/*!40000 ALTER TABLE `products3DPrinters` ENABLE KEYS */;
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
