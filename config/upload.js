const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  // destino dos arquivos
  destination: function (req, file, cb) {
    cb(null, path.join("public", "images"));
  },
  // nome do arquivo
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Uso do storage pelo multer
const upload = multer({ storage: storage });


module.exports = upload;
