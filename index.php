<!DOCTYPE html>
<?php include 'data.php'; ?>
<html lang="<?php echo $lang; ?>">

    <head>

        <!-- Meta Title  -->
        <title><?php echo $titulo; ?></title>
        
        <!-- Meta Content-Type  -->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        
        <!-- Meta Author  -->
        <meta name="author" content="Christian MacMillan" />
        <meta name="copyright" content="cmacmillanmarin" />
        <meta name="ROBOTS" content="INDEX, FOLLOW" />
        <meta name="creation_Date" content="09-04-2016" />
          
        <!-- Meta Description  -->
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        <!-- Favicon  -->
        <link rel="apple-touch-icon" sizes="57x57" href="<?php echo $url; ?>img/ico/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="<?php echo $url; ?>img/ico/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="<?php echo $url; ?>img/ico/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $url; ?>img/ico/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="<?php echo $url; ?>img/ico/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="<?php echo $url; ?>img/ico/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="<?php echo $url; ?>img/ico/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="<?php echo $url; ?>img/ico/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $url; ?>img/ico/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo $url; ?>img/ico/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $url; ?>img/ico/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="<?php echo $url; ?>img/ico/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $url; ?>img/ico/favicon-16x16.png">
        <meta name="msapplication-TileColor" content="#000000">
        <meta name="msapplication-TileImage" content="<?php echo $url; ?>img/ico/ms-icon-144x144.png">
        <meta name="theme-color" content="#000000">

        <!-- Meta Social Sharing  -->
        <!-- Twitter Card data -->
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@xxx">
        <meta name="twitter:title" content="xxx">
        <meta name="twitter:description" content="xxx">
        <meta name="twitter:creator" content="@xxx">
        <meta name="twitter:image" content="<?php echo $url; ?>img/share/share_twitter.jpg">

        <!-- Open Graph (Fb, G+, Pin..) data -->
        <meta property="og:title" content="xxx" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www.xxx.com/" />
        <meta property="og:image" content="<?php echo $url; ?>img/share/share_facebook.jpg" />
        <meta property="og:description" content="xxx" />
        <meta property="og:site_name" content="xxx" /> 
        <meta property="fb:admins" content="xxx" />
        
        <!-- Own CSS  -->
        <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>build/<?php echo $style; ?>" />

        <!--[if IE]>
            <script type="text/javascript">
                 var console = { log: function() {} };
            </script>
        <![endif]-->
    
    </head>
    
    <body>

        <div id="app">
            
            <header-component></header-component>
            
            <router-view transition="transition"></router-view>
                    
        </div>

        <!-- Own JS  -->
        <script src="<?php echo $url; ?>build/<?php echo $js; ?>"></script>

    </body>

</html>
