require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndRemove("5ec4189546d3833deb016f28")
//   .then((task) => {
//     console.log({ task });
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => console.log({ count }))
//   .catch((err) => console.log({ err }));
removeTaskAndCount = async (id) => {
  const task = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};
removeTaskAndCount("5ec5761b55253b56b50c36d2")
  .then((count) => console.log({ count }))
  .catch((err) => console.log({ err }));
