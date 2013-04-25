<?php
if (isset($_GET['page'])){
    //print_r($_POST);
    $annee_courante = date("Y");
    ?>
    <div id="stats">
        <span style="font-weight: bold; font-size: 2em;">Statistiques</span>
        &nbsp;(seulement compatible firefox)
        <p></p>
        <select id="annee" name="annee">
        <?php
            for($i=$annee_courante; $i>=2011; $i--)
            {
                echo "<option value=$i>$i</option>";
            }
    ?>	
        </select>
        <p></p>
    <?php

        (isset($_REQUEST['annee'])) ? $annee = $_REQUEST['annee'] : $annee = $annee_courante;

        echo "total d'inscriptions en $annee : ";
        echo total_inscriptions_par_annee($annee);
        echo "<p></p>";
        echo "total de participants en $annee : ";
        echo total_participants_par_annee($annee);
        echo '<p>';
        affichage_liste_formations_par_annee($annee);
    ?>
    <?php
            if(isset($_REQUEST['formation']))
            {
                $idformation = $_REQUEST['formation'];
                
                //total des inscrits
                for($i=0;$i<=2;$i++)
                {
                    $tableauNombreInscrits[] = count_participants($idformation, $i);
                }
                
                $total_participants = array_sum($tableauNombreInscrits);
                            
                echo "<div style='margin-left: 50px;'>";
                //echo 'toto';
                //include "statistiques/graphiques.formations.php?idformation=$idformation";
                if ($total_participants > 0 ) {
                    echo "<img src='statistiques/graphiques.formations.php?idformation=$idformation' />";
                }
                //echo "idformation = $idformation";
                echo "</div>";
                
                
                
                 

                //print_r($tableauNombreInscrits);
                echo "Total des inscrits sur cette formation: $total_participants";
                //echo 'Validés : '    . count_participants($idformation, STATUT_VALIDE) . '<br />';
                //echo 'En attente : ' . count_participants($idformation, STATUT_EN_ATTENTE) . '<br />';
                //echo 'Annulées : '   . count_participants($idformation, STATUT_ANNULEE);
            }
            //else echo 'Erreur : ' . ERR01;
    ?>
    </div>
<?php
}
?>    
