<?php

class PDF extends FPDF
{
	//En-t�te
	function Header()
	{
	    //Police Arial gras 15
	    $this->SetFont('Arial', 'B', 15);
	    //Titre
	    $this->Cell(30,10,'FORMATION', 0, 0);	
	    //Logo
	    $this->Image('../IMG/logo-ocim.png', 170, 3, 33);
	    //Ligne
	    $this->Line(10, 15, 170, 15);
	    //Saut de ligne
	    $this->Ln(15);
	}

	//Pied de page
	function Footer()
	{
	    //Positionnement � 1,5 cm du bas
	    $this->SetY(-15);
	    //Police Arial italique 8
	    $this->SetFont('Arial', 'I', 8);
	    //Num�ro de page
	    $this->Cell(0,10, "OCIM - Universit� de Bourgogne - 36 rue Chabot Charny 21000 Dijon - T�l 03 80 58 98 50 - Fax 03 80 58 98 58", 0, 0, 'C');
	}
}
		//Instanciation de la classe d�riv�e
		$pdf=new PDF();
		$pdf->SetTopMargin(7);
		$pdf->AliasNbPages();
		$pdf->AddPage();
		$pdf->SetFillColor(200); //niveau de gris en remplissage
		//chap�
		$pdf->SetFont('Zapfdingbats', 'B', 12);
		$pdf->Write(8, 'r');
		$pdf->SetFont('Arial', 'B', 12);
		$pdf->Write(8, ' INSCRIPTION');
		$pdf->Ln();
		$pdf->SetFont('Arial', '', 12);
		$pdf->Write(6,"a obtenu l'accord de prise\nen charge et s'inscrit �");
		$pdf->Cell(20);
		$y=$pdf->GetY();
		$x=$pdf->GetX();
		$pdf->SetXY($x, $y-12);
		$pdf->MultiCell(0, 6, $titre_formation . "\n- " . $type_formation . " -\n\n" . $lieux_formation . ", " . $date_formation . " " . $annee_formation, 1, 'L');
		$pdf->Ln();
		// Ligne contact
		$pdf->Cell(15);
		$pdf->SetFont('Arial', 'I', 10);
		$pdf->Write(8,'Merci de contacter ');
		$pdf->SetTextColor(0,0,255);
		$pdf->SetFont('', 'U');
		$pdf->Write(8, 'formation.ocim@u-bourgogne.fr', 'mailto:formation.ocim@u-bourgogne.fr');
		$pdf->SetTextColor(0,0,0);
		$pdf->SetFont('', 'I');
		$pdf->Write('8',' pour v�rifier le nombre de places disponibles');
		$pdf->Ln(10);
		// Partie stagiaire
		$pdf->SetFont('Arial', '', 15);
		$pdf->Cell(0, 8, 'Stagiaire', 1, 1, 'L', true);
		$pdf->SetFontSize(10);
		//$pdf->Write(8,'NOM : ');
		$pdf->SetFont('','B');
		$pdf->Write(8, $civilite . ' ' . $prenom . ' ' . $nom);
		$pdf->SetFont('','');
		$pdf->Ln(6);
		$pdf->Write(8,'�tablissement : ');
		$pdf->SetFont('','B');
		$pdf->Write(8,$etablissement);
		$pdf->SetFont('','');
		$pdf->Ln(6);
		$pdf->Write(8,'Fonction : ');
		$pdf->SetFont('','B');
		$pdf->Write(8,$fonction);
		$pdf->SetFont('','');
		$pdf->Ln(6);
		$pdf->Write(8,'Adresse : ');
		$pdf->SetFont('','B');
		$pdf->Write(8,$adresse.' '.$cp.' '.$ville.' '.$pays);
		$pdf->SetFont('','');
		$pdf->Ln(6);
		$pdf->Write(8,'T�l�phone : ');
		$pdf->SetFont('','B');
		$pdf->Write(8,$telephone);
		$pdf->SetFont('','');
		$pdf->SetX(100);
		$pdf->Write(8,'T�l�copieur : ');
		$pdf->SetFont('','B');
		$pdf->Write(8,$fax);
		$pdf->SetFont('','');
		$pdf->Ln(6);
		$pdf->Write(8,'Courriel : ');
		$pdf->SetFont('','B');
		$pdf->Write(8,$mail);
		$pdf->SetFont('','');
		$pdf->Ln(8);
		$pdf->Write(5,'Vos attentes pour cette formation : ');
		$pdf->SetFontSize(get_element_xml('taille', 'formulaire.xml'));
		$pdf->Write(5,$attentes);
		$pdf->SetFontSize(10);
		$pdf->Ln(6);
		$pdf->Write(8,'� ..................................................... le .......................');
		$pdf->SetX(100);
		$pdf->Write(8,'� ..................................................... le .......................');
		$pdf->Ln(10);
		$pdf->Write(8,'Signature du participant :');
		$pdf->SetX(100);
		$pdf->Write(8,'Signature du responsable de l\'�tablissement :');
		$pdf->Ln(16);
		// Partie organisme financeur
		$pdf->SetFontSize(15);
		$pdf->Cell(0, 8,'Organisme financeur',1,1,'L',true);
		$pdf->SetFont('Zapfdingbats','',10);
		$pdf->Write(8,'r');
		$pdf->SetFont('Arial','',10);
		$pdf->Write(8,' organisme priv�');
		$pdf->Cell(10);
		$pdf->SetFont('Zapfdingbats','',10);
		$pdf->Write(8,'r');
		$pdf->SetFont('Arial','',10);
		$pdf->Write(8,' organisme public');
		$pdf->Ln();
		$pdf->Write(8,'Nom de l\'organisme :');
		$pdf->Ln(6);
		$pdf->Write(8,'Contact :');
		$pdf->SetX(100);
		$pdf->Write(8,'Courriel : ');
        $pdf->SetFont('','B');
		$pdf->Write(8, $mailadministratif);
		$pdf->SetFont('','');
		$pdf->Ln(6);
		$pdf->Write(8,'T�l�phone :');
		$pdf->SetX(100);
		$pdf->Write(8,'T�l�copieur :');
		$pdf->Ln(10);
		$pdf->Write(5,'Si vous souhaitez qu\'une');
		$pdf->SetFont('Arial','B',10);
		$pdf->Write(5,' convention de formation');
		$pdf->SetFont('Arial','',10);
		$pdf->Write(5,' soit �tablie par l\'OCIM-Universit� de Bourgogne, merci de pr�ciser');
		$pdf->SetFont('Arial','B',10);
		$pdf->Write(5,' toutes');
		$pdf->SetFont('Arial','',10);
		$pdf->Write(5,' les informations suivantes :');
		$pdf->Ln(6);
		$pdf->Write(8,'Nom, pr�nom et fonction du signataire :');
		$pdf->Ln(6);
		$pdf->Write(8,'Statut de l\'organisme :');
		$pdf->Ln(6);
		$pdf->Write(8,'Organisme et adresse compl�te :');
		$pdf->Ln(10);
		$pdf->SetFont('Arial','B',10);
		$pdf->Write(8,'Formule(s) ');
		$pdf->SetFont('Arial','',10);
		$pdf->Write(8,'(choisie(s) � la pr�inscription) :');
		$pdf->Ln(6);
		// r�cup�ration des formules choisies
		$liste_formules = getInscriptionsFormules($idinscription);
		while($formule = mysql_fetch_assoc($liste_formules)){
			// r�cup�ration des informations d'h�bergement pour chaque formule
			$infos_formule = infos_hebergement($formule['id_formule']);
			$info_formule = mysql_fetch_assoc($infos_formule);
			$hebergement_info = utf8_decode($info_formule['fml_tarif']).", (".utf8_decode($info_formule['fml_descriptif']).")";
			// Affichage dans le pdf
			$pdf->SetFont('Zapfdingbats','',10);
			$pdf->Write(8,'r');
			$pdf->SetFont('Arial','',10);
			$pdf->Write(8,' '.$hebergement_info);
			$pdf->Ln(6);
		}
		$pdf->Ln(4);
		$pdf->Write(8,'Adresse de facturation :');
		$pdf->Ln(20);
		$pdf->Write(8,'� ..................................................... le .......................');
		$pdf->SetX(100);
		$pdf->Write(8,'Signature Organisme Financeur :');
		$pdfname = $datepdf.'-id'.$nom.'.pdf';
		//$pdfpath = "output";
		$pdf->Output("$pdfname", "I");
?>		
