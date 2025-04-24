let saldo = 100000;
    let riwayat = [];
    let transaksiKe = 1;

    function jalankanBank() {
      let lanjut = true;

      while (lanjut) {
        let pilihan = prompt(
          "Selamat datang di Bank Sederhana\n\nPilih menu:\n1. Cek Saldo\n2. Setor Tunai\n3. Tarik Tunai\n\nMasukkan angka pilihan:"
        );

        if (pilihan === null) break;

        switch (pilihan) {
          case "1":
            alert(`Saldo Anda saat ini adalah Rp${saldo.toLocaleString()}`);
            break;

          case "2":
            let setor = prompt("Masukkan jumlah uang yang ingin disetor:");

            if (setor === null) break;
            if (isNaN(setor) || setor.trim() === "") {
              alert("❌ Input harus berupa angka.");
              break;
            }

            setor = parseFloat(setor);
            if (setor <= 0) {
              alert("❌ Jumlah setor harus lebih dari 0.");
            } else {
              saldo += setor;
              alert(`✅ Setor tunai berhasil! Saldo sekarang: Rp${saldo.toLocaleString()}`);
              tambahRiwayat("Setor", setor, saldo);
            }
            break;

          case "3":
            let tarik = prompt("Masukkan jumlah uang yang ingin ditarik:");

            if (tarik === null) break;
            if (isNaN(tarik) || tarik.trim() === "") {
              alert("❌ Input harus berupa angka.");
              break;
            }

            tarik = parseFloat(tarik);
            if (tarik <= 0) {
              alert("❌ Jumlah tarik harus lebih dari 0.");
            } else if (tarik > saldo) {
              alert("❌ Gagal! Saldo tidak mencukupi.");
            } else {
              saldo -= tarik;
              alert(`✅ Tarik tunai berhasil! Sisa saldo Anda: Rp${saldo.toLocaleString()}`);
              tambahRiwayat("Tarik", tarik, saldo);
            }
            break;

          default:
            alert("❌ Pilihan tidak valid. Silakan pilih 1, 2, atau 3.");
        }

        lanjut = confirm("Apakah Anda ingin melakukan transaksi lain?");
      }

      alert("Terima kasih telah menggunakan layanan Bank Sederhana! 👋");
    }

    function tambahRiwayat(jenis, jumlah, saldoSetelah) {
      const waktu = new Date().toLocaleString();
      const row = `
        <tr>
          <td>${transaksiKe++}</td>
          <td>${jenis}</td>
          <td>Rp${jumlah.toLocaleString()}</td>
          <td>Rp${saldoSetelah.toLocaleString()}</td>
          <td>${waktu}</td>
        </tr>
      `;
      document.getElementById("riwayatBody").insertAdjacentHTML("afterbegin", row);
    }