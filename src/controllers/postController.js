import {createPost, getAll, getById, updatePost, deletePost} from "../repositories/postRepository.js";

export const create = async (req, res) => {
    try {
        const post = await createPost(req.body);
        res.status(200).send(post);
    } catch (e) {
        res.status(400).send(e)
    }
};

export const get = async (req, res) => {
    try {
        const posts = await getAll();
        res.status(200).send(posts);
    } catch (e) {
        res.status(400).send(e);   
    }
};

export const getId = async (req, res) => {
    try {
        const post = await getById(Number(req.params.id));
        return res.status(200).send(post);
    } catch (e) {
        return res.status(400).send(e);
        
    }
};

export const update = async (req, res) => {
    try {
        const post = await updatePost(Number(req.params.id), req.body);
        res.status(200).send(post);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const remove = async (req, res) => {
    try {
        await deletePost(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
};