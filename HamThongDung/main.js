//Các hàm toán học thông dụng
//Hàm 'Math.sqrt()' tính căn bậc 2
console.log("---Tinh can bac hai---");
let a = Number(prompt("Nhap vao so a: "));

let b = Math.sqrt(a);
console.log("Can bac 2 cua " + a + " la: " + b);

//Hàm 'Math.pow()' tính số mũ
console.log("---Tinh so mu---");
let c = parseFloat(prompt("Nhap vao gia tri cho c: "));
let d = parseFloat(prompt("Nhap vao gia tri cho d: "));

let e = Math.pow(c, d);
console.log(c + " mu " + d + " la: " + e);

//Hàm 'Math.abs()' tính giá trị tuyệt đối
console.log("---Tinh gia tri tuyet doi---");
let f = Math.abs(-10);
console.log("Gia tri tuyet doi cua -10 la: " + f);

//Hàm 'Math.ceil()' làm tròn lên & 'Math.floor' làm tròn xuống (làm tròn đến só nguyên gần nhất)
console.log("---Lam tron len & lam tron xuong---");
let g = 4.5;
let len = Math.ceil(g);
let xuong = Math.floor(g);
console.log("Gia tri " + g + " khi lam tron len la: " + len);
console.log("Gia tri " + g + " khi lam tron xuong la: " + xuong);

//Hàm 'Math.round()' làm tròn thành 1
console.log("---Lam tron thanh 1---");
let h = 7.48;
let j = Math.round(h);
console.log("So da lam tron: " + j);
