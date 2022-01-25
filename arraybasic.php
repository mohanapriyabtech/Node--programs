<!DOCTYPE html>
<html>
<body>

<?php
 $Shape = array("Circle", "Triangle","Rectangle");  # array displaying using foreach loop
foreach($Shape as $value){
    echo "$value<br>";
}
echo "------------------------------------------";

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $x => $val) {                          #array key value pair display using foreach(associative array)
  echo "$x = $val<br>";
}
echo "I Like ".$age['Peter'] . "<br>";                 # get the particular index value 
echo "------------------------------------------<br>";

$cars = array (
    array("Volvo",22,18),
    array("BMW",15,13),
    array("Saab",5,2),
    array("Land Rover",17,15)
  );                                                    #multi dimensional array using for loop


  for($i=0; $i<=3;$i++){
    echo "row $i<br>";
      for($j=0;$j<=2;$j++){
      echo "<ul><li>".$cars[$i][$j]."</li></ul>";
      }   
  }
  echo "------------------------------------------<br>";
$number =array(5,9,3,90,40); 
 sort($number);                                          # sorting and printing the array  
 foreach($number as $i){
     echo "$i<br>";
 }
 echo "------------------------------------------<br>";
 krsort($age);                                            #sorting ass array in desc order based on key 
 foreach($age as $i=>$i_val){
    echo "$i<br>";
    echo "key =:".$i. " value =". $i_val."<br>";
}    

$x="abc";
$$x="bcc";
$$$x="mnn";
echo $bcc;



?>

</body>
</html>
