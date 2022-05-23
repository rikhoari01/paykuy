$('#bri-manual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'bri-manual-details');
      $('.title').text('Transfer BRI Manual');
      $('#merchant-logo').attr({
            src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png',
            alt : 'BRI-Logo'
      });
      $('#mbanking').text('BRIMO');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>'+
            '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>'+
            '<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>002</b> jika transfer dari ATM Bank lain)</li>'+
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>'+
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');
      $('#mbanking-intruction').html(
            '<li>Buka aplikasi BRIMO di smartphone anda lalu masukkan username dan password anda</li>'+
            '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>'+
            '<li>Pilih tujuan Bank BRI dan masukkan nomor rekening <b>1234567890</b></li>'+
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>'+
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.final-btn').text('Upload Bukti Transfer');
      $('.final-btn').text('Upload Bukti Transfer');
});

$('#bni-manual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'bni-manual-details');
      $('.title').text('Transfer BNI Manual');
      $('#merchant-logo').attr({
            src : 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png',
            alt : 'BNI-Logo'
      });
      $('#mbanking').text('BNI Mobile Banking');

      $('.final-btn').text('Upload Bukti Transfer');
});

// Back Button
$('.back-btn').click(() => {
      $('#info').addClass('hidden');
      $('#main').removeClass('hidden');
      $('.detail').addClass('hidden');
});

// Upload Modal
$('.final-btn').click(() => {
      $('#upload-modal').removeClass('hidden');
})


// Modal Close
$('.modal-close').click(() => {
      $('#upload-modal').addClass('hidden');
});

$(window).click((e) => {
      if(e.target == document.getElementById("upload-modal")) {
            $('#upload-modal').addClass('hidden');
      }
})