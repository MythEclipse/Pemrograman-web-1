$(document).ready(function () {
    const hargaKamar = {
        standar: 500000,
        superior: 750000,
        deluxe: 1000000,
        junior_suite: 1250000,
        suite_bisnis: 1500000,
        suite_eksekutif: 1750000,
        suite_keluarga: 2000000,
        suite_mewah: 2500000,
        suite_presiden: 3000000,
    };

    $("#tipe_kamar").change(function () {
        const tipeKamar = $(this).val();
        const hargaPerMalam = hargaKamar[tipeKamar] || 0;
        $("#harga").val(`Rp ${hargaPerMalam.toLocaleString("id-ID")}`);
    });

    $("#durasi_menginap, #termasuk_breakfast").on(
        "input change",
        function () {
            calculateTotal();
        }
    );

    function calculateTotal() {
        const tipeKamar = $("#tipe_kamar").val();
        const hargaPerMalam = hargaKamar[tipeKamar] || 0;
        const durasiMenginap = parseInt($("#durasi_menginap").val());
        const termasukBreakfast = $("#termasuk_breakfast").is(":checked");

        if (isNaN(durasiMenginap) || durasiMenginap <= 0) {
            $("#total_bayar").val("");
            return;
        }

        let totalBayar = hargaPerMalam * durasiMenginap;
        if (durasiMenginap > 3) {
            totalBayar *= 0.9;
        }

        if (termasukBreakfast) {
            totalBayar += 80000;
        }

        $("#total_bayar").val(`Rp ${totalBayar.toFixed(2).toLocaleString()}`);
    }

    $("#bookingForm").submit(function (e) {
        e.preventDefault();

        const namaPemesan = $("#nama_pemesan").val();
        const nomorIdentitas = $("#nomor_identitas").val();
        const jenisKelamin = $("#jenis_kelamin").val();
        const tipeKamar = $("#tipe_kamar").val();
        const durasiMenginap = parseInt($("#durasi_menginap").val());
        const termasukBreakfast = $("#termasuk_breakfast").is(":checked");
        const totalBayar = $("#total_bayar").val();

        const hargaPerMalam = hargaKamar[tipeKamar] || 0;
        let diskon = 0;
        if (durasiMenginap > 3) {
            diskon = hargaPerMalam * durasiMenginap * 0.1;
        }

        $("#modalBody").html(`
            <p><strong>Nama Pemesan:</strong> ${namaPemesan}</p>
            <p><strong>Nomor Identitas:</strong> ${nomorIdentitas}</p>
            <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
            <p><strong>Tipe Kamar:</strong> ${tipeKamar.toUpperCase()}</p>
            <p><strong>Durasi Menginap:</strong> ${durasiMenginap} hari</p>
            <p><strong>Diskon:</strong> Rp ${diskon.toFixed(2)}</p>
            <p><strong>Total Bayar:</strong> ${totalBayar}</p>
        `);

        $("#resumeModal").addClass("active");
    });

    window.closeModal = function () {
        $("#resumeModal").removeClass("active");
    };
});