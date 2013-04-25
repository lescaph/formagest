<?php

###############################
########### ACTIONS ###########
###############################

	########### DELETE ###########
	function getIdParticipant($idinscription)
	{
		$sql = "SELECT id_participant FROM form_inscriptions WHERE id_inscription = $idinscription";
		$result = mysql_query($sql) or die('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
		$fetch = mysql_fetch_assoc($result);
		return $fetch['id_participant'];
	}
	
	########### EXPORT_CSV ###########
	function infos_formation($idformation) // intitulé, type, lieux et date - export_csv
	{
		$sql = "SELECT f_titre, f_annee, f_date, f_lieux, f_type FROM form_formations WHERE id_formation = $idformation";
		$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
		return $envoi;
	}

	function infos_participants_export($idformation,$validation) //liste pour export_csv
	{
		$sql = "SELECT p_civilite, p_nom, p_prenom, p_etablissement, p_fonction, p_adresse, p_cp, p_ville, p_telephone, p_mail, p_mailadministratif, i_attentes FROM form_participants ";
        $sql .= "JOIN form_inscriptions ON form_inscriptions.id_participant = form_participants.id_participant ";
        $sql .= "WHERE form_inscriptions.id_formation= $idformation AND form_inscriptions.i_validation = $validation ";
        $sql .= "ORDER BY p_nom";
        //$sql = utf8_decode($sql);
        $result = mysql_query($sql) or die('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
        return $result;
	}

	########### EDIT ###########
	function liste_flv($flv_ce_liste) //affichage.inc.php
	{
		$sql = "SELECT flv_valeur, flv_label FROM form_liste_valeurs WHERE flv_ce_liste = $flv_ce_liste";
		$result = mysql_query($sql) or die('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
		return $result;
	}

	function civilite($flv_valeur)
	{
		$sql = "SELECT flv_label FROM form_liste_valeurs WHERE flv_ce_liste = 1 AND flv_valeur = $flv_valeur";
		$result = mysql_query($sql) or die('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
		$fetch = mysql_fetch_assoc($result);
		return $fetch['flv_label'];
	}
		
	function getInfosParticipantsViaIdinscription($idinscription)
	{
		$sql ="SELECT form_participants.id_participant, p_civilite, p_nom, p_prenom, p_etablissement, p_fonction, p_adresse, p_cp, p_ville, p_pays, p_telephone, p_fax, p_mail, p_mailadministratif, form_inscriptions.id_inscription, i_date, i_attentes, i_validation ";
		$sql .= "FROM form_participants ";
		$sql .= "JOIN form_inscriptions ON form_inscriptions.id_participant = form_participants.id_participant ";
		$sql .= "JOIN form_formations ON form_formations.id_formation = form_inscriptions.id_formation ";
		$sql .= "WHERE form_inscriptions.id_inscription = '$idinscription'";	
		$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
		return $envoi;
	}
	
	// voir liste_formules() #consultation
	
	########### EXPORT_PDF ###########
		
	function infos_inscription($idinscription)
	{
		$sql ="SELECT id_inscription, i_date, i_attentes, i_validation, id_participant, id_formation ";
		$sql .= "FROM form_inscriptions ";
		$sql .= "WHERE id_inscription = '$idinscription'";	
		$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
		return $envoi;
	}
	
	// voir infos_formation() #export_csv
	
	function infos_participant($idparticipant)
	{
		$sql ="SELECT p_civilite, p_nom, p_prenom, p_etablissement, p_fonction, p_adresse, p_cp, p_ville, p_pays, p_telephone, p_fax, p_mail, p_mailadministratif ";
		$sql .= "FROM form_participants ";
		$sql .= "WHERE id_participant = '$idparticipant'";	
		$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
		return $envoi;
	}
	
	function infos_hebergement($idhebergement)
	{
		$sql="SELECT fml_tarif, fml_duree, fml_descriptif FROM form_formules WHERE id_formule=$idhebergement";	
		$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
		return $envoi;
	}
		
###############################
######## CONSULTATION #########
###############################

/*
* Retourne le titre de la formation
* @param $idformation   =  identifiant de la formation
*/
function get_titre_formation($idformation)
{
	// Titre de la formation
	$sql="SELECT f_titre FROM form_formations WHERE id_formation='$idformation'";
	$res = mysql_query($sql)or die ('Erreur sur :' . $sql . ' <br />message retourn&eacute; : '.mysql_error().'');
	$fetch = mysql_fetch_assoc($res);
	mysql_free_result($res);
	return $fetch['f_titre'];			
}

function count_participants($idformation, $type_validation)
{
    $nb_participants = "SELECT COUNT(*) AS compteur FROM form_inscriptions WHERE id_formation = '$idformation'";
	if ($type_validation != "*")
		$nb_participants .= " AND i_validation = $type_validation";

	$res = mysql_query($nb_participants) or die ('Erreur sur :'.$nb_participants.' <br />message retourn&eacute; : '.mysql_error().'');; 
	$tab_nb_participants = mysql_fetch_array($res) ;
	mysql_free_result($res);
	//return $nb_participants;
    return $tab_nb_participants["compteur"];
}
	
function liste_formations($active) //liste des formations 
{
	$sql="SELECT id_formation, f_titre, f_annee FROM form_formations WHERE f_active = $active";			
	$envoi = mysql_query($sql)or die ('Erreur sur :' . $sql . ' <br />message retourn&eacute; : '.mysql_error().'');
	return $envoi;
}

function liste_formations_optgroup() //optgroup pour liste des formations 
{
	$sql="SELECT DISTINCT f_annee, f_active FROM form_formations";			
	$envoi = mysql_query($sql)or die ('Erreur sur :' . $sql . ' <br />message retourn&eacute; : '.mysql_error().'');
	return $envoi;
}

function liste_participants($idformation, $validation) // résultat envoyé vers les fonctions tableau_info_inscription, tableau_info_participant et export_pdf
{	
	$sql ="SELECT id_inscription, form_participants.id_participant, p_civilite, p_nom, p_prenom, p_etablissement, p_fonction, p_adresse, p_cp, p_ville, p_telephone, p_mail, p_mailadministratif, i_date, i_attentes, i_validation, i_classement ";
	$sql .= "FROM form_participants ";
	$sql .= "JOIN form_inscriptions ON form_inscriptions.id_participant = form_participants.id_participant ";
	$sql .= "JOIN form_formations ON form_formations.id_formation = form_inscriptions.id_formation ";
	if ($validation == 0 || $validation == 1 || $validation == 2)
	  {
		$sql .= "WHERE form_formations.id_formation = '$idformation' AND form_inscriptions.i_validation = '$validation'";
	  }
	  else
	  {
		$sql .= "WHERE form_formations.id_formation = '$idformation'";
	  }
	if ($validation == 0 || $validation == 2)
		$sql .= "ORDER BY i_classement";
	else		
		$sql .= "ORDER BY p_nom";
	$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
	return $envoi;
}

function liste_formules() // liste des formules d'hébergement
{
	$sql="SELECT * FROM form_formules";
	$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
	return $envoi;
}

function getInscriptionsFormules($idinscription) {
	$sql = "SELECT id_formule FROM form_inscriptions_formules WHERE id_inscription = $idinscription";
	$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
	return $envoi;
}
	
function total_inscriptions_par_annee($annee)
{
	$sql = "SELECT COUNT(id_inscription) AS total FROM form_inscriptions JOIN form_formations ON form_inscriptions.id_formation = form_formations.id_formation WHERE f_annee = '$annee'";
	$result = mysql_query($sql) or die('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
	$fetch = mysql_fetch_assoc($result);
	return $fetch['total'];
}

function total_participants_par_annee($annee)
{
	$sql = "SELECT COUNT(*) AS total FROM (SELECT DISTINCT p_nom, p_prenom FROM form_participants JOIN form_inscriptions ON form_inscriptions.id_participant = form_participants.id_participant JOIN form_formations ON form_inscriptions.id_formation = form_formations.id_formation WHERE f_annee = '$annee') as t1";
	$result = mysql_query($sql) or die('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
	$fetch = mysql_fetch_assoc($result);
	return $fetch['total'];
}

function liste_formations_par_annees($annee) //liste des formations 
{
	$sql="SELECT id_formation, f_titre, f_annee FROM form_formations WHERE f_annee = $annee";			
	$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
	return $envoi;
}
