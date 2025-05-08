var soNguyenA = 1;
var soNguyenB = 2;

//Cach 1:
console.log("Giá trị số nguyên A là: " + soNguyenA);
console.log("Giá trị số nguyên B là: " + soNguyenB);

//Cach 2:
console.log("Giá trị số nguyên A là: ", soNguyenA);
console.log(
  "Giá trị số nguyên A là: ",
  soNguyenA,
  " và so nguyên B là: ",
  soNguyenB
);

//Cach 3:
console.log(`So nguyen A co gia tri la: ${soNguyenA}`);
console.log(`So nguyen B co gia tri la: ${soNguyenB}`);

//Cach 4:
console.log(`Gia tri so nguyen B la: %s`, soNguyenB);

//Luyện Tập
let a, b;
a = Number(prompt("Nhap vao gia tri cho a: "));
b = Number(prompt("Nhap vao gia tri cho b: "));

var sum = a + b;
console.log("Tong hai so nguyen a va b la: " + sum);

var tich = a * b;
console.log("Tich cua 2 so nguyen a va b la: " + tich);
