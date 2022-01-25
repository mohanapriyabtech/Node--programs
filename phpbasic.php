<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!<br>";

$name = "ajay";
$Tamil_marks = 40;
$English_marks = 60;
$Maths_marks = 70;
$result =$Tamil_marks+$English_marks+$Maths_marks;
echo $result."<br>";

$x=33.8;
echo Var_dump($x)."<br>";

echo Var_dump(is_float($x))."<br>";
$changetype=(int)$x;
echo $changetype."<br>";
echo(max(5,8,60,3,-2))."<br>";
$name = "Hypertext";
$name2= "Preprocessor";
echo $name.$name2."<br>";
$total=0;
function add(int $firstno ,int $secondno){
   $total=$firstno +$secondno ;
   return $total;
   }

echo "Total is" .add(4,8)."<br>";
?>

</body>
</html>

