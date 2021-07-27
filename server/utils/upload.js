import multer from 'multer';
import mgs from 'multer-gridfs-storage';
const {GridFsStorage} = mgs;
//import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://admin:Qwertyuiop0987654321@cluster0-shard-00-00.c6e1s.mongodb.net:27017,cluster0-shard-00-01.c6e1s.mongodb.net:27017,cluster0-shard-00-02.c6e1s.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-ql6bvh-shard-0&authSource=admin&retryWrites=true&w=majority`,
    // url: 'mongodb://localhost:27017/image-upload',
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        console.log("hie")
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 