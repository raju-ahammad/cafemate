const Images = require("../models/imageModel");

const imageUploadController = {
   
    postImage: async (req, res) => {
        try {
            if (req.file && req.file.path) {
            const image = new Images({
                image: req.file.path
            });
            await image.save();
            console.log(image);
            return res.status(200).json({image, msg: "Image succesfully Upload" });

            } else {
                console.log(req.file);
                return res.status(422).json({ error: "invalid post request" });
            }
        } 
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "some error occured" });
        }
    }

}

module.exports = imageUploadController;
