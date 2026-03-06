const mongoose = require('mongoose');

const laporanSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true
    }
});

const Laporan = mongoose.model('Laporan', laporanSchema);

module.exports = Laporan;