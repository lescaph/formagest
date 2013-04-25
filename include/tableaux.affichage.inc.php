<?php

###############################
######## CONSULTATION #########
###############################


function tableau_info_inscription($envoi) // affichage du tableau avec liste des participants
{	
	// Création du tableau
		
	echo '<table>
              <th>Nom</th>
              <th>Pr&eacute;nom</th>
              <th>&Eacute;tablissement</th>
              <th>Date d\'inscription</th>
              <th>Formule</th>
              <th>Attentes</th>
              <th>Validation</th>
              <th><img src="IMG/tools_50.png"/></th>';
	
	global $idformation;
	
	while($fetch = mysql_fetch_assoc($envoi))
	{	
	  	// Contenu de la case Validation
		$validation_contenu  = "<a href='" . $_SERVER['PHP_SELF'] . "?formation=" . $idformation . "&inscription=" . $fetch['id_inscription'] . "&validation=" .  STATUT_VALIDE     . "'><img src=\"IMG/puce_verte.png\" /></a> ";
		$validation_contenu .= "<a href='" . $_SERVER['PHP_SELF'] . "?formation=" . $idformation . "&inscription=" . $fetch['id_inscription'] . "&validation=" .  STATUT_EN_ATTENTE . "'><img src=\"IMG/puce_orange.png\" /></a> ";
		$validation_contenu .= "<a href='" . $_SERVER['PHP_SELF'] . "?formation=" . $idformation . "&inscription=" . $fetch['id_inscription'] . "&validation=" .  STATUT_ANNULEE    . "'><img src=\"IMG/puce_rouge.png\" /></a>";
		
		// Contenu de la case 'Outils'
		$outils_contenu  = "<a href='" . $_SERVER['PHP_SELF'] . "?formation=" . $idformation . "&inscription=" . $fetch['id_inscription'] . "&action=sendmail' target='_blank'><img src='IMG/btnMail.png' title='Envoyer la confirmation' /></a>";
		$outils_contenu .= "<a href='" . $_SERVER['PHP_SELF'] . "?formation=" . $idformation . "&inscription=" . $fetch['id_inscription'] . "&action=edit' target='_blank'><img src='IMG/edit.png' title='Editer les informations' /></a>";
		$outils_contenu .= "<a href='" . $_SERVER['PHP_SELF'] . "?formation=" . $idformation . "&inscription=" . $fetch['id_inscription'] . "&action=export_pdf&type_pdf=inscription'><img id='img_pdf_inscription' src='IMG/pdf.png' title='PDF inscription'/></a>";
		$outils_contenu .= "<a href='" . $_SERVER['PHP_SELF'] . "?formation=" . $idformation . "&inscription=" . $fetch['id_inscription'] . "&action=export_pdf&type_pdf=confirmation' class='formulaire_confirmation'><img src='IMG/confirmation.gif' title='PDF confirmation'/></a>";
		$outils_contenu .= "<a href='" . $_SERVER['PHP_SELF'] . "?formation=" . $idformation . "&inscription=" . $fetch['id_inscription'] . "&action=export_pdf&type_pdf=devis'><img src='IMG/dollar.png' title='DEVIS'/></a>";
        $outils_contenu .= "<a href='" . $_SERVER['PHP_SELF'] . "?formation=" . $idformation . "&inscription=" . $fetch['id_inscription'] . "&action=delete'><img src='IMG/poubelle.png' title='Supprimer' onclick=\"return confirm('Confirmer la suppression ?')\"/></a>";

		// Contenu de la case 'classement'
		//$i_classement = $fetch['i_classement'];
		//$id_inscription = $fetch['id_inscription'];
		
		//$classement_contenu = "<form name='form_up".$id_inscription."' action='".$_SERVER['PHP_SELF']."?formation=".$idformation."'>".classement_miseajour($i_classement, classement_up(classement_tableau($idformation), $i_classement),$idformation,$id_inscription)."</form>";
		//$classement_contenu .= "<button type='submit' onClick=\"javascript:form_up".$id_inscription.".submit();return false;\"><img src='IMG/upDownArrow.png' title='monter' /></button>";
		//$classement_contenu .= "<button type='submit' onClick=\"javascript:classement_miseajour($i_classement, classement_down(classement_tableau($idformation), $i_classement),$idformation,$id_inscription);\"><img src='IMG/downUpArrow.png' title='descendre' /></button>";
		//$classement_contenu .= $i_classement;

		$formules = getInscriptionsFormules($fetch['id_inscription']);
		$formules_choisies = '';
		while($data = mysql_fetch_assoc($formules)){
			$formules_choisies .= $data['id_formule'] . ' ';
		}
				
		if (get_magic_quotes_gpc())
		{
			echo "<tr id=" . $fetch['id_inscription'] .                ">
					  <td>"  . stripslashes($fetch['p_nom']) .           "</td>
					  <td>"  . stripslashes($fetch['p_prenom']) .        "</td>
					  <td>"  . stripslashes($fetch['p_etablissement']) . "</td>
					  <td>"  . $fetch['i_date'] .                        "</td>
					  <td>"  . $formules_choisies .                      "</td>
					  <td>"  . stripslashes($fetch['i_attentes']) .      "</td>";
		}
		else 
		{
			echo "<tr id="  . $fetch['id_inscription'] .  ">
					  <td>" . $fetch['p_nom'] .           "</td>
			          <td>" . $fetch['p_prenom'] .        "</td>
			          <td>" . $fetch['p_etablissement'] . "</td>
			          <td>" . $fetch['i_date'] .          "</td>
			          <td>" . $formules_choisies .        "</td>
			          <td>" . $fetch['i_attentes'] .      "</td>";
		}
		echo "<td>$validation_contenu</td>";
		//echo "<td>$classement_contenu</td>";
		echo "<td class='td_outils_contenu'>$outils_contenu</td></tr>";
	}
	echo "</table>";
}

function tableau_info_participant($envoi) // tableau avec liste des participants et informations sur les participants
{		
	echo '<table>
              <th>Civilit&eacute;</th>
              <th>Nom</th>
              <th>Pr&eacute;nom</th>
              <th>&Eacute;tablissement</th>
              <th>Fonction</th>
              <th>adresse</th>
              <th>Code Postal</th>
              <th>Ville</th>
              <th>T&eacute;l&eacute;phone</th>
              <th>Mail</th>';
	while($fetch = mysql_fetch_assoc($envoi)) {

		$civilite = civilite($fetch['p_civilite']);
		 		
	    if (get_magic_quotes_gpc()) {
		echo "<tr><td>".$civilite."</td>
		      <td>".stripslashes($fetch['p_nom'])."</td>
		      <td>".stripslashes($fetch['p_prenom'])."</td>
		      <td>".stripslashes($fetch['p_etablissement'])."</td>
		      <td>".stripslashes($fetch['p_fonction'])."</td>
		      <td>".stripslashes($fetch['p_adresse'])."</td>
		      <td>".stripslashes($fetch['p_cp'])."</td>
		      <td>".stripslashes($fetch['p_ville'])."</td>
		      <td>".stripslashes($fetch['p_telephone'])."</td>
		      <td>".stripslashes($fetch['p_mail'])."</td></tr>";
		} else {
		echo "<tr><td>".$civilite."</td>
		      <td>".$fetch['p_nom']."</td>
		      <td>".$fetch['p_prenom']."</td>
		      <td>".$fetch['p_etablissement']."</td>
		      <td>".$fetch['p_fonction']."</td>
		      <td>".$fetch['p_adresse']."</td>
		      <td>".$fetch['p_cp']."</td>
		      <td>".$fetch['p_ville']."</td>
		      <td>".$fetch['p_telephone']."</td>
		      <td>".$fetch['p_mail']."</td></tr>";
		}
	}
	echo "</table>";
}
?>	
