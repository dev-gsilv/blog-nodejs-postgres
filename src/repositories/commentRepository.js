import {prisma} from "../services/prisma";

export const createComment = async (data) => {
    const comment = await prisma.comment.create({
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
    const comments = await prisma.comment.findMany({
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
    const comment = await prisma.comment.findUnique({
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
    const comment = await prisma.comment.update({
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
    await prisma.comment.delete({
        where: {
            id
        }
    });
    return;
};