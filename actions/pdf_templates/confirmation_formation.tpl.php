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
		$pdf->Cell(135);
		$pdf->SetFont('Arial','',10);
		$pdf->Write(8,'Dijon, le '.$datefr);
		$pdf->Ln(15);
		$pdf->RotatedText(14,110,'Office de coopération et d\'information muséales',90);
		$pdf->SetX(120);
		$pdf->MultiCell(0,6,$civilite." ".$prenom." ".$nom."\n".$etablissement."\n".$adresse."\n".$cp." ".$ville."\n",1,'L');
		$pdf->Ln(10);
		$pdf->SetFont('Arial','',10);
		$pdf->SetLeftMargin(55);
		$pdf->Write(6,$type_formation.' de l\'OCIM');
		$pdf->Ln();
		$pdf->Write(6,$titre_formation);
		$pdf->Ln();
		$pdf->Write(6,$lieux_formation.", ".$date_formation." ".$annee_formation.".");
		$pdf->Ln(15);		
		$pdf->Write(6,$civilite.",");
		$pdf->Ln(10);
		$pdf->Write(6,'J\'ai le plaisir de vous confirmer votre inscription '.$preposition_a.' '.$type_formation.' "');
		$pdf->SetFont('','B');
		$pdf->Write(6,$titre_formation);
		$pdf->SetFont('','');
		$pdf->Write(6,'" organisé'.$terminaison_feminin_e.' par l\'OCIM à '.$lieux_formation.', le(s) '.$date_formation.' '.$annee_formation.'.');
		$pdf->Ln();
		$pdf->Write(6,'Je vous rappelle que lors de votre préinscription, vous avez opté pour le forfait à '.$hebergement_info.'.');
		$pdf->Ln(10);
		$pdf->Write(6,'Vous trouverez ci-joint(s) :');
		$pdf->Ln();
		$pdf->Cell(10);
		$pdf->SetFont('Zapfdingbats','',10);
		$pdf->Write(6,'é ');
		$pdf->SetFont('Arial','',10);
		$pdf->SetFont('','B');
		$pdf->Write(6,'Le programme ');
		$pdf->SetFont('','');
		$pdf->Write(6,'de la formation.');
		$pdf->Ln();
		$pdf->Cell(10);
		$pdf->SetFont('Zapfdingbats','',10);
		$pdf->Write(6,'é ');
		$pdf->SetFont('Arial','',10);
		$pdf->SetFont('','B');
		$pdf->Write(6,'Votre formulaire de pré-inscription ');
		$pdf->SetFont('','');
		$pdf->Write(6,'à compléter pour validation du dossier.');
		$pdf->Ln();
		$pdf->Cell(10);
		$pdf->SetFont('Zapfdingbats','',10);
		$pdf->Write(6,'é ');
		$pdf->SetFont('Arial','',10);
		$pdf->SetFont('','B');
		$pdf->Write(6,'Une fiche logistique ');
		$pdf->SetFont('','');
		$pdf->Write(6,'à compléter et à retourner au plus vite.');
		$pdf->Ln(10);
		$pdf->Write(6,'Un courriel présentant toutes les informations pratiques vous sera transmis une semaine avant le séminaire.');
		$pdf->Ln(10);
		$pdf->Write(6,'Si vous étiez dans l\'impossibilité de suivre ce séminaire, je vous remercie de bien vouloir m\'en informer au plus vite.');
		$pdf->Ln(10);
		$pdf->Write(6,'Avec mes meilleures salutations.');
		$pdf->Ln();
		$pdf->Write(6,'Laure FERDJANI,');
		$pdf->Ln();
		$pdf->Write(6,'Responsable Logistique.');
        if (isset($_GET['signature']) && $_GET['signature'] == 1) {
            $pdf->Ln(6);
            $pdf->Image('../IMG/signature_LFerdjani-150.jpg', 80, 240);
		}		
		$pdfname = 'confirmation'.$datepdf.'-id'.$nom.'.pdf';
		//$pdfpath = "output";
		$pdf->Output("$pdfname", "I");
?>		
