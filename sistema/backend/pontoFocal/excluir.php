<?php 
include '../conexao.php';

$id = $_REQUEST['id'];

$sql = "DELETE FROM ponto_focal WHERE id='$id' ";
$resultado = mysqli_query($conexao, $sql);

session_start();
$_SESSION['mensagem'] = "$id excluido com Successo!";

//mandar para pagina principal
header('Location:../../pontoFocal.php');

?>