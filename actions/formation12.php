<?php
if (isset($_GET['page'])) {
?>
    <style type="text/css" media="all"> 
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 5px;
        border: 1px solid #666;
        margin: 1px 1px 5px;
        font: normal 14px verdana;
        width: 750px;
        height: 20px;
        color: #666;
        background: #f0f0f0;
    }
    </style>
    <script type="text/javascript">
        
        $("#a20").live("click", function() {
            $('#formule20').toggle();
        });
        $("#a21").live("click", function() {
            $('#formule21').toggle();
        });
        $("#a22").live("click", function() {
            $('#formule22').toggle();
        });
        $("#a23").live("click", function() {
            $('#formule23').toggle();
        });
        $("#a24").live("click", function() {
            $('#formule24').toggle();
        });
        $("#a25").live("click", function() {
            $('#formule25').toggle();
        });
        $("#a26").live("click", function() {
            $('#formule26').toggle();
        });
       
    </script>
    <?php

    //require_once('../include/requetes.inc.php');

    function listeParFormule($idformule)
    {
        $sql ="SELECT fif.id_inscription FROM form_inscriptions_formules fif ";
        $sql .="JOIN form_inscriptions fi ON  fif.id_inscription = fi.id_inscription ";
        $sql .="JOIN form_participants fp ON  fi.id_participant = fp.id_participant ";
        $sql .="WHERE fif.id_formule = $idformule ";
        $sql .="ORDER BY fp.p_nom ASC";  
        $inscriptions = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
        while($fetch = mysql_fetch_assoc($inscriptions))
        {
            echo "<ul>";
            $infosparticipants = getInfosParticipantsViaIdinscription($fetch['id_inscription']);
            while($info = mysql_fetch_assoc($infosparticipants))
            {
                echo "<li>".civilite($info['p_civilite'])." ".$info['p_prenom']." ".$info['p_nom']." - ".stripslashes($info['p_etablissement'])."</li>";
            }
            echo "</ul>";		
        }
    }

    function getFml_descriptifFormules($idformule)
    {
        $sql ="SELECT fml_descriptif FROM form_formules WHERE id_formule = $idformule";
        $fml_dsc = mysql_query($sql)or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');
        $info = mysql_fetch_assoc($fml_dsc);
        return $info['fml_descriptif'];
    }

    function countParFormule($idformule)
    {
        $sql = "SELECT COUNT(*) AS compteur FROM form_inscriptions_formules WHERE id_formule = $idformule";
        $requete = mysql_query($sql) or die ('Erreur sur :'.$sql.' <br />message retourn&eacute; : '.mysql_error().'');; 
        $f = mysql_fetch_array($requete) ;
        mysql_free_result($requete);
        return $f["compteur"];
    }


    ?>
    <div id="titre_formation">
        <?php
        echo get_titre_formation(12);
        ?>
    </div>
    <p>
    <h2  style="width: 10em; color: #f0f0f0;">Jeudi 12 mai</h2>
    </p>
    <?php
    for($i=20;$i<23;$i++)
    {
        echo "<h4><a id='a".$i."'>".getFml_descriptifFormules($i)."</a>";
        echo " (".countParFormule($i).")</h4>";
        echo "<div id=formule".$i." style='display:none;'>";
        listeParformule($i);
        echo "</div>";
    }	
    ?>
    <p>
    <h2  style="width: 10em; color: #f0f0f0;">Vendredi 13 mai</h2>
    </p>
    <?php
    for($i=23;$i<27;$i++) {
        echo "<h4><a id='a".$i."'>".getFml_descriptifFormules($i)."</a>";
        echo " (".countParFormule($i).")</h4>";
        echo "<div id=formule".$i." style='display:none;'>";
        listeParformule($i);
        echo "</div>";
    }
} else {
    echo 'Cette page ne peut pas être appelée directement';
}
?>
