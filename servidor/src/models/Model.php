<?php 

require_once __DIR__.'\..\lib\Database.php';
class Model {
    protected $db;
    public function __construct(){
        $this->db = new Database();
    }
}