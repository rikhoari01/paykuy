$('#bri-manual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'bri-manual-details');
      $('.title').text('Transfer BRI Manual');
      $('#merchant-logo').attr({
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png',
            alt: 'BRI-Logo'
      });
      $('#mbanking').text('BRIMO');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>002</b> jika transfer dari ATM Bank lain)</li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman <a href="https//ib.bri.co.id ">https//ib.bri.co.id </a> pada browser.</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Sesama BRI.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token BRI.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi BRIMO di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Bank BRI dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.upload-btn').text('Upload Bukti Transfer');
      $('.upload-btn').removeClass('confirm-btn');
});

$('#bni-manual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'bni-manual-details');
      $('.title').text('Transfer BNI Manual');
      $('#merchant-logo').attr({
            src: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png',
            alt: 'BNI-Logo'
      });
      $('#mbanking').text('BNI Mobile Banking');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>009</b> jika transfer dari ATM Bank lain)</li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman <a href="https://ibank.bni.co.id ">https://ibank.bni.co.id </a> pada browser.</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Sesama BNI.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token BNI.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi BNI Mobile Banking di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Bank BNI Mobile Banking dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.upload-btn').text('Upload Bukti Transfer');
});

$('#mandiri-manual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'mandiri-manual-details');
      $('.title').text('Transfer Mandiri Manual');
      $('#merchant-logo').attr({
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/320px-Bank_Mandiri_logo_2016.svg.png',
            alt: 'Mandiri-Logo'
      });
      $('#mbanking').text('Livin by Mandiri');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>008</b> jika transfer dari ATM Bank lain)</li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman <a href="https://ibank.bankmandiri.co.id ">https://ibank.bankmandiri.co.id </a> pada browser.</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Sesama Mandiri.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token Mandiri.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi Livin by Mandiri di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Bank Livin by Mandiri dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.upload-btn').text('Upload Bukti Transfer');
});

$('#bca-manual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'bca-manual-details');
      $('.title').text('Transfer BCA Manual');
      $('#merchant-logo').attr({
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1199px-Bank_Central_Asia.svg.png',
            alt: 'BCA-Logo'
      });
      $('#mbanking').text('BCA Mobile Banking');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>014</b> jika transfer dari ATM Bank lain)</li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman <a href="https://ibank.klikbca.com/ ">https://ibank.klikbca.com/ </a> pada browser.</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Sesama BCA.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token BCA.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi Mobile BCA Banking di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Mobile BCA Banking dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.upload-btn').text('Upload Bukti Transfer');
});

$('#other-manual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'other-manual-details');
      $('.title').text('Transfer Antar Bank');
      $('#merchant-logo').attr({
            src: 'https://www.freeiconspng.com/thumbs/bank-icon/bank-icon-5.png',
            alt: 'other-Logo'
      });
      $('#mbanking').text('Mobile Banking');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer Antar Bank" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>0141234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman I-Banking masing-masing pada browser</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Ke Bank Lainnya dan memilih Bank BCA.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token Bank.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi Mobile Banking di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer Antarbank" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Bank BCA dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.upload-btn').text('Upload Bukti Transfer');
});

$('#bri-virtual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'bri-virtual-details');
      $('.title').text('Transfer BRIVA');
      $('#merchant-logo').attr({
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png',
            alt: 'BRI-Logo'
      });
      $('#mbanking').text('BRIMO');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>002</b> jika transfer dari ATM Bank lain)</li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman <a href="https//ib.bri.co.id ">https//ib.bri.co.id </a> pada browser.</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Sesama BRI.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token BRI.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi BRIMO di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Bank BRI dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.confirm-btn').text('Konfirmasi');
});

$('#bni-virtual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'bni-virtual-details');
      $('.title').text('Transfer BNI Virtual Account');
      $('#merchant-logo').attr({
            src: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png',
            alt: 'BNI-Logo'
      });
      $('#mbanking').text('BNI Mobile Banking');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>009</b> jika transfer dari ATM Bank lain)</li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman <a href="https://ibank.bni.co.id ">https://ibank.bni.co.id </a> pada browser.</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Sesama BNI.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token BNI.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi BNI Mobile Banking di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Bank BNI Mobile Banking dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.confirm-btn').text('Konfirmasi');
});

$('#mandiri-virtual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'mandiri-virtual-details');
      $('.title').text('Transfer Mandiri Virtual Account');
      $('#merchant-logo').attr({
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/320px-Bank_Mandiri_logo_2016.svg.png',
            alt: 'Mandiri-Logo'
      });
      $('#mbanking').text('Livin by Mandiri');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>008</b> jika transfer dari ATM Bank lain)</li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman <a href="https://ibank.bankmandiri.co.id ">https://ibank.bankmandiri.co.id </a> pada browser.</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Sesama Mandiri.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token Mandiri.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi Livin by Mandiri di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Bank Livin by Mandiri dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.confirm-btn').text('Upload Bukti Konfirmasi');
});

$('#bca-virtual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'bca-virtual-details');
      $('.title').text('Transfer BCA Virtual Account');
      $('#merchant-logo').attr({
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1199px-Bank_Central_Asia.svg.png',
            alt: 'BCA-Logo'
      });
      $('#mbanking').text('BCA Mobile Banking');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> (Gunakan kode bank <b>014</b> jika transfer dari ATM Bank lain)</li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman <a href="https://ibank.klikbca.com/ ">https://ibank.klikbca.com/ </a> pada browser.</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Sesama BCA.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token BCA.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi Mobile BCA Banking di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Mobile BCA Banking dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.confirm-btn').text('Upload Bukti Transfer');
});

$('#other-manual').click(() => {
      $('#info').removeClass('hidden');
      $('#main').addClass('hidden');
      $('.detail').removeClass('hidden');

      $('.detail').attr('id', 'other-manual-details');
      $('.title').text('Transfer Antar Bank');
      $('#merchant-logo').attr({
            src: 'https://www.freeiconspng.com/thumbs/bank-icon/bank-icon-5.png',
            alt: 'other-Logo'
      });
      $('#mbanking').text('Mobile Banking');
      $('#atm-intruction').html(
            '<li>Masukkan kartu ATM, lalu pilih bahasa dan masukkan PIN anda</li>' +
            '<li>Pilih "Menu Lain" dan pilih "Transfer Antar Bank" serta pilih jenis tabungan</li>' +
            '<li>Masukkan nomor rekening <b>0141234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Ya/Yes" untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#ibanking-intruction').html(
            '<li>Buka laman I-Banking masing-masing pada browser</li>' +
            '<li>Login user ID dan password.</li>' +
            '<li>Pilih Transfer</li>' +
            '<li>Klik Transfer Ke Bank Lainnya dan memilih Bank BCA.</li>' +
            '<li>Masukkan nomor rekening <b>1234567890</b> dan nominal transfer</li>' +
            '<li>Klik kirim pada menu konfirmasi</li>'+
            '<li>Masukkan password.</li>'+
            '<li>Klik Permintaan m-Token Bank.</li>' +
            '<li>Klik kirim  dan tunggu notifikasi transaksi berhasil</li>'+
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('#mbanking-intruction').html(
            '<li>Buka aplikasi Mobile Banking di smartphone anda lalu masukkan username dan password anda</li>' +
            '<li>Pilih "Transfer Antarbank" dan pilih "Tambah Daftar Baru"</li>' +
            '<li>Pilih tujuan Bank BCA dan masukkan nomor rekening <b>1234567890</b></li>' +
            '<li>Masukkan nominal pembayaran sesuai jumlah pembayaran</li>' +
            '<li>Periksa data transaksi, lalu klik "Transfer" dan masukkan PIN transaksi untuk melanjutkan</li>' +
            '<li>Upload bukti transfer pada kolom di bawah</li>');

      $('.confirm-btn').text('Upload Bukti Transfer');
});

// Back Button
$('.back-btn').click(() => {
      $('#info').addClass('hidden');
      $('#main').removeClass('hidden');
      $('.detail').addClass('hidden');
});

// Upload Modal
$('.upload-btn').click(() => {
      $('#upload-modal').removeClass('hidden');
})

// Confirm Modal
$('.confirm-btn').click(() => {
      $('#confirm-modal').removeClass('hidden');
})

// Modal Close
$('.upload-modal-close').click(() => {
      $('#upload-modal').addClass('hidden');
});

// Modal Close
$('.confirm-modal-close').click(() => {
      $('#confirm-modal').addClass('hidden');
});

$(window).click((e) => {
      if (e.target == document.getElementById("upload-modal")) {
            $('#upload-modal').addClass('hidden');
      }
})