<?php

$message_texte = 'Bonjour,<p />';
$message_texte .=  '<br />';
$message_texte .=  'Les 12 et 13 mai 2011 approchent...<br />';	
$message_texte .=  '<br />';
$message_texte .=  'Nous aurons le plaisir de vous accueillir aux Journ&eacute;es d&rsquo;&eacute;tudes &laquo; La vulgarisation scientifique : quel(s) effet(s) pour le chercheur ? &raquo; organis&eacute;es par l&rsquo;universit&eacute; de Bourgogne : Mission Culture Scientifique, OCIM et CIMEOS (http://www.ocim.fr/La-vulgarisation-scientifique-quel).<br />';
$message_texte .=  '<br />';

$message_texte .='Conform&eacute;ment aux informations que vous nous avez transmises, vous participerez &agrave; :';
$message_texte .=  '<br /><br />';
$message_texte .= 'JEUDI 12 MAI : Centre des Sciences du Go&ucirc;t';
$message_texte .=  '<br />';
$journee_sans_formule = true;
$liste_formules = getInscriptionsFormules($idinscription);	
while($formule = mysql_fetch_assoc($liste_formules)){
	// récupération des informations d'hébergement pour chaque formule
	if($formule['id_formule'] == 20 || $formule['id_formule'] == 21 || $formule['id_formule'] == 22)
	{
		$infos_formule = infos_hebergement($formule['id_formule']);
		$info_formule = mysql_fetch_assoc($infos_formule);
		$message_texte .= $info_formule['fml_tarif'].", ".$info_formule['fml_descriptif']."<br />";
		$journee_sans_formule = false;
	}		
}
if($journee_sans_formule)
{
	$message_texte .= 'Vous n&rsquo;avez pas choisi de sessions pour cette journ&eacute;e.<br />';
}
$message_texte .= '<br />';
$message_texte .='VENDREDI 13 MAI : Atheneum';
$message_texte .=  '<br />';
$journee_sans_formule = true;
$liste_formules = getInscriptionsFormules($idinscription);	
while($formule = mysql_fetch_assoc($liste_formules)){
	// récupération des informations d'hébergement pour chaque formule
	if($formule['id_formule'] == 23 || $formule['id_formule'] == 24 || $formule['id_formule'] == 25 || $formule['id_formule'] == 26)
	{
		$infos_formule = infos_hebergement($formule['id_formule']);
		$info_formule = mysql_fetch_assoc($infos_formule);
		$message_texte .= $info_formule['fml_tarif'].", ".$info_formule['fml_descriptif']."<br />";
		$journee_sans_formule = false;
	}
}
if($journee_sans_formule)
{
	$message_texte .= 'Vous n&rsquo;avez pas choisi de sessions pour cette journ&eacute;e.<br />';
}

$message_texte .=  '<br />';
$message_texte .=  'Nous vous signalons d&egrave;s maintenant que ces deux journ&eacute;es d&rsquo;&eacute;tudes feront l&rsquo;objet d&rsquo;une captation vid&eacute;o, dans le but d&rsquo;une diffusion ult&eacute;rieure sur le site de l&rsquo;OCIM.<br />';
$message_texte .=  '<br />';
$message_texte .=  'Si vous avez la moindre question, n&rsquo;h&eacute;sitez pas &agrave; m&rsquo;en faire part.<br />';
$message_texte .=  '<br />';
$message_texte .=  'Au plaisir de vous rencontrer tr&egrave;s prochainement !<br />';
$message_texte .=  '<br />';
$message_texte .=  'Bien cordialement,<br />';
$message_texte .=  '<br />';
$message_texte .=  '---<br />';
$message_texte .=  '<br />';
$message_texte .=  'Laure FERDJANI<br />';
$message_texte .=  'Responsable Logistique<br />';
$message_texte .=  'OCIM - Universit&eacute; de Bourgogne<br />';
$message_texte .=  '36, rue Chabot Charny<br />';
$message_texte .=  '21000 Dijon<br />';
$message_texte .=  'T&eacute;l. : 03.80.58.98.50<br />';
$message_texte .=  'Fax : 03.80.58.98.58<br />';
$message_texte .=  'M&eacute;l : laure.ferdjani@u-bourgogne.fr<br />';
$message_texte .=  'Site : www.ocim.fr<br />';
?>
