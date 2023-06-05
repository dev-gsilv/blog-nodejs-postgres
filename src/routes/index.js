import authorRoutes from "./authors";
import postRoutes from "./posts";
import commentRoutes from "./comments";

const routes = app => {
    authorRoutes(app);
    postRoutes(app);
    commentRoutes(app);
};

export default routes;