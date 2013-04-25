<?php
echo '<div id="menu">
            <ul>
                <li id="participant"><a href="' . $_SERVER['PHP_SELF'] . '?formation=' . $idformation.'&liste=info_participant">Infos stagiaires</a></li>
                <li id="inscription"><a href="' . $_SERVER['PHP_SELF'] . '?formation=' . $idformation.'">Infos inscriptions</a></li>
            
      <br />
            
                <li id="export_csv"><a href="' . $_SERVER['PHP_SELF'] . '?formation=' . $idformation . '&action=export_csv">Export CSV</a></li>
';
            // Affichage des formules, caché par défaut
echo       '
                <div id="formules_affiche">
                    <li id="formules"><a href="#" onclick="document.getElementById(\'formules_cache\').style.display = \'block\';  document.getElementById(\'formules_affiche\').style.display = \'none\'; ">Formules d\'h&eacute;bergement</a></li>
                </div>
                <div id="formules_cache" style="display: none;">
                    <a href="#" onclick="document.getElementById(\'formules_cache\').style.display = \'none\';  document.getElementById(\'formules_affiche\').style.display = \'block\'; ">Fermer le cadre</a>
                    <p></p>';
                    $envoi = liste_formules();
                    while($fetch = mysql_fetch_assoc($envoi)){
                        echo $fetch['id_formule'] . ": " . $fetch['fml_tarif'] . " , " . $fetch['fml_duree'] . ", " . $fetch['fml_descriptif'] . "<br />";
                    }
echo           '</div>
      
      <br />
            
                <li id="valid"><a href="#ins_valides">Inscriptions valid&eacute;es</a></li>
                <li id="wait"><a href="#ins_non_valides">Inscriptions en attente</a></li>
                <li id="cancel"><a href="#ins_annulees">Inscriptions annul&eacute;es</a></li>
            
      <br />
                <li id="gestion"><a href="' . $_SERVER['PHP_SELF'] . '?action=gestion" target="_blank">Gestion</a></li>
      <p />
                <li id="stats">&nbsp;<a href="index.php?page=statistiques">Statistiques</a></li>
            </ul>	
      </div>';
?>        
