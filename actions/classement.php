<?php
//Page de traitement des fonctions de classement passées en ajax par classement.js
require_once('../include/config.inc.php');
connectdb();
$result = $_REQUEST["classement"];
foreach ($result as $key => $value){
	$sql = "UPDATE form_inscriptions SET i_classement = '$key' WHERE id_inscription = '$value'";
	mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
}
mysql_close();
?>
