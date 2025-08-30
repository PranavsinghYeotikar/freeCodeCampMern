import Note from '../models/Note.js'

export const getNotes = async (req, res) => {
    try{
        const note = await Note.find().sort({createdAt: -1});
        res.status(200).json(note);
    }
    catch(error){
        console.error("Error in the getNotes/notesController", error)
        res.status(500).json({message:"Internal server error"});
    }
}

export const getNoteID = async (req, res) => {
    try {
        const noteByID = await Note.findById(req.params.id);
        res.status(200).json(noteByID);
    } catch (error) {
        console.error("Error in the getNoteID/notesController", error)
        res.status(500).json({message:"Internal server error"});
    }
}

export const postNotes = async (req, res) => {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});

        await newNote.save();
        res.status(201).json({message: "Note created"});

    } catch (error) {
        console.error("Error in the postNotes/notesController", error)
        res.status(500).json({message:"Internal server error"});
    }
}

export const putNotes = async (req, res) => {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, 
            {title,content},
            {new: true}
        );
        
        if(!updatedNote) return res.status(484).json({message:"Note not found"});

        res.status(200).json({message:"Note updated successfully"});
    } catch (error) {
        console.error("Error in the putNotes/notesController", error)
        res.status(500).json({message:"Internal server error"});
    }
}

export const deleteNotes = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if(!deletedNote) return res.status(484).json({message:'Note not found'});

        res.status(200).json({message:'note deleted successfully'})
    } catch (error) {
        console.error('Error in the deleteNotes/notesController', error)
        res.status(500).json({message:'Internal server error'});
    }
}