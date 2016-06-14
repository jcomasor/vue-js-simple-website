
<?php 

    $lang = $_REQUEST['l'];
    
    if (!isset($lang)) { $lang = "en"; }

    $actual_link = $_SERVER[REQUEST_URI];

    $url = "http://localhost:3000/";
    $titulo = "Vue js simple website";

    $style = 'style.css';
    $js = 'bundle.js';
    $assets = './assets.json';
    
    if (file_exists($assets)) {
        
        $jsonFile = file_get_contents('./assets.json');
        $jsonString = json_decode($jsonFile, true);
        $style = $jsonString['style.css'];
        $js = $jsonString['bundle.js'];
        
    }

?>
