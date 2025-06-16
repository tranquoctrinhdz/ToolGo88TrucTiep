const history = [];

function predict() {
  const md5 = document.getElementById("md5Input").value.trim();
  const vốn = parseFloat(document.getElementById("vốnInput").value);

  if (!md5 || md5.length < 5) {
    alert("Vui lòng nhập mã MD5 hợp lệ!");
    return;
  }

  const sum = md5.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const isTai = sum % 2 === 0;

  const percent = Math.floor(Math.random() * 21) + 70; // Random 70–90%
  const percentTai = isTai ? percent : 100 - percent;
  const percentXiu = 100 - percentTai;

  const result = isTai ? "Tài ✅" : "Xỉu ✅";
  const cượcGợiÝ = vốn ? Math.round(vốn * 0.4) : "Chưa nhập vốn";

  document.getElementById("result").innerHTML =
    `👉 Dự đoán: <b>${result}</b><br>
     🔢 %Tài: ${percentTai}% – %Xỉu: ${percentXiu}%<br>
     💰 Gợi ý cược: ${cượcGợiÝ}`;

  history.unshift(`MD5: ${md5} → ${result}`);
  if (history.length > 10) history.pop();

  document.getElementById("history").innerHTML =
    "<h3>Lịch sử:</h3><ul>" + history.map(h => `<li>${h}</li>`).join("") + "</ul>";

  document.getElementById("md5Input").value = "";
}