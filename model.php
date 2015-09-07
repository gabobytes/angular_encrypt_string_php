<?php 

	$postdata = file_get_contents('php://input');
	$request = json_decode($postdata);

	@$txtEncriptar = md5($request->txtEncriptar);


	echo $txtEncriptar;
 ?>