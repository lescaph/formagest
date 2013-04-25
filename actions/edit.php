<?php
if (isset($_GET['page'])){
    mysql_query("SET NAMES 'utf8'");

    if (isset($_GET['inscription']) && is_numeric($_GET['inscription']) && (empty($_POST) || !isset($_POST)))
    {	
        //require_once('../include/config.inc.php');
        //require_once('../include/requetes.inc.php');
        //require_once('../include/listes.affichage.inc.php');
        $idinscription = $_GET['inscription'];
        // récupération des infos sur les champs à éditer
        $envoi = getInfosParticipantsViaIdinscription($idinscription);
        
        
        $rows = mysql_num_rows($envoi);
        $fetch = mysql_fetch_assoc($envoi);

        // liens pour les actions des formulaires
        //$form_action_participant = $_SERVER['PHP_SELF'] . '?idparticipant=' . $fetch["id_participant"];
        //$form_action_inscription = $_SERVER['PHP_SELF'] . '?idinscription=' . $idinscription;
        
        if(isset($rows))
        {
    ?>
            <div id="conteneur">
                <div id="wrap">
                    <div id="contenu" >
                        <div id="info_maj"></div>
                        <table>
                            <tr>
                                <input type="hidden" name="idparticipant" value="<?php echo $fetch["id_participant"]; ?>"/>
                                <input type="hidden" name="idinscription" value="<?php echo $idinscription; ?>"/>
                                <td>
                                    <label for="p_civilite">Civilit&eacute;</label>
    <?php
                                    $champ_selected = $fetch['p_civilite'];
                                    affichage_liste_selected($champ_selected, "1","p_civilite");
    ?>
                                </td>					
                            </tr>
    <?php
                            edit_input('Nom', 'p_nom', stripslashes($fetch['p_nom']));
                            edit_input('Pr&eacute;nom', 'p_prenom', stripslashes($fetch['p_prenom']));
                            edit_input('&Eacute;tablissement', 'p_etablissement',stripslashes($fetch['p_etablissement']));
                            edit_input('Fonction', 'p_fonction', stripslashes($fetch['p_fonction']));
                            edit_input('Adresse', 'p_adresse', stripslashes($fetch['p_adresse']));
                            edit_input('Code postal', 'p_cp', stripslashes($fetch['p_cp']));
                            edit_input('Ville', 'p_ville', stripslashes($fetch['p_ville']));
                            edit_input('Pays', 'p_pays', stripslashes($fetch['p_pays']));
                            edit_input('Mail du stagiaire', 'p_mail', stripslashes($fetch['p_mail']));
                            edit_input('Mail du contact administratif', 'p_mailadministratif', stripslashes($fetch['p_mailadministratif']));
                            edit_input('Telephone', 'p_telephone', stripslashes($fetch['p_telephone']));
                            edit_input('Fax', 'p_fax', stripslashes($fetch['p_fax']));
    ?>
                            <tr>
                                <td>
                                    <label for="i_formule_choisie[0]">Formule(s) choisie(s)</label>
    <?php
                                    // On récupère les formules correspondantes à l'inscription et on les affiche par défaut dans une liste pour chacune 
                                    //$tab_formules = tableau des formules correspondantes à l'inscription
                                    $formules = getInscriptionsFormules($fetch['id_inscription']);
                                    while ($data = mysql_fetch_assoc($formules)){
                                        $tab_formules[] = $data['id_formule'];
                                    }
                                    
                                    //Affichage des listes select
                                    for ($i=0; $i<sizeof($tab_formules); $i++){
                                        affichage_liste_formules($tab_formules[$i], $i);
                                    }
                                    //$_SESSION['tab_anciennes_formules'] = $tab_formules;
    ?>                              
                                </td>
                            </tr>
                            <tr>							
                                <td>
                                    <label for="taille_police">Taille du texte attentes</label>
                                    <?php affichage_liste_selected (get_element_xml("taille", ACTION_PATH . 'formulaire.xml'), "3", "taille_police"); ?>
                                </td>
                            </tr>
                            <tr>
                                <td>Attentes		
                                    <textarea class="edit_input" cols="60" rows="6" name="i_attentes"><?php echo if_mq_on($fetch['i_attentes']); ?></textarea>
                                </td>
                            </tr>
                        </table>
                        <br />
                        <input type="button" value="Fermer la fen&ecirc;tre" onClick="self.close()" name="fermer"/>
                    </div>
                </div>
            </div>
    <?php
        }	
    }
    elseif(isset($_POST) && !empty($_POST)) 
    {
            // table form_participants
            //tableau avec tous les noms de champs du formulaire correspondants à la table PARTICIPANTS 
            $tab_champs = array('p_civilite',
                                'p_nom',
                                'p_prenom',
                                'p_etablissement',
                                'p_fonction',
                                'p_adresse',
                                'p_cp',
                                'p_ville',
                                'p_mail',
                                'p_mailadministratif',
                                'p_telephone',
                                'p_fax');
            
            //Boucle pour tester si un des champs input à changé et la valeur a été passée en POST, puis mise à jour avec la fonction update_champ                    
            for ($i=0; $i<sizeof($tab_champs); $i++){
                if (isset($_POST[$tab_champs[$i]]) && !empty($_POST[$tab_champs[$i]])){
                    //tableau d' informations passé à la fonction update_champ()
                    $tab_update_champ = array('idinscription'   => NULL,
                                              'idparticipant'   => $_POST['idparticipant'],
                                              'table_affectee'  => PARTICIPANT,
                                              'champ_affecte'   => $tab_champs[$i],
                                              'ancienne_valeur' => NULL,
                                              'nouvelle_valeur' => $_POST[$tab_champs[$i]],
                                               );
                    update_champ($tab_update_champ);
                }
            }

            //Champ à mettre à jour en cas de changements : i_formule_choisie
            if (isset($_POST['i_formule_choisie']) && !empty($_POST['i_formule_choisie'])
                                                   && isset($_POST['oldvalue'])
                                                   && is_numeric($_POST['oldvalue']) ){
                $tab_i_formule_choisie = $_POST['i_formule_choisie'];                                       
                //$index_formule = key($tab_i_formule_choisie);                                                   
                $tab_update_champ = array('idinscription'   => $_POST['idinscription'],
                                          'idparticipant'   => NULL,
                                          'table_affectee'  => INSCRIPTIONS_FORMULES,
                                          'champ_affecte'   => 'id_formule',
                                          'ancienne_valeur' => $_POST['oldvalue'],
                                          'nouvelle_valeur' => array_first_entry($tab_i_formule_choisie),
                                           );
                update_champ($tab_update_champ);            
            }
            
            //Champ à mettre à jour en cas de changements : i_attentes
            $champ_affecte = 'i_attentes';
            if (isset($_POST[$champ_affecte]) && !empty($_POST[$champ_affecte])){
                // TODO
                //update_champ('i_attentes', INSCRIPTION);
                $tab_update_champ = array('idinscription'   => $_POST['idinscription'],
                                          'idparticipant'   => NULL,
                                          'table_affectee'  => INSCRIPTION,
                                          'champ_affecte'   => $champ_affecte,
                                          'ancienne_valeur' => NULL,
                                          'nouvelle_valeur' => $_POST[$champ_affecte],
                                          );
                update_champ($tab_update_champ);
            }
            // taille du texte i_attentes - export_pdf.xml
            if (isset($_POST['taille_police']) && in_array($_POST['taille_police'], array(7, 8, 9, 10))){
                set_element_xml($_POST['taille_police'], 'taille', ACTION_PATH . 'formulaire.xml');
            }
            
            echo "<p class=\"center\">
                    Les informations ont &eacute;t&eacute; modifi&eacute;es.<br /><br />
                    <input type=\"button\" value=\"Page pr&eacute;c&eacute;dente\" onClick=\"history.back()\" name=\"retour\"/>
                    <input type=\"button\" value=\"Fermer la fen&ecirc;tre\" onClick=\"self.close()\" name=\"fermer\"/>
                    </p>";
                        
    }	
    else echo "Pas d'information sur cette page";
    ?>
    <div id="result"></div>	
<?php
}
?>
