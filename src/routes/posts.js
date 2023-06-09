import { create, get, getId, update, remove } from "../controllers/postController.js";

const postRoutes = (app) => {
    app.post("/post", create);
    app.get("/post", get);
    app.get("/post/:id", getId);
    app.put("/post/:id", update);
    app.delete("/post/:id", remove);
}

export default postRoutes;

