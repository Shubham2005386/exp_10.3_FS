const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


const s3 = new AWS.S3({ region: process.env.AWS_REGION });


const upload = multer({
storage: multerS3({
s3,
bucket: process.env.S3_BUCKET,
acl: 'public-read',
metadata: (req, file, cb) => cb(null, { fieldName: file.fieldname }),
key: (req, file, cb) => cb(null, `posts/${Date.now()}_${file.originalname}`)
})
});


module.exports = { upload, s3 };
