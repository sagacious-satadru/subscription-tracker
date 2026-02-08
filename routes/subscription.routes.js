import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    return res.send({title: "GET (Retrieve) all subscriptions"})
});

subscriptionRouter.get("/:id", (req, res) => {
    return res.send({title: "GET (Retrieve) subscription by ID"})
});

subscriptionRouter.post("/", (req, res) => {
    return res.send({title: "POST (Create) subscription 😎"})
});

subscriptionRouter.put("/:id", (req, res) => {
    return res.send({title: "PUT (Update) subscription by ID"})
});

subscriptionRouter.delete("/:id", (req, res) => {
    return res.send({title: "DELETE (Remove) subscription by ID"})
});


subscriptionRouter.get("/user/:id", (req, res) => {
    return res.send({title: "GET (Retrieve) all subscriptions for a user by ID"})
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
    return res.send({title: "PUT (Update) subscription by ID to cancel"})
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
    return res.send({title: "GET (Retrieve) all upcoming renewals"})
});

export default subscriptionRouter;