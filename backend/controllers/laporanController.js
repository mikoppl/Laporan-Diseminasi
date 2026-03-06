const Laporan = require('../models/laporanModel');

// Create a new laporan
exports.createLaporan = async (req, res) => {
    try {
        const laporan = new Laporan(req.body);
        await laporan.save();
        res.status(201).json(laporan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all laporans
exports.getLapora = async (req, res) => {
    try {
        const laporans = await Laporan.find();
        res.status(200).json(laporans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a laporan by ID
exports.getLaporanById = async (req, res) => {
    try {
        const laporan = await Laporan.findById(req.params.id);
        if (!laporan) return res.status(404).json({ message: 'Laporan not found' });
        res.status(200).json(laporan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a laporan by ID
exports.updateLaporan = async (req, res) => {
    try {
        const laporan = await Laporan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!laporan) return res.status(404).json({ message: 'Laporan not found' });
        res.status(200).json(laporan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a laporan by ID
exports.deleteLaporan = async (req, res) => {
    try {
        const laporan = await Laporan.findByIdAndDelete(req.params.id);
        if (!laporan) return res.status(404).json({ message: 'Laporan not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};