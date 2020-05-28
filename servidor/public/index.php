<?php


use Slim\Factory\AppFactory;
require __DIR__.'/../vendor/autoload.php';

$app = AppFactory::create();

// Se agrega middleware para desplegar errores
$app->addErrorMiddleware(true,false,true);


require '../src/routes/routes.php';

$app->run();