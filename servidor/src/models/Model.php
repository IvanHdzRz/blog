<?php 

require 'C:\Users\Andi-PC\Documents\PHP\blog\servidor\src\lib\Database.php';

class Model {
    protected $db;
    public function __construct(){
        $this->db = new Database();
    }
}