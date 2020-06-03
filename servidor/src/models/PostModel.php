<?php 

use Psr\Container\ContainerInterface;

require_once 'Model.php';

class PostModel extends Model{

    public function __construct(){
        parent::__construct();
    }

    public function getResponse($request, $response, $args){
        switch ($request->getMethod()) {
            case 'GET':
                $postJson = $this->getAll();
                $response->getBody()->write($postJson);
                break;
            case 'POST':
                $postJson = $this->insert($request->getParsedBody());
                $response->getBody()->write($postJson);
            default:
                # code...
                break;
        }
        return $response->withHeader('Content-Type', 'application/json')->withStatus(201);;
    }

    private function getAll(){
        try {
            $stm = $this->db->connect()->prepare("SELECT * FROM post");
            $stm->execute();
            return json_encode($stm->fetchAll(PDO::FETCH_CLASS));
        } catch (PDOException $error) {
            return json_encode(['Operacion ' => 'Fallida']);
        }
    }

    private function insert($data){
        try {
            $stm = $this->db->connect()->prepare("INSERT INTO post (titulo, extracto, cuerpo, img) VALUES (:titulo, :extracto, :cuerpo, :img)");
            $stm->execute([
                'titulo' => $data['titulo'],
                'extracto' => $data['extracto'],
                'cuerpo' => $data['cuerpo'],
                'img' => $data['img']
            ]);
            return json_encode(['Operacion ' => 'Exitosa']);
        } catch (PDOException $error) {
            return json_encode(['Operacion ' => 'Fallida']);
        }
    }
    
}