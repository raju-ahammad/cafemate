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
          const song = new Songs({
            title: req.body.title,
            artist: req.body.artist,
            events: id,
            user: req.body.user
              
          })
          await song.save();
          const events = await Events.findById(id);
          console.log("Events",events);
          events.song.push(song);
          await events.save();
          console.log(song);
          return res.status(200).json({song, msg: "Comment succesfully save" });
 
        }  
        catch (err) {
            console.log(err);
            return res.status(500).json({ err: "some error occured" });
        }
    },
    updateSong: async (req, res) => {
        const eventid = req.params.eventid;
        const id = req.params.id;

        try {
            const song = await Songs.findOneAndUpdate({
                _id: id,
                events: eventid
            },
            req.body,
            {
                new: true
            }
            )
            console.log(song);
            if (!song) return res.status(404).json({msg: "song not found"})
            res.json(song)
        } catch (err) {
            console.log(err);
            return res.status(500).json({msg: err.message}) 

        }
    },
    

}

module.exports = SongController;

