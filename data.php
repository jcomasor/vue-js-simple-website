<?php 

    $lang = $_REQUEST['l'];
    $url = "./";
    
    if (!isset($lang)) { $lang = "en"; }

    $url = "http://localhost:3000/";
    $titulo = "Template";

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