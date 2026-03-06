const PDFDocument = require('pdfkit');
const ExcelJS = require('exceljs');

class ExportService {

    static async exportToPDF(data, filePath) {
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(filePath));
        
        doc.fontSize(25).text('Laporan Data', { align: 'center' });
        doc.moveDown();
        
        data.forEach(item => {
            doc.fontSize(12).text(`Item: ${item.name}, Value: ${item.value}`);
        });
        
        doc.end();
    }

    static async exportToExcel(data, filePath) {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Laporan Data');
        
        worksheet.columns = [
            { header: 'Item', key: 'name', width: 30 },
            { header: 'Value', key: 'value', width: 30 }
        ];
        
        data.forEach(item => {
            worksheet.addRow({ name: item.name, value: item.value });
        });
        
        await workbook.xlsx.writeFile(filePath);
    }
}

module.exports = ExportService;