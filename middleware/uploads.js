import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";
export const localUploads = multer({dest: 'uploads'});

export const remoteUploads = multer({ 
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/ uploads/*'
    })

})
