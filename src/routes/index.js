import authorRoutes from "./authors";
import postRoutes from "./posts";

const routes = app => {
    authorRoutes(app);
    postRoutes(app);
};

export default routes;