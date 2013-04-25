<?php
echo '<input type="button" value="Fermer la fen&ecirc;tre" onClick="self.close()" name="fermer"/>';
if (isset($_GET['inscription']) && is_numeric($_GET['inscription'])){
    $idinscription = $_GET['inscription'];
    if(isset($_GET['formation'])) $idformation = $_GET['formation'];
	
	// récupération des infos sur les participants
	$envoi = getInfosParticipantsViaIdinscription($idinscription);
	
	$rows = mysql_num_rows($envoi);
	$fetch = mysql_fetch_assoc($envoi);
	
	if(isset($rows)){
		
?>
		<div id="conteneur">
			<div id="wrap">
				<div id="contenu" style="text-align :left;">
					<form id="form_envoi_mail" name="form_envoi_mail" action="<?php echo $_SERVER['PHP_SELF'].'?inscription=' . $idinscription; ?>" method="post">
						De : <input type="text" size="30" value="laure.ferdjani@u-bourgogne.fr" name="mail_expediteur"/>
						&Agrave; : <input type="text" size="30" value="<?php echo $fetch['p_mail']; ?>" name="mail_destinataire"/>
						<br />
						<br />
						<?php
						include('sendmail_templates/sendmail12.tpl.php');
						echo $message_texte;
						?>
						<br />
						<br />
						<input type="submit" value="Envoyer le mail" name="submit_form_envoi_mail"/>
					</form>	
					<br />
				</div>
			</div>
		</div>
<?php
	}
    if(isset($_POST['submit_form_envoi_mail'])){
        // Destinataire
        $to = $_POST['mail_destinataire'];
        // En-têtes de l'e-mail
        $headers ='From: Laure Ferdjani <' . $_POST["mail_expediteur"] . '>'."\r\n";
        $headers .= 'Bcc: Moi <' . $_POST["mail_expediteur"].'>' . "\r\n";
        $headers .='Reply-To: ' . $_POST["mail_expediteur"] . "\r\n";
        $headers .='Content-Type: text/html; charset="iso-8859-1"' . "\r\n";
        $headers .='Content-Transfer-Encoding: 8bit';
        $headers .= "\r\n";
        // Envoi de l'e-mail
        if (mail($to, "Votre participation aux JE des 12 et 13 mai", $message_texte, $headers)){
            // On détruit la variable $_POST
            unset($_POST);
            echo "<script>alert(\"mail envoy\351\");</script>";
            //echo print_r($_GET);
            //redirige("../index.php?formation=$idformation");  
        } else {
            $alert = 'Erreur d\'envoi des informations';
        } 			
    }	
}

else echo "Pas d'information sur cette page";	
?>
