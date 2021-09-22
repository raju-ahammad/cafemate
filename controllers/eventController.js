const Events = require("../models/eventModels");

const EventController = {

    getAllEvent: async (req, res) => {
        try {
            const event = await Events.find().sort({ createdAt: 'desc'}).populate('song');
            return res.status(200).json(event)
        } 
        catch (err) {
         console.log(err);
          return res.status(500).json({msg: err.message}) 
          }
    },
    postEvent: async (req, res) => {
        try {
            const {eventname ,eventtime} = req.body
            const event = new Events({
                eventname ,eventtime
            })
            await event.save();
            console.log(event);
            return res.status(200).json({event, msg: "Blog succesfully save" });

        }  
        catch (err) {
            console.log(err);
            return res.status(500).json({ err: "some error occured" });
        }
    }
    

}

module.exports = EventController;


// getBlog: async (req, res) => {
//     try {
//         const id = req.params.id;
      
//         const blog = await Blogs.findById(id) 
        
//         res.json(blog)
//     } catch (err) {
        
//     }
// },
// updateBlog: async (req, res) => {
//     try {
//         const id = req.params.id
//         const blog = await Blogs.findOneAndUpdate({
//             _id: id,
//         },
//         req.body,
//         {
//             new: true
//         }
//         )
//         console.log(blog);
//         if (!blog) return res.status(404).json({msg: "Blog not found"})
//         res.json(blog)
//     } catch (err) {
//         return res.status(500).json({msg: err.message}) 
//     }
// },
// deleteBlog: async (req, res) => {
//     const id = req.params.id;
//     try {
//         const blog = await Blogs.findOneAndDelete({
//             _id: id,
//         })
//         if (!blog) return res.status(404).json({msg: "Blog not found"})

//         res.json({msg: "Blog deleted"})
//         res.send(blog)
//     } catch (err) {
//         return res.status(500).json()
//     }
// }