<?php

if(isset($_POST['submit_ajout_formation'])) 
{
	if(isset($_POST['f_active']))
	{
		$f_active = 1;
	}
	else $f_active = 0;
		
		 	
	$sql="INSERT INTO form_formations ( 
			f_titre,
			f_annee,
			f_date,
			f_lieux,
			f_type,
			f_active
			)
		  VALUES (
		    '" . mysql_real_escape_string($_POST['f_titre']) . "',
		    '" . mysql_real_escape_string($_POST['f_annee']) . "',
		    '" . mysql_real_escape_string($_POST['f_date'])  . "',
		    '" . mysql_real_escape_string($_POST['f_lieux']) . "',
		    '" . mysql_real_escape_string($_POST['f_type'])  . "',
		    "  . $f_active                                   .")
		   	";
	$envoi = mysql_query($sql)or die ('Erreur sur :' . $sql . ' <br />message retourn&eacute; : ' . mysql_error() . '');
	if($envoi) echo "<script language='Javascript'>alert('Les informations ont \351t\351 ajout\351es')</script>"; else echo 'erreur dans la mise à jour';// message de confirmation de modifications
}	

?>
<div id="conteneur">
    <div id="wrap">
        <div id="contenu">
            <div>
                <h3>Ajouter une nouvelle formation</h3>
                <form name="form_ajout_formation" action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
                    <table>
                        <tr>
                            <th>Titre</th>
                            <th>Ann&eacute;e</th>
                            <th>Date</th>
                            <th>Lieux</th>
                            <th>Type</th>
                            <th>Active</th>		
                        </tr>
                        <tr>
                            <td><input type="text" name="f_titre" value="" size="50"></td>
                            <td><input type="text" name="f_annee" value="<?php echo date('Y'); ?>" size="3"></td>
                            <td><input type="text" name="f_date" value="ex: 1,2 et 3 janvier"></td>
                            <td><input type="text" name="f_lieux" value=""></td>
                            <td><?php affichage_liste_selected(1, 4, "f_type"); ?></td>
                            <td><input type="checkbox" name="f_active" value="1" checked="checked"></td>
                        </tr>
                    </table>
                <br />
                <input type="submit" value="Ajouter cette formation" name="submit_ajout_formation"/>
                <input type="button" value="Quitter" onClick="self.close()" name="fermer"/>
                </form>
            </div>
        </div>
    </div>
</div>
