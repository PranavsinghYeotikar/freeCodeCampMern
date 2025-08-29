
export const getNotes = async (req, res) => {
    try{
        const note = await Note;
    }
    catch(error){
        
    }
}

export const postNotes = (req, res) => {
    res.status(201).send("You posted");
}

export const putNotes = (req, res) => {
    res.status(200).send("You updated");
}

export const deleteNotes = (req, res) => {
    res.status(200).send("You deleted");
}