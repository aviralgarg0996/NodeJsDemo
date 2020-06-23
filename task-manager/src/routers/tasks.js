const express=require('express')
const Task=require("../models/task")
const router=new express.Router()

router.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    try {
      await task.save();
      res.status(201).send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.get("/tasks", async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.status(200).send(tasks);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.get("/tasks/:id", async (req, res) => {
    let { id } = req.params;
    try {
      const task = await Task.findById(id);
      if (!task) {
        return res.status(404).send();
      }
      res.status(200).send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.patch("/tasks/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "completed"];
    const isValidOp = updates.every((item) => allowedUpdates.includes(item));
    if (!isValidOp) {
      return res.status(400).send({ error: "Invalid updates!" });
    }
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      if (!task) {
        return res.status(404).send();
      }
      updates.forEach((update) => (task[update] = req.body[update]));
      await task.save();
  
     
      res.status(200).send(task);
    } catch (error) {
      console.log({error})
      res.status(500).send(error);
    }
  });
  router.delete('/tasks/:id',async(req,res)=>{
    try {
      const task = await Task.findByIdAndDelete(req.params.id)
      if (!task) {
        return res.status(404).send();
      }
      res.status(200).send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  })
  module.exports=router