import {createComment, getAll, getById, updateComment, deleteComment} from "../repositories/commentRepository.js";

export const create = async (req, res) => {
    try {
        const comment = await createComment(req.body);
        res.status(200).send(comment);
    } catch (e) {
        res.status(400).send(e)
    }
};

export const get = async (req, res) => {
    try {
        const comments = await getAll();
        res.status(200).send(comments);
    } catch (e) {
        res.status(400).send(e);   
    }
};

export const getId = async (req, res) => {
    try {
        const comment = await getById(Number(req.params.id));
        return res.status(200).send(comment);
    } catch (e) {
        return res.status(400).send(e);
        
    }
};

export const update = async (req, res) => {
    try {
        const comment = await updateComment(Number(req.params.id), req.body);
        res.status(200).send(comment);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const remove = async (req, res) => {
    try {
        await deleteComment(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
};