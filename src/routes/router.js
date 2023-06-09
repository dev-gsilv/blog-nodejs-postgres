import authorRoutes from "./authors.js";
import postRoutes from "./posts.js";
import commentRoutes from "./comments.js";

const routes = app => {
    authorRoutes(app);
    postRoutes(app);
    commentRoutes(app);
};

export default routes;