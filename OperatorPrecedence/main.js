//Ưu tiên () => * => / => + => - //Các phép toán thông thường sẽ đi từ trái qua phải
let diemToan = 8;
let diemVan = 7.5;

let dtb = (diemToan + diemVan) / 2;
console.log("Diem trung binh la: " + dtb);

//Ưu tiên Right to Left
let a = (b = 22); //Giá trị được gán lần lượt từ phải sang trái
