# ⚡ JavaScript Practice: Objects, Strings & Classes

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completed-2ea44f?style=flat-square)
![Score](https://img.shields.io/badge/Points-100%2F100-blue?style=flat-square)

Bu repozitoriyada JavaScript-in əsas konsepsiyaları — **Class (Method Chaining)**, **Array metodları**, **String manipulyasiyası** və **Obyekt yönümlü strukturlar** üzrə 4 praktiki tapşırığın həlli təqdim olunur.

---

## 📂 Tapşırıqlar

### 1️⃣ `CustomMatch` (Zəncirvari Əməliyyatlar)
Riyazi əməliyyat öncəliyini (vurma/bölmə) nəzərə almadan, əməliyyatları soldan-sağa ardıcıl icra edən sinif.

```javascript
const result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result.value); // 39
