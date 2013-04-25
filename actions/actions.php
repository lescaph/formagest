<?php
//Traitement des paramètres de l'url suite aux actions passées dans la page consultation.php

	########### ACTIONS ###########
	if (isset($_GET['action']))
	{			
			########### GESTION ###########
			if ($_GET['action'] == 'gestion') 
			{	
			  	redirige("index.php?page=gestion");
			}
			 
			elseif(isset($_GET['formation']))
			{
				$idformation = $_GET['formation'];
				
				
					########### EXPORT_CSV ###########
					// Export d'une fiche en csv
					if ($_GET['action'] == 'export_csv') 
					{	
						redirige("actions/export_csv.php?formation=$idformation");
					}
					// Actions sur une inscription  
					elseif (isset($_GET['inscription'])) 
					{	
							$idinscription = $_GET['inscription'];
							
							########### DELETE ###########
							// Effacement des infos inscriptions
							if ($_GET['action'] == 'delete')
							{
								$idparticipant = getIdParticipant($idinscription);
								$sql="DELETE FROM form_inscriptions WHERE id_inscription=$idinscription";
								$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
								$sql="DELETE FROM form_inscriptions_formules WHERE id_inscription=$idinscription";
								$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
								$sql="DELETE FROM form_participants WHERE id_participant=$idparticipant";
								$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
                                redirige("index.php?formation=$idformation&inscription=$idinscription");
							}
							  
							########### EXPORT_PDF ###########
							// Export d'une fiche en pdf
							elseif (($_GET['action'] == 'export_pdf') && isset($_GET['type_pdf'])) 
                            {
                                redirige("actions/export_pdf.php?inscription=$idinscription&type=".$_GET['type_pdf']);
                            }
                              
											  
							########### EDIT ###########
							// Editer et modifier une fiche
							elseif ($_GET['action'] == 'edit') 
							{
								redirige("index.php?page=edit&inscription=$idinscription"); 
							}

							########### SENDMAIL ###########
							// Envoyer un mail récapitulatif
							elseif ($_GET['action'] == 'sendmail') 
							{
								redirige("index.php?page=sendmail&inscription=$idinscription"); 
							}
					}    
			}	  	  	  
	}  
	########### VALIDATION ###########
	// Ajout de l'option de validation si paramètre validation = 1 ou 0 ou 2 et rechargement de la page
	if (isset($_GET['inscription']) && isset($_GET['validation']) && in_array($_GET['validation'], array(0, 1, 2)))
	{
		$validation = $_GET['validation'];
		$idinscription = $_GET['inscription'];
        $idformation = $_GET['formation'];
		$sql="UPDATE form_inscriptions SET i_validation = '$validation' WHERE id_inscription='$idinscription'";
		$envoi = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
		redirige("index.php?formation=$idformation&inscription=$idinscription");
	}	
?>	  
