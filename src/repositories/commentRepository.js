import {prisma} from "../services/prisma.js";

export const createComment = async (data) => {
    const comment = await prisma.comments.create({
        data, 
        select: {
            id: true,
            email: true,
            name: true,
            content: true,
            publication_time: true,
            postId: true
        }
    });
    return comment;
};

export const getAll = async () => {
    const comments = await prisma.comments.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            content: true,
            publication_time: true,
            postId: true
        }
    });
    return comments;
};

export const getById = async (id) => {
    const comment = await prisma.comments.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                email: true,
                name: true,
                content: true,
                publication_time: true,
                postId: true
            }
        });
        return comment;
};

export const updateComment = async (id, data) => {
    const comment = await prisma.comments.update({
        where: {
            id
        },
        data,
        select: {
            id: true,
            email: true,
            name: true,
            content: true,
            publication_time: true,
            postId: true
        }
    });
    return comment;
};

export const deleteComment = async (id) => {
    await prisma.comments.delete({
        where: {
            id
        }
    });
    return;
};