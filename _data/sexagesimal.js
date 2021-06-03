// Tantek's NewBase60: http://tantek.pbworks.com/w/page/19402946/NewBase60
// Code: https://github.com/tantek/cassis/blob/master/cassis.js#num_to_sxg
function substr(s, o, n) {
  var m = strlen(s);
  if ((o < 0 ? -1-o : o) >= m) { return false; }
  if (o < 0) { o = m + o; }
  if (n < 0) { n = m - o + n; }
  if (n === undefined) { n = m - o; }
  return s.substring(o, o + n);
}

function num_to_sxg($n) {
  var $d, $m, $p, $s;
  $m = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz";
  $p = "";
  $s = "";
  if ($n==="" || $n===0) { return "0"; }
  if ($n<0) {
    $n = -$n;
    $p = "-";
  }
  while ($n>0) {
    $d = $n % 60;
    $s = $m[$d] + $s;
    $n = ($n-$d)/60;
  }
  return $p + $s;
}

function sxg_to_num($s) {
  var $c, $i, $j, $m, $n;
  $j = $s.length;
  $m = 1;
  $n = 0;
  if ($s[0]==="-") {
    $m = -1;
    $j-=1;
    $s = substr($s, 1, $j);
  }
  for ($i=0; $i<$j; $i+=1) { // iterate from first to last char of $s
    $c = $s[$i].charCodeAt(0); //  put current ASCII of char into $c
    if ($c>=48 && $c<=57) { $c=$c-48; }
    else if ($c>=65 && $c<=72) { $c-=55; }
    else if ($c===73 || $c===108) { $c=1; } // typo cap I lower l to 1
    else if ($c>=74 && $c<=78) { $c-=56; }
    else if ($c===79) { $c=0; } // error correct typo capital O to 0
    else if ($c>=80 && $c<=90) { $c-=57; }
    else if ($c===95 || $c===45) { $c=34; } // _ and dash - to _
    else if ($c>=97 && $c<=107) { $c-=62; }
    else if ($c>=109 && $c<=122) { $c-=63; }
    else { break; } // treat all other noise as end of number
    $n = 60*$n + $c;
  }
  return $n*$m;
}

exports.stringToSexagesimal = function () {
    
}

exports.dateToSexagesimal = function () {
    
}