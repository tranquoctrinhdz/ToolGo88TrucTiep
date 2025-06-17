let lichSu = [];

function duDoan() {
  const md5 = document.getElementById("md5input").value.trim();
  const von = parseInt(document.getElementById("voninput").value.trim());

  if (md5.length !== 32) {
    document.getElementById("ketqua").innerText = "❌ Mã MD5 không hợp lệ.";
    return;
  }

  let sum = 0;
  for (let i = 0; i < md5.length; i++) {
    sum += md5.charCodeAt(i);
  }

  const percentTai = (sum % 100);
  const percentXiu = 100 - percentTai;
  const isTai = percentTai >= 50;

  const ketqua = isTai ? "✅ Dự đoán: Tài" : "✅ Dự đoán: Xỉu";
  const goiy = (von > 0) ? `💰 Gợi ý cược: ${Math.floor(von * 0.4)} VNĐ` : "";

  document.getElementById("ketqua").innerText = `${ketqua} (${percentTai}% Tài / ${percentXiu}% Xỉu)`;
  document.getElementById("goiy").innerText = goiy;

  // Cập nhật lịch sử (tối đa 10 dòng)
  lichSu.unshift(`${ketqua} (${percentTai}% Tài / ${percentXiu}% Xỉu)`);
  if (lichSu.length > 10) lichSu.pop();

  const historyEl = document.getElementById("history");
  historyEl.innerHTML = "";
  lichSu.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyEl.appendChild(li);
  });

  // Xoá mã MD5 sau khi dự đoán
  document.getElementById("md5input").value = "";
}