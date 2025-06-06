console.warn("⚠️ ALERT: Unauthorized access attempts will be logged.");
console.log("🔒 SCP SecureNet v3.1 booting...");

const o = document.getElementById("passwordOverlay");
const i = document.getElementById("passwordInput");
const e = document.getElementById("errorMsg");
const l = document.querySelectorAll("a");
l.forEach(a => a.style.pointerEvents = "none");

setTimeout(() => {
  o.style.display = "flex";
}, 2000);

i.addEventListener("keydown", function (t) {
  if (t.key === "Enter") {
    if (i.value === atob("MDAxNg==")) { // Base64 encoded "0016"
      console.log("✅ ACCESS GRANTED: User logged.");
      o.style.display = "none";
      l.forEach(a => a.style.pointerEvents = "auto");
    } else {
      console.log("❌ ACCESS DENIED: Logging IP...");
      e.style.display = "block";
      i.value = "";
    }
  }
});

// Sound toggle
const s = document.getElementById("ambientSound");
const b = document.getElementById("toggleSoundBtn");

b.addEventListener("click", () => {
  s.muted = !s.muted;
  b.textContent = s.muted ? "🔈 Sound Off" : "🔇 Sound On";
});
