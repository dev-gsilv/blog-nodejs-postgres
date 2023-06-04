import { create, get, getId, update, remove } from "../controllers/authorController";

const authorRoutes = (app) => {
    app.post("/author", create);
    app.get("/author", get);
    app.get("/author/:id", getId);
    app.put("/author/:id", update);
    app.delete("/author/:id", remove);
}

export default authorRoutes;

