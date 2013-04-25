<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Consultation des inscriptions</title>
<style type="text/css" media="all"> 
	@import url(styles/consultation.css); 
</style>
<!-- Dependances -->
<script src="jquery/jquery.min.js" type="text/javascript"></script>
<link href="jquery/jquery-ui-1.8.8.custom/css/ui-lightness/jquery-ui-1.8.8.custom.css" rel="stylesheet" type="text/css" media="screen" />
<script src="jquery/jquery-ui-1.8.8.custom/js/jquery-ui-1.8.8.custom.min.js" type="text/javascript"></script>
<script src="jquery/jquery.tablednd_0_5.js" type="text/javascript"></script>
<!-- Core files -->
<script src="jquery/jalerts/jquery.alerts.js" type="text/javascript"></script>
<link href="jquery/jalerts/jquery.alerts.css" rel="stylesheet" type="text/css" media="screen" />
<!-- scripts -->
<script src="jquery/fonctions.js" type="text/javascript"></script>                                             
</head>
<body>
    <div id="dialog"></div>
<?php
    require_once('include/config.inc.php');
    connectdb();
    init();
	require_once('include/header.inc.php');
    if ( !isset($_GET['page']) ) $_GET['page'] = 'consultation';
    $page =  ACTION_PATH . $_GET['page'] . '.php';
    if ( !file_exists($page) ) {
        echo 'La page demandée n\'existe pas. ';
    } else {
        include_once($page);
    }
    
	include_once('include/footer.inc.php');
    mysql_close();
?>	
</body>
</html>
