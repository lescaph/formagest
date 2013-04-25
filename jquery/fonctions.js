// Décompose les paramètres d'une url
function getURLParameter(name, url) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(url)||[,null])[1]
    );
}

$("document").ready(function(){
    
    /* début classement  */
    $("table").first().attr("id", "valides");
	$("#href_en_attente").next().next().attr("id", "classement");
    // Initialise the table
    $("#classement").tableDnD({
		onDrop: function(table, row) {
			//alert($.tableDnD.serialize());
			var datas = $.tableDnD.serialize();
			$.ajax({
				type: 'POST',      // envoi des données en POST
				url: 'actions/classement.php',     // envoi au fichier
				data: datas,     // sélection des champs à envoyer
			});
		}
	});
    /* fin classement  */
    
    /* début statistiques  */
    $("div#stats select#annee option").click(function(event){
		  var _annee = $(this).val();
          $.post( 
             "index.php?page=statistiques",
             { annee: _annee },
             function(data) {
                $('body').html(data);
                $("select#annee option[value=" + _annee + "]").attr("selected", "selected");
             }
          );
      });
      $("div#stats select#formation option").click(function(event){
		  var _id    = $(this).val();
          var _annee = $("select#annee option:selected").val();
          $.post( 
             "index.php?page=statistiques",
             { formation: _id,
                annee: _annee,
             },
             function(data) {
                $('body').html(data);
                $("select#annee option[value=" + _annee + "]").attr("selected", "selected");
                $("select#formation option[value=" + _id + "]").attr("selected", "selected");
             }
          );
      });
    /* fin statistiques  */
    
    
    /* début Edit  */
    $("select[id='p_civilite'],select[id='taille_police']").addClass("edit_select");
	
	$(".edit_input").blur(function(){
			var nomChamp = $(this).parent().text();				
                 $.ajax({
                           type: "POST",
                           url: "index.php?page=edit",
                           data: $(this).attr("name") + "=" + $(this).val() + "&idparticipant=" + $("input[name='idparticipant']").val() + "&idinscription=" + $("input[name='idinscription']").val(),
                           success: function(msg){
                             //$('#result').html(msg);
                             $("div[id='info_maj']").text("Champ" + nomChamp + " mis \340 jour");
                             
                             //alert( "Résultat: " + msg )
                           ;}
                 });                   
    });
    
    //Stocke l'ancienne valeur de l'option
    $('.edit_select').focus(function()
                      {
                        //store old value
                        $(this).data("oldValue", $(this).val());
                        //alert( "Résultat: " + msg )    
                      });

    $(".edit_select").change(function(){        
        var textLabel = $("label[for='"+ $(this).attr('name') +"']").text();
                 $.ajax({
                           type: "POST",
                           url: "index.php?page=edit",
                           data: $(this).attr("name")+"=" + $(this).val()
                                                          + "&oldvalue=" + $(this).data('oldValue') 
                                                          + "&idparticipant=" + $("input[name='idparticipant']").val()
                                                          + "&idinscription=" + $("input[name='idinscription']").val(),
                           success: function(msg){
                             //$('#result').html(msg);  
							 $("div[id='info_maj']").text("Champ <" + textLabel + "> mis \340 jour");
                             //alert( "Résultat: " + msg )
                           ;}
                 });
                 //$('#result').text($(this).data('oldValue'));                    
    });
    /* fin Edit  */
    
    
    /* début Export PDF confirmation : avec ou sans signature 
    $.alerts.okButton = "Télécharger";
    $.alerts.cancelButton = "Annuler";
    $.alerts.dialogClass = "confirmation_pdf";
    
    
    
    $('.formulaire_confirmation').live("click",function(event){
        event.preventDefault();
        var _idinscription = getURLParameter('inscription', $(this).attr('href'));
        var _lien_sans_signature = 'actions/export_pdf.php?inscription=' + _idinscription + '&type=confirmation';
        var _lien_signature = _lien_sans_signature + '&signature=1';
        //var _lien = _lien_sans_signature;
        //var _html = '<a href="' + _lien_sans_signature + '">sans signature</a><br /><a href="' + _lien_signature +'">avec signature</a>';
        //var _html = '<input type="checkbox" name="signature" value=1 checked="checked">signature</input>';
        
        
        
        jCheck('signature' , null, 'PDF de confirmation', function(r) {
            if( r ) {
                if( r === 'true') window.open(_lien_signature);
                else if( r === 'false') window.open(_lien_sans_signature);
            }
        });    
    });
    
    $("input[name='signature']").click(function() {
            //if ( $(this).attr("checked", "checked") ) { $("h1[id='test']").text('true'); }
            //else { $("h1[id='test']").text('false'); }
            //var val = $(this).value();
            //$(this).data("signature", $(this).val());
            //if ( $(this).attr("checked", "checked") ) $("h1[id='test']").html('true');
            //else $("h1[id='test']").html('false');
            alert('clic');
        });
    /* fin Export PDF confirmation : avec ou sans signature */
});

