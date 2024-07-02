import multer from "multer";
export const localUploads = multer({dest: 'uploads'});