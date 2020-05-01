const fs = require("fs");
const chalk = require("chalk");
const getNotes = (title) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title == title);
  debugger
  if (duplicateNote) {
    console.log(chalk.green.inverse(duplicateNote.title));
    console.log(duplicateNote.body);
  } else {
    console.log(chalk.red.inverse("No notes found with this title"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({ title, body });
    console.log(notes);
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Duplicate Note");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const removeNotes = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  if (notes.length == updatedNotes.length) {
    console.log(chalk.red.inverse(" No Notes Found"));
  } else {
    console.log(chalk.green.inverse("Notes Deleted"));
  }
  saveNotes(updatedNotes);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};
module.exports = { getNotes, addNote, removeNotes, listNotes, getNotes };
