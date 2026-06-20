import multer from "multer";

const storage = multer.diskStorage({
    destination: function(_req, _file, cb) {
        cb(null, './temp');
    },
    filename: function(_req, file, cb) {
        cb(null, file.filename);
    }
});

const upload = multer({ storage })

export default upload;
