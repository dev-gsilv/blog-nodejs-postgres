import { create, get, getId, update, remove } from "../controllers/commentController.js";

const commentRoutes = (app) => {
    app.post("/comment", create);
    app.get("/comment", get);
    app.get("/comment/:id", getId);
    app.put("/comment/:id", update);
    app.delete("/comment/:id", remove);
}

export default commentRoutes;

