<!DOCTYPE html>
<?php include 'data.php'; ?>
<html lang="<?php echo $lang; ?>">

    <head>

        <!-- Meta Title  -->
        <title><?php echo $titulo; ?></title>
        <?php include 'head.php'; ?>

        <!--[if IE]>
            <script type="text/javascript">
                 var console = { log: function() {} };
            </script>
        <![endif]-->
    
    </head>
    
    <body>

        <div id="app">
            <?php include 'header.php'; ?>
            
            <router-view transition="transition"></router-view>
                    
        </div>

        <!-- Own JS  -->
        <script src="<?php echo $url; ?>js/<?php echo $js; ?>"></script>

    </body>

</html>
