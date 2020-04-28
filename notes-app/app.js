const yargs = require("yargs");
const notes = require("./notes");
yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: false,
      type: "string",
    },
    body: {
      describe: "Notes Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "Removing the note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: false,
      type: "string",
    }
  },
  handler(argv) {
   notes.removeNotes(argv.title)
  },
});

yargs.command({
  command: "list",
  description: "List the note",

  handler() {
   notes.listNotes()
  },
});

yargs.command({
  command: "read",
  description: "Read the note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    }},
  handler(argv) {
   notes.getNotes(argv.title)
  },
});
yargs.parse();
