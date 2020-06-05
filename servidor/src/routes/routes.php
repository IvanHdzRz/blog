<?php 

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteCollectorProxy;

require '../src/models/PostModel.php';

$app->get('/', function (Request $request, Response $response ){
    $response->getBody()->write("Aqui va la pagina de la Doc de la api");
    return $response;
});

$app->group('/posts[/{id}]', function (RouteCollectorProxy $group) {
    $group->map(['GET','POST'],'',\PostModel::class . ':getResponse');
});

$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
    $handler = $this->notFoundHandler; // handle using the default Slim page not found handler
    return $handler($req, $res);
});




