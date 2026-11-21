const dialogDemo = document.getElementById("dialog-demo")
const tombolTutup = document.getElementById("tutup-dialog")
const tombolWhatsapp = document.querySelectorAll('[data-aksi="whatsapp-demo"]')

function bukaDialogDemo(event) {
  event.preventDefault()

  if (typeof dialogDemo.showModal === "function") {
    dialogDemo.showModal()
  } else {
    alert(
      "Ini tombol demo. Kedai Senja Coffee fiktif, jadi tidak menghubungi nomor WhatsApp apa pun.",
    )
  }
}

tombolWhatsapp.forEach(function (tombol) {
  tombol.addEventListener("click", bukaDialogDemo)
})

tombolTutup.addEventListener("click", function () {
  dialogDemo.close()
})
