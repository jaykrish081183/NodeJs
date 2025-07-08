const express = require('express');
const multer = require('multer');

const app = express();
app.use(express.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the directory to store uploaded files
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname); // Create a unique filename
    }
      
  }), // Store files in memory
  limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
}).single('user_file'); // Expect a single file with the field name 'file'

app.post('/upload', upload, (req, res) => {
  res.send('File uploaded successfully: ' + req.file.filename);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});