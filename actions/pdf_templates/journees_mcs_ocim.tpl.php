<?php

class PDF extends PDF_Rotate
{
	function RotatedText($x,$y,$txt,$angle)
	{
		//Rotation du texte autour de son origine
		$this->Rotate($angle,$x,$y);
		$this->Text($x,$y,$txt);
		$this->Rotate(0);
	}

	function RotatedImage($file,$x,$y,$w,$h,$angle)
	{
		//Rotation de l'image autour du coin supérieur gauche
		$this->Rotate($angle,$x,$y);
		$this->Image($file,$x,$y,$w,$h);
		$this->Rotate(0);
	}

	//En-tête
	function Header()
	{	
	    //Logo
	    $this->Image('../IMG/logo-ocim.png',5,12,40);
	}

	//Pied de page
	function Footer()
	{
		$this->SetLeftMargin(10);
	    $this->SetY(-160);
	    //Police Arial italique 8
	    $this->SetFont('Arial','',8);
		$this->MultiCell(35,5,"OCIM\nUniversité de Bourgogne\n36 rue Chabot Charny\n21000 Dijon\nFrance\n\nTéléphone\n03 80 58 98 50\nFax\n03 80 58 98 58\n\nSite internet\nwww.ocim.fr\n\nCourriel",0,'L');
		$this->Write(5,'laure.ferdjani@u-bourgogne.fr');
		$this->Image('../IMG/Ministere_Enseignement_Superieur.jpg',15,220,20);
		$this->Image('../IMG/Logo_UB.jpg',13,246,25);
	}

}
		//Instanciation de la classe dérivée
		$pdf=new PDF();
		$pdf->AliasNbPages();
		$pdf->AddPage();
		$pdf->SetXY(0,0);
		$pdf->Ln(25);
		$pdf->Cell(150);
		$pdf->SetFont('Arial','',10);
		$pdf->Write(8,'Dijon, le '.$datefr);
		$pdf->Ln(25);
		$pdf->RotatedText(14,110,'Office de coopération et d\'information muséales',90);
		$pdf->SetX(120);
		$pdf->MultiCell(0,6,$civilite." ".$prenom." ".$nom."\n".$etablissement."\n".$adresse."\n".$cp." ".$ville."\n",0,'L');
		$pdf->Ln(10);
		$pdf->SetFont('Arial','',10);
		$pdf->SetLeftMargin(55);
		$pdf->Write(8,$civilite." ".$prenom." ".$nom.",");
		$pdf->Ln(10);
		$pdf->Write(6,'J\'ai le plaisir de vous confirmer votre inscription aux journées d\'études organisées par la Mission Culture scientifique et l\'OCIM à Dijon les 12 et 13 mai 2011.');
		$pdf->Ln(10);
		$pdf->Write(8,'Conformément aux informations que vous nous avez transmises, vous participerez à :');
		$pdf->Ln(10);
		$pdf->SetFont('','B');
		$pdf->Write(8,'JEUDI 12 MAI : Centre des Sciences du Goût');
		$pdf->SetFont('','');
		$pdf->Ln(8);
		$journee_sans_formule = true;
		$liste_formules = getInscriptionsFormules($idinscription);	
		while($formule = mysql_fetch_assoc($liste_formules)){
			// récupération des informations d'hébergement pour chaque formule
			if($formule['id_formule'] == 20 || $formule['id_formule'] == 21 || $formule['id_formule'] == 22)
			{
				$infos_formule = infos_hebergement($formule['id_formule']);
				$info_formule = mysql_fetch_assoc($infos_formule);
				$hebergement_info = $info_formule['fml_tarif'].", ".$info_formule['fml_descriptif'];
				// Affichage dans le pdf
				$pdf->SetFont('Zapfdingbats','',10);
				$pdf->Write(8,'r');
				$pdf->SetFont('Arial','',10);
				$pdf->Write(6,' '.$hebergement_info);
				$pdf->Ln(6);
				$journee_sans_formule = false;
			}		
		}
		if($journee_sans_formule)
		{
			$pdf->SetFont('Arial','',10);
			$pdf->Write(6,'Vous n\'avez pas choisi de sessions pour cette journée.');
		}
		$pdf->Ln(10);
		$pdf->SetFont('','B');
		$pdf->Write(8,'VENDREDI 13 MAI : Atheneum');
		$pdf->SetFont('','');
		$pdf->Ln(8);
		$journee_sans_formule = true;
		$liste_formules = getInscriptionsFormules($idinscription);	
		while($formule = mysql_fetch_assoc($liste_formules)){
			// récupération des informations d'hébergement pour chaque formule
			if($formule['id_formule'] == 23 || $formule['id_formule'] == 24 || $formule['id_formule'] == 25 || $formule['id_formule'] == 26)
			{
				$infos_formule = infos_hebergement($formule['id_formule']);
				$info_formule = mysql_fetch_assoc($infos_formule);
				$hebergement_info = $info_formule['fml_tarif'].", ".$info_formule['fml_descriptif'];
				// Affichage dans le pdf
				$pdf->SetFont('Zapfdingbats','',10);
				$pdf->Write(8,'r');
				$pdf->SetFont('Arial','',10);
				$pdf->Write(6,' '.$hebergement_info);
				$pdf->Ln(6);
				$journee_sans_formule = false;
			}
		}
		if($journee_sans_formule)
		{
			$pdf->SetFont('Arial','',10);
			$pdf->Write(6,'Vous n\'avez pas choisi de sessions pour cette journée.');
			$pdf->Ln(6);
		}
		$pdf->Ln(4);
		$pdf->Write(6,'Je vous rappelle que la participation à ces journées d\'études est gratuite. Les éventuels frais de déplacement et de séjour (nuitées et repas du soir) sont à votre charge.');
		$pdf->Ln(6);
		$pdf->Write(6,'Si vous étiez dans l\'impossibilité de participer à ces journées, je vous remercie de bien vouloir m\'en informer au plus vite.');
		$pdf->Ln(10);
		$pdf->Write(6,'Vous trouverez ci-joint les informations nécessaires pour vous rendre aux journées d\'études.');
		$pdf->Ln(10);
		$pdf->Write(6,'Au plaisir de vous accueillir à la mi-mai,');
		$pdf->Ln(10);
		$pdf->Write(6,'Laure FERDJANI,');
		$pdf->Ln();
		$pdf->Write(8,'Responsable de la Logistique');		
		$pdfname = $datepdf.'-id'.$nom.'.pdf';
		//$pdfpath = "output";
		$pdf->Output("$pdfname", "I");
?>		
