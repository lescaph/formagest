<?php
if (isset($_GET['formation'])) {
  require_once('../include/config.inc.php');
  init();
  mysql_query("SET NAMES 'utf8'");
  $idformation = $_GET['formation'];
  function cleanData(&$str)
  {
    $str = preg_replace("/\t/", "\\t", $str);
    $str = preg_replace("/\r?\n/", "\\n", $str);
    $str = preg_replace("/\"/", "\"\"", $str);
    //$str = preg_replace("/\\\\/", "\\\\\\\\", $str);
    $str = stripslashes($str);
    $str = "\"".$str."\"";
    $str = utf8_encode($str);
    //if(strstr($str, '"')) $str = '"' . str_replace('"', '""', $str) . '"';
  } 

  # file name for download
  $filename = "formation_".$idformation."_".date('Ymd'). ".csv";

  header("Content-Disposition: attachment; filename=\"$filename\"");
  header("Content-Type: text/csv; charset=UTF-8");

  // En-tête : infos sur la formation	
  $envoi = infos_formation($idformation);
		while($fetch = mysql_fetch_assoc($envoi))
		 {
			echo utf8_encode($fetch['f_type'])." « ".utf8_encode($fetch['f_titre'])."  »\n\"".utf8_encode($fetch['f_lieux'])." - ".utf8_encode($fetch['f_date'])." ".$fetch['f_annee']."\"\n\n";
		 }
		 	
 
  $flag = false;
  $result = infos_participants_export($idformation,1); // export des infos des participants (validés=1, en attente=0, annulés=2)
  while(false !== ($row = mysql_fetch_assoc($result))) {	
    if(!$flag) {
      # display field/column names as first row
      //echo implode(",", array_keys($row)) . "\n";
      echo "Civilité,Nom,Prénom,Établissement,Fonction,Adresse,Code postal,Ville,Téléphone,Mail,Attentes,\n";
      $flag = true;
    }
    array_walk($row, 'cleanData');
    echo implode(",", array_values($row)) . "\n";
  }
  mysql_close(); 
}
else {
  echo "Il n'y a pas d'informations &agrave; afficher dans le tableur";
}
?> 
