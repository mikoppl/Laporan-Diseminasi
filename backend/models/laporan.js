const mongoose = require('mongoose');

const laporanSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nip: {
        type: String,
        required: true
    },
    jabatan: {
        type: String,
        required: true
    },
    tanggalLaporan: {
        type: Date,
        default: Date.now
    },
    waktuPelaksanaan: {
        type: String,
        required: true
    },
    metode: {
        type: String,
        required: true
    },
    peserta: {
        type: String,
        required: true
    },
    masalahYangDihadapi: {
        type: String
    },
    pemecahanMasalah: {
        type: String
    },
    tindakLanjut: {
        type: String
    },
    dokumentasi: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Laporan', laporanSchema);