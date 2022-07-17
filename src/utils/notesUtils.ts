import { NewNote } from "../services/notesServices.js";

async function verifyExistenceAndOwner(note: NewNote, userId: number) {
    if (!note) throw {type: "not found"};
    if (note.userId !== userId) throw {type: "unauthorized"};
}

const notesUtils = {
    verifyExistenceAndOwner
};

export default notesUtils;