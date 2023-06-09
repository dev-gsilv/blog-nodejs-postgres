import {prisma} from "../services/prisma.js";

export const createAuthor = async (data) => {
    const author = await prisma.author.create({
        data, 
        select: {
            id: true,
            name: true,
            surname: true,
            avatar: true,
            biography: true,
            email: true,
            password: false,
        }
    });
    return author;
};

export const getAll = async () => {
    const authors = await prisma.author.findMany({
        select: {
            id: true,
            name: true,
            surname: true,
            avatar: true,
            biography: true,
            email: true,
            password: false,
        }
    });
    return authors;
};

export const getById = async (id) => {
    const author = await prisma.author.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                surname: true,
                avatar: true,
                biography: true,
                email: true,
                password: false,
            }
        });
        return author;
};

export const updateAuthor = async (id, data) => {
    const author = await prisma.author.update({
        where: {
            id
        },
        data,
        select: {
            id: true,
            name: true,
            surname: true,
            avatar: true,
            biography: true,
            email: true,
            password: false,
        }
    });
    return author;
};

export const deleteAuthor = async (id) => {
    await prisma.author.delete({
        where: {
            id
        }
    });
    return;
};