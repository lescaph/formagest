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
        $this->SetXY(55,230);
        $this->SetLeftMargin(55);
        $this->SetFontSize(10);
        $this->Write(6,"L'OCIM est reconnu en tant qu'organisme de formation public sous le n°26.21.P0016.21.");
        $this->Ln();
        $this->Write(6,"N° de SIRET : 192 112 373 00449 / Code APE 803 Z");
        $this->Ln(10);
        $this->SetTextColor(204,0,0);
        $this->SetFont('','I',8);
        $this->Write(4,"Attention ! Une demande de devis n'est pas une demande d'inscription.");
        $this->Ln();
        $this->Write(4,"Pour vous pré-inscrire en ligne : http://www.ocim.fr.");
        $this->SetFont('','');
        $this->Ln(10);
        $this->SetX(120);
        $this->SetTextColor(0,0,0);
        $this->MultiCell(0,4,"Ministère de l'Enseignement supérieur et de la Recherche\nUniversité de Bourgogne",0,'R');        
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
		$pdf->Ln(10);
		$pdf->RotatedText(14,110,'Office de coopération et d\'information muséales',90);
		$pdf->SetX(130);
        $pdf->SetFont('','B',12);
        $pdf->MultiCell(0,6,$etablissement,0,'L');
		$pdf->SetFont('','');
        $pdf->SetX(130);
        $pdf->MultiCell(0,6,$adresse."\n".$cp." ".$ville."\n",0,'L');
		$pdf->Ln(20);
		$pdf->SetFont('Arial','',15);
        $pdf->SetX(85);
        $pdf->SetFont('','B');
		$pdf->Write(6,'DEVIS DE FORMATION');
        $pdf->Ln(15);
		$pdf->SetFont('','',12);
		$pdf->SetLeftMargin(55);
		$pdf->Write(6,'Participation de ');
        $pdf->SetFont('','B');
        $pdf->Write(6,$civilite.' '.$prenom.' '.$nom.',');
        $pdf->SetFont('','');
		$pdf->Ln(15);
		$pdf->Write(6,$preposition_a_maj.' '.$type_formation.' "');
		$pdf->SetFont('','B');
		$pdf->Write(6,$titre_formation);
		$pdf->SetFont('','');
		$pdf->Write(6,'" organisé'.$terminaison_feminin_e.' par l\'OCIM à ');
        $pdf->SetFont('','B');
		$pdf->Write(6,$lieux_formation);
		$pdf->SetFont('','');
        $pdf->Write(6,', le(s) ');
        $pdf->SetFont('','B');
		$pdf->Write(6,$date_formation.' '.$annee_formation);
		$pdf->SetFont('','');
        $pdf->Ln(15);
        $pdf->SetLeftMargin(105);
        $pdf->SetFont('','B',13);
		$pdf->Write(6,'coût total : ');
        $pdf->SetX(150);
        $pdf->SetRightMargin(30);
        $pdf->Write(6,utf8_decode($info_formule['fml_tarif']));
        $pdf->SetRightMargin(10);
		$pdf->SetFont('','',10);
        $pdf->Ln(15);
        $pdf->SetLeftMargin(115);
        $pdf->MultiCell(0,6,"Fait à Dijon, le ".$datefr."\n\nLaure FERDJANI\nResponsable Logistique",0,'R');        
        if (isset($_GET['signature']) && $_GET['signature'] == 1) {
            $pdf->Ln(6);
            $pdf->Image('../IMG/signature_LFerdjani-150.jpg', 80, 240);
		}		
		$pdfname = 'confirmation'.$datepdf.'-id'.$nom.'.pdf';
		//$pdfpath = "output";
		$pdf->Output("$pdfname", "I");
?>		
