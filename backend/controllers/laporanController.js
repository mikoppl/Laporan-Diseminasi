// laporanController.js

const Laporan = require('../models/laporan'); // Importing the Laporan model 

// Create a new laporan
exports.createLaporan = async (req, res) => {
    try {
        const newLaporan = new Laporan(req.body);
        await newLaporan.save();
        res.status(201).json(newLaporan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all laporan
exports.getAllLaporan = async (req, res) => {
    try {
        const laporanList = await Laporan.find();
        res.status(200).json(laporanList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single laporan by ID
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
exports.updateLaporanById = async (req, res) => {
    try {
        const updatedLaporan = await Laporan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLaporan) return res.status(404).json({ message: 'Laporan not found' });
        res.status(200).json(updatedLaporan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a laporan by ID
exports.deleteLaporanById = async (req, res) => {
    try {
        const deletedLaporan = await Laporan.findByIdAndDelete(req.params.id);
        if (!deletedLaporan) return res.status(404).json({ message: 'Laporan not found' });
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};