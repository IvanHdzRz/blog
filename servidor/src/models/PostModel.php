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
        return $response->withHeader('Content-Type', 'application/json')
                        ->withHeader('Access-Control-Allow-Origin', '*')
                        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')                
                        ->withStatus(201);
    }

    private function getAll(){

        $limit = (isset($_GET['limit'])) && $_GET['limit'] >= 0 ? $_GET['limit'] : 10;
        $offset = (isset($_GET['offset'])) && $_GET['offset'] > 0 ? $_GET['offset'] : 0;

        try {   
            $countPost = $this->db->connect()->prepare("SELECT COUNT(*) FROM post");
            $countPost->execute();

            $stm = $this->db->connect()->prepare("SELECT * FROM post ORDER BY created_at DESC LIMIT :limit OFFSET :offset");
            $stm->execute([
                'limit' => $limit,
                'offset' => $offset
            ]);

            return json_encode(['count' => $countPost->fetchColumn(),'posts' => $stm->fetchAll(PDO::FETCH_CLASS)]);

        } catch (PDOException $error) {

            return json_encode(['Operacion ' => 'Fallida']);

        }
    }

    private function insert($data){
        try {
            $stm = $this->db->connect()->prepare("INSERT INTO post (titulo, extracto, cuerpo, img, created_at, updated_at) VALUES (:titulo, :extracto, :cuerpo, :img, :created_at, :updated_at)");
            $stm->execute([
                'titulo' => $data['titulo'],
                'extracto' => $data['extracto'],
                'cuerpo' => $data['cuerpo'],
                'img' => $data['img'],
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s")
            ]);
            return json_encode(['Operacion ' => 'Exitosa']);
        } catch (PDOException $error) {
            print_r($error);
            // return json_encode(['Operacion ' => 'Fallida']);
        }
    }
    
}