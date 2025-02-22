const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'flats',
        allowed_formats: ['jpg', 'jpeg', 'png'],  
    }
});

const upload = multer({ storage });

module.exports = upload;
