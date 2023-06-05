import {prisma} from "../services/prisma";

export const createPost = async (data) => {
    const post = await prisma.post.create({
        data, 
        select: {
            id: true,
            title: true,
            subtitle: true,
            content: true,
            publication_time: true,
            updated: true,
            authorId: true
        }
    });
    return post;
};

export const getAll = async () => {
    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            subtitle: true,
            content: true,
            publication_time: true,
            updated: true,
            authorId: true
        }
    });
    return posts;
};

export const getById = async (id) => {
    const post = await prisma.post.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                title: true,
                subtitle: true,
                content: true,
                publication_time: true,
                updated: true,
                authorId: true
            }
        });
        return post;
};

export const updatePost = async (id, data) => {
    const post = await prisma.post.update({
        where: {
            id
        },
        data,
        select: {
            id: true,
            title: true,
            subtitle: true,
            content: true,
            publication_time: true,
            updated: true,
            authorId: true
        }
    });
    return post;
};

export const deletePost = async (id) => {
    await prisma.post.delete({
        where: {
            id
        }
    });
    return;
};