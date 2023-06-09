let gx =[0, 1, 1, 2, 0];
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
  key1 = key1 - 2;
  let p1 = 0;
  let p2 = key1;
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
for (let i = 5; i < 10; i++){
    mexing =[];
    mexing =[gx[i - 2], gx[i - 3]];
    mexing.push(gx[i - 2]);
    mexing.push(gx[i - 3]);


    pairmaker (i);
    gx[i] = mex (mexing);
  gx[9]=3;
  }

// for (const KEY in gx)
//   {
//     console.log (gx[KEY]);
//   }
let result;
let gamearr =[9,9, 9, 9, 9];
let newarr = gamearr.map ((item) =>gx[item]);
result = newarr[0] ^ newarr[1] ^ newarr[2] ^ newarr[3] ^ newarr[4];
console.log(result);