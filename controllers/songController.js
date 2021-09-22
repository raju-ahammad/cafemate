const Songs = require("../models/songReq");
const Events = require("../models/eventModels");

const SongController = {

    getAllsong: async (req, res) => {
        try {
            const event = await Songs.find().sort({ createdAt: 1})
            return res.status(200).json(event)
        } 
        catch (err) {
         console.log(err);
          return res.status(500).json({msg: err.message}) 
          }
    },
    postSong: async (req, res) => {
        try {
          const id = req.params.id;
          const comment = new Songs({
            title: req.body.title,
            artist: req.body.artist,
            events: id
              
          })
          await comment.save();
          const postRelated = await Events.findById(id);
          postRelated.song.push(comment);
          console.log(comment);
          return res.status(200).json({comment, msg: "Blog succesfully save" });
 
        }  
        catch (err) {
            console.log(err);
            return res.status(500).json({ err: "some error occured" });
        }
    }
    

}

module.exports = SongController;

