import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send({title: "GET (Retrieve) all users"})
});

userRouter.get("/me", (req, res) => {
    res.send({title: "GET (Retrieve) Me"})
});

userRouter.get("/:id", (req, res) => {
    res.send({title: "GET (Retrieve) user by ID"})
});

userRouter.post("/:id", (req, res) => {
    res.send({title: "POST (Create) user by ID"})
});

userRouter.put("/:id", (req, res) => {
    res.send({title: "PUT (Update) user by ID"})
});

userRouter.delete("/:id", (req, res) => {
    res.send({title: "DELETE (Remove) user by ID"})
});

export default userRouter;