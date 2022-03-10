<?php

$con = mysqli_connect("localhost", "root", "", "blog");

mysqli_select_db($con, "blog");

/* if ($con) {
	echo "lets go sever connected";
} else {
	echo "Sorry server Not Connected";
} */