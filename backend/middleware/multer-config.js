const multer = require('multer');

const MINE_TYPES = {
    'image/jpg' : 'jpg',
    'image/jepg' : 'jpg',
    'image/png' : 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join("_");
        const extention = MINE_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extention);
    }
});

module.exports = multer({storage: storage}).single('image')