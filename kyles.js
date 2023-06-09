let gx =[0, 1, 2];
let mexing =[];
function mex (mexing)
{
  let k = 0;
  for (const key in mexing)
    {
      if (mexing.includes (k)){
	k++} }
  return k;}


function pairmaker (key1)
{
  key1 = key1 - 1;
  let p1 = 0;
  let p2 = key1 ;
  let xored;
  for (let index = 1; index < key1; index++){
    if (index <= (key1 / 2)){
	  p1++;
	  p2--;
	  // console.log (p1, p2) ;
    xored = p1 ^ p2;
	  mexing.push (xored);}


      else{
	  break;}}}
for (let i = 2; i < 1403; i++){
    mexing =[];
    // mexing =[gx[i - 1], gx[i - 2]];
    mexing.push(gx[i - 1]);
    mexing.push(gx[i - 2]);


    pairmaker (i);
    pairmaker(i-1)
    gx[i] = mex (mexing);}

for (const KEY in gx)
  {
    console.log (gx[KEY]);
 }
// let result;
// let gamearr =[9,9, 9, 9, 9];
// let newarr = gamearr.map ((item) =>gx[item]);
// result = newarr[0] ^ newarr[1] ^ newarr[2] ^ newarr[3] ^ newarr[4];
// console.log(result);