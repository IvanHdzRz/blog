<?php 

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteCollectorProxy;

$app->get('/', function (Request $request, Response $response ){
    $response->getBody()->write("Aqui va la pagina de la Doc de la api");
    return $response;
});


$app->group('/posts[/{id}]', function (RouteCollectorProxy $group) {
    $group->map(['GET','POST'],'',function(Request $request, Response $response, $args){
        $response->getBody()->write("El metodo de la peticion es ". $request->getMethod() );
    return $response;
    });
});




