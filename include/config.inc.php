<?php
// Infos générales
define("FORMAGEST_VERSION", "1.10");
// Connexion à la bdd en local

define("DBHOST", "localhost");
define("DBUSER", "");
define("DBPASSWORD", "");
define("DBNAME", "preinscriptions");

// chemins d'accès
define("ROOT_PATH", "/www/formations/preinscription/outils/formations/inscriptions/");
// chemins d'accès ocim.2le.net
//define("ROOT_PATH", "/formations/inscriptions/");
define("ACTION_PATH", "actions/");
// Etat des validations d'inscriptions
define("STATUT_EN_ATTENTE", 0);
define("STATUT_VALIDE", 1);
define("STATUT_ANNULEE", 2);
// catégories
define("INSCRIPTION", "inscription");
define("PARTICIPANT", "participant");
define("INSCRIPTIONS_FORMULES", "inscriptions_formules");
// erreurs
define("ERR01", "Pas d'identifiant de formation");

function init()
{
    connectdb();
    require_once 'requetes.inc.php';
    require_once 'listes.affichage.inc.php';
}

/*
* connection à la bdd
*/
function connectdb()
{
	$host = DBHOST;
	$user = DBUSER;
	$pass = DBPASSWORD;
	$db = DBNAME;
	mysql_connect ($host,$user,$pass) or die ('<b>Erreur :</b><br>'.mysql_error());
	mysql_select_db($db) or die ('<b>Erreur :</b><br>'.mysql_error());
}

// recharge une page avec l'argument formation en parametre
function recharge_page($formation)
{
	$param = "?formation=$formation";
	?>
	<script type="text/javascript">
	window.location.replace="self.location.pathname+'<? echo $param; ?>'";
	</script>
	<?php
}

//redirige vers une url
function redirige($url)
{
	if (!headers_sent()) header("Location: $url");
	else echo "<meta http-equiv=\"refresh\" content=\"0;url=$url\">\r\n";
}

//vérification des magic quotes activées
function if_mq_on($variable)
{
	if (get_magic_quotes_gpc()){
		$variable = stripslashes($variable);
	}
	return $variable;
}

/*
* Fonction get_element_xml Retourne l'élément spécifiée dans le fichier spécifié
* @param $element   =  élément xml à retourner
* @param $fichier   =  fichier xml
*/
function get_element_xml($element, $fichier)
{
	if (file_exists($fichier)) {
		$xml = simplexml_load_file($fichier);
		return $xml->champ[0]->$element;
	} else {
		exit('Echec lors de l\'ouverture du fichier xml ' . $fichier);
	}
}

/*
* Fonction set_element_xml Ecrit l'élément spécifiée dans le fichier spécifié
* @param $newvalue  =  nouvelle valeur
* @param $element   =  élément xml à retourner
* @param $fichier   =  fichier xml
*/
function set_element_xml($newvalue, $element, $fichier)
{
	if (file_exists($fichier)) {
		$xml = simplexml_load_file($fichier);
		$xml->champ[0]->$element = $newvalue;
		file_put_contents($fichier, $xml->asXML());
	} else {
		exit('Echec lors de l\'ouverture du fichier ' . $fichier);
	}
}

/*
* Fonction isUTF8 Retourne l'encodage UTF8 d'une chaine
* @param $str   =  string à analyser
*/
function isUTF8($str)
{
    return $str === mb_convert_encoding(mb_convert_encoding($str, "UTF-32", "UTF-8"), "UTF-8", "UTF-32") ? true : false;
}

/*
* Fonction isIncluded vérifie si la page chargée est incluse, cad chargée via index.php?page=
*
function isIncluded()
{
    return isset($_GET['page']) ? true : false;
}
*/
/*
* Fonction array_first_entry Retourne la premiere entrée d'un tableau
* @param $arr   =  tableau à analyser
*/
function array_first_entry($arr){
    if(!is_array($arr))
        return;
       
    if(empty($arr))
        return;
       
    reset($arr);
    return current($arr);   
}
/********/
/* EDIT */
/********/
/*
* Fonction edit_input sert à afficher un texte à saisir dans le formulaire d'édition
* @param $titre   =  nom du champ
* @param $nom =  valeur de l'attibut name
* @param $valeur =  valeur de l'attibut value  
*/

function edit_input($titre, $nom, $valeur)
{
	?>
	<tr>
		<td>
			<?php
			echo $titre . '&nbsp;'; 
			echo '<input class="edit_input" type="text" size="25" name="' . $nom . '" value="' . $valeur . '">';
			?>
		</td>
	</tr>
	<?php
}



/*
* Fonction update_champ sert à mettre à jour un champ du formulaire
* @param $tab  =  tableau avec les informations à mettre à jour ['idinscription'], ['idparticipant'], ['table_affectee'], ['champ_affecte'], ['ancienne_valeur'], ['nouvelle_valeur']
*/

function update_champ($tab)
{
    switch ($tab['table_affectee']) {
        
        case INSCRIPTIONS_FORMULES:
             $sql = sprintf("UPDATE form_" . $tab['table_affectee'] . "
                            SET " . $tab['champ_affecte'] . " = '%s' 
                            WHERE id_inscription = " . $tab['idinscription'] . " 
                            AND " . $tab['champ_affecte'] . " = " . $tab['ancienne_valeur'],
                    mysql_real_escape_string($tab['nouvelle_valeur']));
            if (!mysql_query($sql)){
                die('Erreur: ' . mysql_error());
            }
             break;
        default:
            $sql = sprintf("UPDATE form_" . $tab['table_affectee'] . "s
                            SET " . $tab['champ_affecte'] . " = '%s' 
                            WHERE id_" . $tab['table_affectee'] . " = " . $tab['id' . $tab['table_affectee']],
                    mysql_real_escape_string($tab['nouvelle_valeur']));
            if (!mysql_query($sql)){
                die($sql . '<br />Erreur: ' . mysql_error());
            }
        /*    
        if ($tab['table_affectee'] = INSCRIPTIONS_FORMULES){
            $sql = sprintf("UPDATE form_" . $categorie . " SET id_formule = '%s' WHERE id_inscription = " . $_POST['idinscription'] ." AND id_formule = '%s'" ,
                    mysql_real_escape_string($_POST[$nom_champ])
                    );
            if (!mysql_query($sql)){
                die('Erreur: ' . mysql_error());
            }
        }
        elseif (isset($_POST['id' . $categorie])){ 
            $idcategorie = $_POST['id' . $categorie];
            //print_r($_POST);
            $sql = sprintf("UPDATE form_" . $categorie . "s SET " . $nom_champ." = '%s' WHERE id_" . $categorie . " = " . $_POST['idinscription'],
                    mysql_real_escape_string($_POST[$nom_champ]));
            if (!mysql_query($sql)){
                die('Erreur: ' . mysql_error());
            }
        }
        else{
            echo 'Erreur: Pas de variable' . $_POST['id' . $categorie];
        }
        */ 
    }

}    				  
?>
