# JavaScript: Object, String & Class Tasks

Bu repozitoriyada JavaScript-də **Class (Method Chaining)**, **Array metodları**, **String manipulyasiyası** və **Obyekt yönümlü proqramlaşdırma** mövzularını əhatə edən 4 praktiki tapşırığın həlli yer almışdır.

---

## 📋 Tapşırıqların Təsviri və Həlli

### 1. `CustomMatch` Class (Method Chaining)
Riyazi əməliyyat ardıcıllığı (vurma/bölmə öncəliyi) nəzərə alınmadan, verilən əməliyyatları soldan-sağa zəncirvari şəkildə icra edən sinif.

* **Metodlar:** `plus()`, `minus()`, `multiply()`, `divide()`
* **Nümunə:**
  ```javascript
  const result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
  console.log(result.value); // Nəticə: 39
