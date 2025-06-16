const history = [];

function predict() {
  const md5 = document.getElementById("md5Input").value.trim();
  if (!md5 || md5.length < 5) return alert("Vui lòng nhập mã MD5 hợp lệ!");

  const sum = md5.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const isTai = sum % 2 === 0;
  const result = isTai ? "Tài ✅" : "Xỉu ✅";

  const percentTai = ((sum % 10) + 50);
  const percentXiu = 100 - percentTai;

  document.getElementById("result").innerHTML =
    `👉 Dự đoán: <b>${result}</b><br>🔢 %Tài: ${percentTai}% – %Xỉu: ${percentXiu}%`;

  history.unshift(`MD5: ${md5} → ${result}`);
  if (history.length > 10) history.pop();

  document.getElementById("history").innerHTML =
    "<ul>" + history.map(h => `<li>${h}</li>`).join("") + "</ul>";

  document.getElementById("md5Input").value = "";
}