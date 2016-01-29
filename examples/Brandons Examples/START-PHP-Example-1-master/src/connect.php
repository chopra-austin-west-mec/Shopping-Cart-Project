<?php
try {
    $dbh = new PDO('mysql:host=localhost;dbname=reservation', 'root', 'root');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}