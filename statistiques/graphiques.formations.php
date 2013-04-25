<?php
if (isset($_REQUEST['idformation'])){
    $idformation = $_REQUEST['idformation'];
    require_once '../include/config.inc.php';
    connectdb();
    init();

    require_once '../jpgraph-3.5.0b1/src/jpgraph.php';
    require_once '../jpgraph-3.5.0b1/src/jpgraph_pie.php';
    include_once '../jpgraph-3.5.0b1/src/jpgraph_pie3d.php';

    $titre_formation = get_titre_formation($idformation);
    

    // Récupération du nombre d'inscrits pour chaque formation
    for($i=0;$i<=2;$i++){
        $tableauInscrits[] = count_participants($idformation, $i);
    }
    $tableauLegendes = array("en attentes ($tableauInscrits[0])",
                             "validées  ($tableauInscrits[1])",
                             "annulées ($tableauInscrits[2])");
     
    mysql_close();
    //print_r($tableauInscrits);

    // **************************************
    // Création du graphique
    // *****************************************

    // On spécifie la largeur et la hauteur du graph
    $graph = new PieGraph(450,500);

    // Ajouter une ombre au conteneur
    $graph->SetShadow();

    // Donner un titre
    $graph->title->Set($titre_formation);

    // Quelle police et quel style pour le titre
    // Prototype: function SetFont($aFamily,$aStyle=FS_NORMAL,$aSize=10)
    // 1. famille
    // 2. style
    // 3. taille
    //$graph->title->SetFont(FF_GEORGIA,FS_BOLD, 12);

    // Créer un camembert 
    $pie = new PiePlot3D($tableauInscrits);

    // Quelle partie se détache du reste
    $pie->ExplodeSlice(1);

    // Spécifier des couleurs personnalisées... #FF0000 ok
    $pie->SetSliceColors(array('red', 'blue', 'green'));

    // Légendes qui accompagnent le graphique
    $pie->SetLegends($tableauLegendes);

    // Position du graphique (0.5=centré)
    $pie->SetCenter(0.5);

    // Type de valeur (pourcentage ou valeurs)
    $pie->SetValueType(PIE_VALUE_ABS);

    // Personnalisation des étiquettes pour chaque partie
    $pie->value->SetFormat('%d');

    // Personnaliser la police et couleur des étiquettes
    //$pie->value->SetFont(FF_ARIAL,FS_NORMAL, 9);
    $pie->value->SetColor('blue');

    // ajouter le graphique PIE3D au conteneur 
    $graph->Add($pie);

    // Provoquer l'affichage
    $graph->Stroke();
    mysql_close();
}    

?>
