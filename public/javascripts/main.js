$("#bri-manual").click(() => {
  $("#info").removeClass("hidden");
  $("#main").addClass("hidden");
  $(".detail").removeClass("hidden");

  $(".detail").attr("id", "bri-manual-details");
  $(".title").text("Transfer BRI Manual");
  $("#merchant-logo").attr({
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png",
    alt: "BRI-Logo",
  });
  $("#mbanking").text("BRIMO");
  $("#atm-intruction").html(
    "<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>" +
      '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
      "<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>002</b> jika transfer dari ATM Bank lain)</li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#ibanking-intruction").html(
    '<li>Buka laman <a href="https//ib.bri.co.id ">https//ib.bri.co.id </a> pada browser.</li>' +
      "<li>Login user ID dan password.</li>" +
      "<li>Pilih Transfer</li>" +
      "<li>Klik Transfer Sesama BRI.</li>" +
      "<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>" +
      "<li>Klik kirim pada menu konfirmasi</li>" +
      "<li>Masukkan password.</li>" +
      "<li>Klik Permintaan m-Token BRI.</li>" +
      "<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>" +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#mbanking-intruction").html(
    "<li>Buka aplikasi BRIMO di smartphone anda lalu masukkan username dan password anda</li>" +
      '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
      "<li>Pilih tujuan Bank BRI dan masukkan nomor rekening <b>1234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#final-btn").text("Upload Bukti Transfer");
  $("#final-btn").addClass("upload-btn");
  $("#final-btn").removeClass("confirm-btn");

  $("#paymentMethod").val("BRI-Manual");
  $("#abc").val("BRI-Manual");
});

$("#bni-manual").click(() => {
  $("#info").removeClass("hidden");
  $("#main").addClass("hidden");
  $(".detail").removeClass("hidden");

  $(".detail").attr("id", "bni-manual-details");
  $(".title").text("Transfer BNI Manual");
  $("#merchant-logo").attr({
    src: "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png",
    alt: "BNI-Logo",
  });
  $("#mbanking").text("BNI Mobile Banking");
  $("#atm-intruction").html(
    "<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>" +
      '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
      "<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>009</b> jika transfer dari ATM Bank lain)</li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#ibanking-intruction").html(
    '<li>Buka laman <a href="https://ibank.bni.co.id ">https://ibank.bni.co.id </a> pada browser.</li>' +
      "<li>Login user ID dan password.</li>" +
      "<li>Pilih Transfer</li>" +
      "<li>Klik Transfer Sesama BNI.</li>" +
      "<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>" +
      "<li>Klik kirim pada menu konfirmasi</li>" +
      "<li>Masukkan password.</li>" +
      "<li>Klik Permintaan m-Token BNI.</li>" +
      "<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>" +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#mbanking-intruction").html(
    "<li>Buka aplikasi BNI Mobile Banking di smartphone anda lalu masukkan username dan password anda</li>" +
      '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
      "<li>Pilih tujuan Bank BNI Mobile Banking dan masukkan nomor rekening <b>1234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#final-btn").text("Upload Bukti Transfer");
  $("#final-btn").addClass("upload-btn");
  $("#final-btn").removeClass("confirm-btn");

  $("#paymentMethod").val("BNI-Manual");
});

$("#mandiri-manual").click(() => {
  $("#info").removeClass("hidden");
  $("#main").addClass("hidden");
  $(".detail").removeClass("hidden");

  $(".detail").attr("id", "mandiri-manual-details");
  $(".title").text("Transfer Mandiri Manual");
  $("#merchant-logo").attr({
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/320px-Bank_Mandiri_logo_2016.svg.png",
    alt: "Mandiri-Logo",
  });
  $("#mbanking").text("Livin by Mandiri");
  $("#atm-intruction").html(
    "<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>" +
      '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
      "<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>008</b> jika transfer dari ATM Bank lain)</li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#ibanking-intruction").html(
    '<li>Buka laman <a href="https://ibank.bankmandiri.co.id ">https://ibank.bankmandiri.co.id </a> pada browser.</li>' +
      "<li>Login user ID dan password.</li>" +
      "<li>Pilih Transfer</li>" +
      "<li>Klik Transfer Sesama Mandiri.</li>" +
      "<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>" +
      "<li>Klik kirim pada menu konfirmasi</li>" +
      "<li>Masukkan password.</li>" +
      "<li>Klik Permintaan m-Token Mandiri.</li>" +
      "<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>" +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#mbanking-intruction").html(
    "<li>Buka aplikasi Livin by Mandiri di smartphone anda lalu masukkan username dan password anda</li>" +
      '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
      "<li>Pilih tujuan Bank Livin by Mandiri dan masukkan nomor rekening <b>1234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#final-btn").text("Upload Bukti Transfer");
  $("#final-btn").addClass("upload-btn");
  $("#final-btn").removeClass("confirm-btn");

  $("#paymentMethod").val("Mandiri-Manual");
});

$("#bca-manual").click(() => {
  $("#info").removeClass("hidden");
  $("#main").addClass("hidden");
  $(".detail").removeClass("hidden");

  $(".detail").attr("id", "bca-manual-details");
  $(".title").text("Transfer BCA Manual");
  $("#merchant-logo").attr({
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1199px-Bank_Central_Asia.svg.png",
    alt: "BCA-Logo",
  });
  $("#mbanking").text("BCA Mobile Banking");
  $("#atm-intruction").html(
    "<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>" +
      '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
      "<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>014</b> jika transfer dari ATM Bank lain)</li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#ibanking-intruction").html(
    '<li>Buka laman <a href="https://ibank.klikbca.com/ ">https://ibank.klikbca.com/ </a> pada browser.</li>' +
      "<li>Login user ID dan password.</li>" +
      "<li>Pilih Transfer</li>" +
      "<li>Klik Transfer Sesama BCA.</li>" +
      "<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>" +
      "<li>Klik kirim pada menu konfirmasi</li>" +
      "<li>Masukkan password.</li>" +
      "<li>Klik Permintaan m-Token BCA.</li>" +
      "<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>" +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#mbanking-intruction").html(
    "<li>Buka aplikasi Mobile BCA Banking di smartphone anda lalu masukkan username dan password anda</li>" +
      '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
      "<li>Pilih tujuan Mobile BCA Banking dan masukkan nomor rekening <b>1234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#final-btn").text("Upload Bukti Transfer");
  $("#final-btn").addClass("upload-btn");
  $("#final-btn").removeClass("confirm-btn");

  $("#paymentMethod").val("BCA-Manual");
});

$("#other-manual").click(() => {
  $("#info").removeClass("hidden");
  $("#main").addClass("hidden");
  $(".detail").removeClass("hidden");

  $(".detail").attr("id", "other-manual-details");
  $(".title").text("Transfer Antar Bank");
  $("#merchant-logo").attr({
    src: "https://www.freeiconspng.com/thumbs/bank-icon/bank-icon-5.png",
    alt: "other-Logo",
  });
  $("#mbanking").text("Mobile Banking");
  $("#atm-intruction").html(
    "<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>" +
      '<li>Pilih "Menu Lain" dan pilih "Transfer Antar Bank" serta pilih jenis tabungan</li>' +
      "<li>Masukkan nomor rekening <b>0141234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#ibanking-intruction").html(
    "<li>Buka laman I-Banking masing-masing pada browser</li>" +
      "<li>Login user ID dan password.</li>" +
      "<li>Pilih Transfer</li>" +
      "<li>Klik Transfer Ke Bank Lainnya dan memilih Bank BCA.</li>" +
      "<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>" +
      "<li>Klik kirim pada menu konfirmasi</li>" +
      "<li>Masukkan password.</li>" +
      "<li>Klik Permintaan m-Token Bank.</li>" +
      "<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>" +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#mbanking-intruction").html(
    "<li>Buka aplikasi Mobile Banking di smartphone anda lalu masukkan username dan password anda</li>" +
      '<li>Pilih "Transfer Antarbank" dan pilih "Tambah Daftar Baru"</li>' +
      "<li>Pilih tujuan Bank BCA dan masukkan nomor rekening <b>1234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#final-btn").text("Upload Bukti Transfer");
  $("#final-btn").addClass("upload-btn");
  $("#final-btn").removeClass("confirm-btn");

  $("#paymentMethod").val("Other-Manual");
});

$("#bri-virtual").click(() => {
  $("#info").removeClass("hidden");
  $("#main").addClass("hidden");
  $(".detail").removeClass("hidden");

  $(".detail").attr("id", "bri-virtual-details");
  $(".title").text("Transfer BRIVA");
  $("#merchant-logo").attr({
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png",
    alt: "BRI-Logo",
  });
  $("#mbanking").text("BRIMO");
  $("#atm-intruction").html(
    "<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>" +
      '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
      "<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>002</b> jika transfer dari ATM Bank lain)</li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#ibanking-intruction").html(
    '<li>Buka laman <a href="https//ib.bri.co.id ">https//ib.bri.co.id </a> pada browser.</li>' +
      "<li>Login user ID dan password.</li>" +
      "<li>Pilih Transfer</li>" +
      "<li>Klik Transfer Sesama BRI.</li>" +
      "<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>" +
      "<li>Klik kirim pada menu konfirmasi</li>" +
      "<li>Masukkan password.</li>" +
      "<li>Klik Permintaan m-Token BRI.</li>" +
      "<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>" +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#mbanking-intruction").html(
    "<li>Buka aplikasi BRIMO di smartphone anda lalu masukkan username dan password anda</li>" +
      '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
      "<li>Pilih tujuan Bank BRI dan masukkan nomor rekening <b>1234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#final-btn").text("Konfirmasi");
  $("#final-btn").addClass("confirm-btn");
  $("#final-btn").removeClass("upload-btn");

  $("#paymentMethod").val("BRIVA");
});

$("#bni-virtual").click(() => {
  $("#info").removeClass("hidden");
  $("#main").addClass("hidden");
  $(".detail").removeClass("hidden");

  $(".detail").attr("id", "bni-virtual-details");
  $(".title").text("Transfer BNI Virtual Account");
  $("#merchant-logo").attr({
    src: "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png",
    alt: "BNI-Logo",
  });
  $("#mbanking").text("BNI Mobile Banking");
  $("#atm-intruction").html(
    "<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>" +
      '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
      "<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>009</b> jika transfer dari ATM Bank lain)</li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#ibanking-intruction").html(
    '<li>Buka laman <a href="https://ibank.bni.co.id ">https://ibank.bni.co.id </a> pada browser.</li>' +
      "<li>Login user ID dan password.</li>" +
      "<li>Pilih Transfer</li>" +
      "<li>Klik Transfer Sesama BNI.</li>" +
      "<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>" +
      "<li>Klik kirim pada menu konfirmasi</li>" +
      "<li>Masukkan password.</li>" +
      "<li>Klik Permintaan m-Token BNI.</li>" +
      "<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>" +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#mbanking-intruction").html(
    "<li>Buka aplikasi BNI Mobile Banking di smartphone anda lalu masukkan username dan password anda</li>" +
      '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
      "<li>Pilih tujuan Bank BNI Mobile Banking dan masukkan nomor rekening <b>1234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#final-btn").text("Konfirmasi");
  $("#final-btn").addClass("confirm-btn");
  $("#final-btn").removeClass("upload-btn");

  $("#paymentMethod").val("BNI-Virtual");
});

$("#mandiri-virtual").click(() => {
  $("#info").removeClass("hidden");
  $("#main").addClass("hidden");
  $(".detail").removeClass("hidden");

  $(".detail").attr("id", "mandiri-virtual-details");
  $(".title").text("Transfer Mandiri Virtual Account");
  $("#merchant-logo").attr({
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/320px-Bank_Mandiri_logo_2016.svg.png",
    alt: "Mandiri-Logo",
  });
  $("#mbanking").text("Livin by Mandiri");
  $("#atm-intruction").html(
    "<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>" +
      '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
      "<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>008</b> jika transfer dari ATM Bank lain)</li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#ibanking-intruction").html(
    '<li>Buka laman <a href="https://ibank.bankmandiri.co.id ">https://ibank.bankmandiri.co.id </a> pada browser.</li>' +
      "<li>Login user ID dan password.</li>" +
      "<li>Pilih Transfer</li>" +
      "<li>Klik Transfer Sesama Mandiri.</li>" +
      "<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>" +
      "<li>Klik kirim pada menu konfirmasi</li>" +
      "<li>Masukkan password.</li>" +
      "<li>Klik Permintaan m-Token Mandiri.</li>" +
      "<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>" +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#mbanking-intruction").html(
    "<li>Buka aplikasi Livin by Mandiri di smartphone anda lalu masukkan username dan password anda</li>" +
      '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
      "<li>Pilih tujuan Bank Livin by Mandiri dan masukkan nomor rekening <b>1234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#final-btn").text("Konfirmasi");
  $("#final-btn").addClass("confirm-btn");
  $("#final-btn").removeClass("upload-btn");

  $("#paymentMethod").val("Mandiri-Virtual");
});

$("#bca-virtual").click(() => {
  $("#info").removeClass("hidden");
  $("#main").addClass("hidden");
  $(".detail").removeClass("hidden");

  $(".detail").attr("id", "bca-virtual-details");
  $(".title").text("Transfer BCA Virtual Account");
  $("#merchant-logo").attr({
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1199px-Bank_Central_Asia.svg.png",
    alt: "BCA-Logo",
  });
  $("#mbanking").text("BCA Mobile Banking");
  $("#atm-intruction").html(
    "<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>" +
      '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
      "<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>014</b> jika transfer dari ATM Bank lain)</li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#ibanking-intruction").html(
    '<li>Buka laman <a href="https://ibank.klikbca.com/ ">https://ibank.klikbca.com/ </a> pada browser.</li>' +
      "<li>Login user ID dan password.</li>" +
      "<li>Pilih Transfer</li>" +
      "<li>Klik Transfer Sesama BCA.</li>" +
      "<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>" +
      "<li>Klik kirim pada menu konfirmasi</li>" +
      "<li>Masukkan password.</li>" +
      "<li>Klik Permintaan m-Token BCA.</li>" +
      "<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>" +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#mbanking-intruction").html(
    "<li>Buka aplikasi Mobile BCA Banking di smartphone anda lalu masukkan username dan password anda</li>" +
      '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
      "<li>Pilih tujuan Mobile BCA Banking dan masukkan nomor rekening <b>1234567890</b></li>" +
      "<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>" +
      '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
      "<li>Upload bukti transfer pada kolom di bawah</li>"
  );

  $("#final-btn").text("Konfirmasi");
  $("#final-btn").addClass("confirm-btn");
  $("#final-btn").removeClass("upload-btn");

  $("#paymentMethod").val("BCA-Virtual");
});

// Back Button
$(".back-btn").click(() => {
  $("#info").addClass("hidden");
  $("#main").removeClass("hidden");
  $(".detail").addClass("hidden");
});

// Modal
$("#final-btn").click(() => {
  $("#modal").removeClass("hidden");

  if ($("#final-btn").hasClass("upload-btn")) {
    $("#modal-title").text("Upload Bukti Transfer");
    $("#confirm-text").addClass("hidden");
    $("#receipt-input").removeClass("hidden");
  } else if ($("#final-btn").hasClass("confirm-btn")) {
    $("#modal-title").text("Konfirmasi Transfer");
    $("#submit-text").text("Konfirmasi");
    $("#confirm-text").removeClass("hidden");
    $("#receipt-input").addClass("hidden");
  }
});

// Modal Close
$(".upload-modal-close").click(() => {
  $("#modal").addClass("hidden");
});
$("#cancel").click(() => {
  $("#modal").addClass("hidden");
});

$(window).click((e) => {
  if (e.target == document.getElementById("upload-modal")) {
    $("#modal").addClass("hidden");
  }
});

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQUeihADWZR1Eh8Z0dttt0EKto7eNv-4E",
  authDomain: "paykuy-54aad.firebaseapp.com",
  projectId: "paykuy-54aad",
  storageBucket: "paykuy-54aad.appspot.com",
  messagingSenderId: "492569773274",
  appId: "1:492569773274:web:81ff6e1c05342ca6f2d1e3",
  measurementId: "G-PTSC51T7EE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Upload Receipt
$("#submit").click(async () => {
  if ($("#receipt-input").val()) {
    $("#submit-text").addClass("hidden");
    $("#submit-animation").removeClass("hidden");

    const ref = firebase.storage().ref();
    const file = document.querySelector("#receipt-input").files[0];
    const name = "receipt-" + +new Date();
    const metadata = { contentType: file.type };

    const id = $("#id").val();
    const payment = $("#paymentMethod").val();

    const upload = ref.child(name).put(file, metadata);
    await upload
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        $.ajax({
          url: "/transaction/" + id + "/edit",
          method: "PUT",
          dataType: "json",
          data: {
            paymentMethod: payment,
            receipt: url,
          },
          error: () => {
            alert("Something error!");
          },
        });
      });
    setInterval("location.reload()", 5000);
  }
});
