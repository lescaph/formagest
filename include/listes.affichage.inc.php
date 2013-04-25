<?php
function affichage_liste_selected($champ_selected, $num_champ, $name_champ)
{
		echo "<select name=$name_champ id=$name_champ>";
		$envoi = liste_flv("$num_champ");
		while($fetch = mysql_fetch_assoc($envoi))
		{	
		  	if($fetch['flv_valeur'] == $champ_selected)
			{
			    $selected="selected=\"selected\"";
			}
			else
			{
			    $selected = "";
			}       
			echo '<option title="' . $fetch['flv_label'] . '" value="' . $fetch['flv_valeur'] . '" ' . $selected . '>' . $fetch['flv_label'] . '</option>';
		}
?>	
		</select>
<?php
}

function affichage_liste_formations($active)
{
	//$annee_courante = date('Y');
	?>
	<form action="<?php $_SERVER['PHP_SELF'];?>" method="get">
		<select name="formation" id="formation" onChange="this.form.submit()">
			<option>Liste des formations</option>
			<?php 
				$optgroup= liste_formations_optgroup();
				while($element_optgroup = mysql_fetch_assoc($optgroup))
				{
				    if($element_optgroup['f_active'] == $active)
				    {
					    echo "<optgroup label=".$element_optgroup['f_annee'].">";
						$formations = liste_formations($active);
						while($element_formation = mysql_fetch_assoc($formations))
						{	
						    if($element_formation['f_annee'] == $element_optgroup['f_annee'])
						    {	
						    	$option = '<option value="'.$element_formation['id_formation'].'">'.$element_formation['f_titre'].' *** ';
						    	$option .=  count_participants($element_formation['id_formation'],"1");
						    	$option .= ' valid&eacute;(s), ';
						    	$option .=  count_participants($element_formation['id_formation'],"0");
						    	$option .= ' en attente';
						    	$option .= '</option>';
						    	echo $option;
						    }
						}
					    echo "</optgroup>";
				    }		    	  				   
				}
			?>	
		</select>
	</form>
	<?php
}

function affichage_liste_formations_par_annee($annee)
{

	echo '<select name="formation" id="formation">';
	$formations = liste_formations_par_annees($annee);
	while($element_formation = mysql_fetch_assoc($formations)){	
    	echo '<option value="' . $element_formation['id_formation'] . '">' . $element_formation['f_titre'] . '</option>';
	}	
	echo '</select>';
}

/*
* Fonction affichage_liste_formules sert à afficher une liste des formules d'inscription avec un élément préselectionné
* @param $formule_selected   =  numéro de la formule sélectionnée par défaut
* @param $index =  numéro servant à distinguer les listes en cas de plusieurs listes 
*/
function affichage_liste_formules($formule_selected, $index)
{
	echo '<select id="i_formule_choisie[' . $index . ']" class="edit_select" name="i_formule_choisie[' . $index . ']">';
	$data = liste_formules();
	while($fetch = mysql_fetch_assoc($data)){	
	  	$fetch['id_formule'] == $formule_selected ? $selected="selected=\"selected\"" : $selected = "";
		echo '<option title="' . $fetch['fml_tarif'] . ', ' . $fetch['fml_duree'] . ', ' . $fetch['fml_descriptif'] . '" value="' . $fetch['id_formule'] . '" ' . $selected . '>' . $fetch['id_formule'] . '</option>';
	}
	echo '</select>';
}
?>
