<?php
if (isset($_GET['inscription']) && is_numeric($_GET['inscription']))
{	
	require_once('../include/config.inc.php');
	init();
    mysql_query("SET NAMES 'utf8'");
	require('../fpdf17/fpdf.php');
	require('../fpdf17/rotation.php');
	$idinscription = $_GET['inscription'];
	$datepdf = date('Ymd_Hi');

	// affichage du jour
	$mois   = array("","Janvier","F�vrier","Mars","Avril","Mai","Juin","Juillet","Ao�t","Septembre","Octobre","Novembre","D�cembre"); 
	$datefr = date("j")." ".$mois[date("n")]." ".date("Y"); 
	
	// r�cup�ration des informations sur l'inscription
	$envoi          = infos_inscription($idinscription);
	$inscription    = mysql_fetch_assoc($envoi);	
	$attentes       = utf8_decode(if_mq_on($inscription['i_attentes']));
	$id_participant = $inscription['id_participant'];
	$id_formation   = $inscription['id_formation'];
	
	// r�cup�ration des informations sur la formation
	$envoi           = infos_formation($id_formation);
	$formation       = mysql_fetch_assoc($envoi);
	$titre_formation = utf8_decode($formation['f_titre']);
	$annee_formation = $formation['f_annee'];
	$type_formation  = utf8_decode($formation['f_type']);
	
	/* detection du pluriel pour affichage dans les pdf */
	//initialisation des terminaisons � changer
	$preposition_a = "";
	$terminaison_feminin_e = "";
	//initialisation de la variable pour le pluriel
	$type_formation_pluriel = "";
	/*Reconnaissance des termes utilis�s
	 * 1. Masculin singulier (d�faut)
	 * 2. F�minin singulier
	 * 3. F�minin pluriel
	 */
	//R pour Rencontres
	if($type_formation[0] === "R")
	{	
		$type_formation_pluriel = 3;
	}
		//J pour Journ�e(s)
	elseif($type_formation[0] === "J")
	{
		//s pour Journ�es	
		if($type_formation[7] === "s")
		{
			$type_formation_pluriel = 3;
		}
		else
		{
			$type_formation_pluriel = 2;
		}
	}
	else
	{
		$type_formation_pluriel = 1;
	}			
	
	//application du pluriel
	switch ($type_formation_pluriel)
	{
			case 2:
				$preposition_a = "� la";
                $preposition_a_maj = "� la";
				$terminaison_feminin_e = "e";
				break;
			case 3:
				$preposition_a = "aux";
                $preposition_a_maj = "Aux";
				$terminaison_feminin_e = "es";	
				break;
			default:
				$preposition_a = "au";
                $preposition_a_maj = "Au";
				$terminaison_feminin_e = "";
				break;	
	}
	
	
	$lieux_formation = utf8_decode($formation['f_lieux']);
	$date_formation = utf8_decode($formation['f_date']);
	
	// r�cup�ration des informations sur le participant
	$envoi = infos_participant($id_participant);
	$participant = mysql_fetch_assoc($envoi);
	switch ($participant['p_civilite'])
	{
		case 3:
			$civilite = "Monsieur";
			break;
		case 2:
			$civilite = "Madame";
			break;
		case 4:
			$civilite = "Mademoiselle";
			break;
		default:
			$civilite = civilite($participant['p_civilite']);
			break;
	}
	$nom           = utf8_decode(if_mq_on($participant['p_nom']));
	$prenom        = utf8_decode(if_mq_on($participant['p_prenom']));
	$etablissement = utf8_decode(if_mq_on($participant['p_etablissement']));
	$fonction      = utf8_decode(if_mq_on($participant['p_fonction']));
	$adresse       = utf8_decode(if_mq_on($participant['p_adresse']));
	$cp            = $participant['p_cp'];
	$ville         = utf8_decode(if_mq_on($participant['p_ville']));
	if(isset($participant['p_pays']))
	{
		$pays = utf8_decode(if_mq_on($participant['p_pays']));
	}
	else
	{
		$pays = "";
	}	
	$telephone = $participant['p_telephone'];
	$fax = $participant['p_fax'];
	$mail = $participant['p_mail'];
    $mailadministratif = $participant['p_mailadministratif'];
	
	// r�cup�ration des informations sur l'h�bergement / formules choisies
	$formules = getInscriptionsFormules($idinscription);

	//infos h�bergement pour une formule - voire boucle pour plusieurs formules
	$formule          = mysql_fetch_assoc($formules);
	$infos_formule    = infos_hebergement($formule['id_formule']);
	$info_formule     = mysql_fetch_assoc($infos_formule);
	$hebergement_info = utf8_decode($info_formule['fml_tarif']) . ", (" . utf8_decode($info_formule['fml_descriptif']) . ")";
	
	
    //Type de PDF � �diter et choix du template
	$template = '';
	 
	if (isset($_GET['type'])) {
		$formules_sans_convention = array(9, 19);
		$formules_journees_mcs_ocim = array(21, 22, 23, 24, 25, 26);
        if ($_GET['type'] == 'inscription') {
            while($data = mysql_fetch_assoc($formules)){
                if (in_array($data['id_formule'], $formules_sans_convention)) $template = 1;
                elseif (in_array($data['id_formule'], $formules_journees_mcs_ocim)) $template = 2;
            }		
        }
        elseif ($_GET['type'] == 'confirmation') $template = 3;
        elseif ($_GET['type'] == 'devis') $template = 4;
	}
		
	//echo 'template :'.$template;
	switch ($template) {
					case 1:
						include_once('pdf_templates/formation_sans_convention.tpl.php');
						break;
					case 2:
						include_once('pdf_templates/journees_mcs_ocim.tpl.php');
						break;
					case 3:
						$fichier = 'pdf_templates/confirmation_formation' . $id_formation . '.tpl.php';
						if (file_exists($fichier))
							include_once($fichier);
						else include_once('pdf_templates/confirmation_formation.tpl.php');	
						break;
                    case 4:
                        include_once('pdf_templates/devis.tpl.php');
						break;	
					default:
						include_once('pdf_templates/formation_avec_convention.tpl.php');							
	}
	mysql_close();
				
}	
else
{
     echo "Cette page ne contient pas d'informations";
     echo "<br />L'identifiant d'inscription n'existe pas<br />";
}
?>
