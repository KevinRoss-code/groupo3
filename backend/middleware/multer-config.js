const multer = require('multer');

const MIME_TYPES = {
    'image/jpg' : 'jpg',
    'image/jpeg' : 'jpg',
    'image/png' : 'png',
    'image/gif' : 'gif'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => { console.log(file.originalname)
        const name = file.originalname.split(' ').join("_");
        const extention = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extention);
    }
});

module.exports = multer({storage: storage}).single('image')