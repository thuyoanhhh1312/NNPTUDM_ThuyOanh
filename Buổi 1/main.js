// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Tạo mảng products và thêm 5 sản phẩm
const products = [
  new Product(1, "iPhone 15 Pro", 1500, 0, "SmartPhone", true),
  new Product(2, "Samsung Galaxy S24", 800, 25, "SmartPhone", true),
  new Product(3, "iPad Pro", 400, 15, "Tablet", false),
  new Product(4, "Headphones", 150, 50, "Accessories", true),
  new Product(5, "AirPods", 200, 30, "Accessories", true),
  new Product(6, "MacBook Pro", 2500, 10, "Laptop", true),
];

//Câu 3 : Tạo mảng mới chứa: name và price của các sản phẩm
const namePriceList = products.map((product) => ({
  name: product.name,
  price: product.price,
}));

console.log("Mảng name và price của các sản phẩm:", namePriceList);

//Câu 4: Lọc các sản phẩm còn hàng trong kho (quantity > 0)
const availableProducts = products.filter((product) => product.quantity > 0);
console.log("Các sản phẩm còn hàng trong kho:", availableProducts);

//Câu 5: Kiểm Tra xem có ít nhất 1 sản phẩm có giá trên 30 hay không
const isPriceOver30 = products.some((product) => product.price > 30);
console.log("Có ít nhất 1 sản phẩm có giá trên 30:", isPriceOver30);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const allAccessoriesAvailable = products
  .filter((product) => product.category === "Accessories")
  .every((product) => product.isAvailable === true);
console.log(
  "Tất cả sản phẩm thuộc danh mục Accessories có đang được bán:",
  allAccessoriesAvailable,
);

// Câu 7: Tính tổng giá trị kho hàng (price × quantity)
const tongGiaTriKhoHang = products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);
console.log("Tổng giá trị kho hàng:", tongGiaTriKhoHang);

//Câu 8: Dùng for...of để duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
for (const product of products) {
  console.log(
    `Tên sản phẩm: ${product.name} - Danh mục: ${product.category} - Trạng thái: ${
      product.isAvailable ? "Đang bán" : "Ngừng bán"
    }`,
  );
}

// Câu 9: Dùng for...in để:

// in ra tên thuộc tính
// giá trị tương ứng
// for (const key in products[0]) {
//   console.log("Tên thuộc tính:", key);
//   console.log("Giá trị tương ứng:", products[0][key]);
// }

// tên thuộc tính và giá trị tương ứng
for (const i in products) {
  console.log(`Sản phẩm thứ ${Number(i) + 1}:`);
  for (const key in products[i]) {
    console.log(
      ` Tên thuộc tính: ${key} - Giá trị tương ứng: ${products[i][key]}`,
    );
  }
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const sellingInStockNames = products
  .filter((products) => products.isAvailable === true && products.quantity > 0)
  .map((product) => product.name);

console.log(
  "Danh sách tên các sản phẩm đang bán và còn hàng:",
  sellingInStockNames,
);
