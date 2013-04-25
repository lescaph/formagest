<?php
if (isset($_GET['page'])){
    //Page principale affichée par défaut
    //Affiche le contenu relatif à une formation (tableaux d'inscrits et menu) sinon propose par défaut les listes des formations
    require_once('include/tableaux.affichage.inc.php');
    //require_once('include/listes.affichage.inc.php');
    mysql_query("SET NAMES 'utf8'");
    require_once('actions/actions.php'); 
    if (isset($_GET['formation']) && is_numeric($_GET['formation'])) {
            
        $idformation = $_GET['formation'];
        if (isset($_GET['inscription'])) $inscription = $_GET['inscription'];
        if (isset($_GET['validation'])) $validation = $_GET['validation'];
        
        echo '<div id="titre_formation">';
        echo get_titre_formation($idformation).'<br />';
        echo 'Total des inscriptions: ';
        echo count_participants($idformation, "*");
        echo '</div>';
        
        // Titre de la formation
        echo '<div id="conteneur">';
        echo '<div id="wrap">';
        echo '<div id="contenu">';

        //cas particulier des journées MCS OCIM
        if($idformation == 12) echo '<a href="index.php?page=formation12">Journ&eacute;es MCS OCIM</a><p>';
        
        affichage_liste_formations(1); // 1 = actives 0 = inactives	
        
        // 3 Tableaux (validé, en attente, annulé) avec liste des participants
            
        echo '<p>';
        echo '<a name="ins_valides">Inscriptions valid&eacute;es</a> (';
        echo count_participants($idformation, "1");
        echo ')<br />';
        // 1er tableau : participants validés
        if (isset($_GET['liste']) && ($_GET['liste'] == 'info_participant')) {
            tableau_info_participant(liste_participants($idformation, 1));
        }
        else {
            tableau_info_inscription(liste_participants($idformation, 1));
        }
        echo '<a name="ins_non_valides">Inscriptions en attente</a> (';
        echo count_participants($idformation, "0");
        echo ')&nbsp;';
        echo '<a id=\'href_en_attente\' href=\'#haut_de_page\'><img src="IMG/arrow-up.png" title="haut de page"/></a><br />';
        // 2e tableau : participants en attente
        if (isset($_GET['liste']) && ($_GET['liste'] == 'info_participant')) {
            tableau_info_participant(liste_participants($idformation, 0));
        }
        else {
            tableau_info_inscription(liste_participants($idformation, 0));
        }
        echo '<a name="ins_annulees">Inscriptions annul&eacute;es</a> (';
        echo count_participants($idformation, 2);
        echo ')&nbsp;';
        echo '<a href=\'#haut_de_page\'><img src="IMG/arrow-up.png" title="haut de page"/></a><br />';
        // 3e tableau : participants annulés
        if (isset($_GET['liste']) && ($_GET['liste'] == 'info_participant')) {
            tableau_info_participant(liste_participants($idformation, 2));
        }
        else {
            tableau_info_inscription(liste_participants($idformation, 2));
        }
    ?>  
        </div>
        <!-- MENU -->
        <?php include 'include/menu.inc.php'; ?>    
        <!-- FIN MENU  -->		
        </div>
    </div>
    <?php
    }
    // s'il n'y a pas de paramètre 'formation' on affiche la liste des formations			
    else
    {

            echo '<div class="center">';
            echo 'Formations actives';

            affichage_liste_formations(1); // 1 = actives 0 = inactives

            echo 'Formations inactives';

            affichage_liste_formations(0); // 1 = actives 0 = inactives
    ?>
            </div>	
    <?php
    }   
}
?>
