//Độ ưu tiên tính toán Prefix, Postfix(Tiền tố, Hậu tố)
//Step 1: Prefix
//Step 2: Các phép toán còn lại
//Step 3: Gán giá trị cho biến bên trái dấu bằng
//Step 4: Tính Postfix

let a = 1;
let b = 2;
let c = 3;
let d = 4;

a++;
++b;
c--;
--d;

let n = a++ + --b * --c + d;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(n); // kết quả trả về là 77

// Lưu ý:
// - Với tiền tố (ví dụ: --b, --c): giá trị biến sẽ được thay đổi trước, rồi mới tham gia vào phép toán.
// - Với hậu tố (ví dụ: a++): giá trị biến sẽ tham gia vào phép toán trước, sau đó mới được tăng (hoặc giảm).
// → Tuy nhiên, sau khi biểu thức kết thúc, tất cả các biến tham gia tiền tố/hậu tố đều sẽ thay đổi giá trị.
// - Riêng biến 'd' không bị ảnh hưởng vì không có toán tử tăng/giảm áp dụng lên nó.
