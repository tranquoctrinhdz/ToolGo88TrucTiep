function duDoan() {
  const md5 = document.getElementById("md5input").value.trim();
  if (md5.length !== 32) {
    document.getElementById("ketqua").innerText = "❌ Mã MD5 không hợp lệ.";
    return;
  }

  let sum = 0;
  for (let i = 0; i < md5.length; i++) {
    sum += md5.charCodeAt(i);
  }

  const duDoan = (sum % 2 === 0) ? "✅ Dự đoán: Tài" : "✅ Dự đoán: Xỉu";
  document.getElementById("ketqua").innerText = duDoan;
}