CREATE TABLE `burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(250) NOT NULL,
  `devoured` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;