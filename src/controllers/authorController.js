//import bcrypt from "bcrypt";
import {createAuthor, getAll, getById, updateAuthor, deleteAuthor} from "../repositories/author.repository";

export const create = async (req, res) => {
    try {
        //const hashPassword = await bcrypt.hash(req.body.password, 10);
        //req.body.password = hashPassword;
        const author = await createAuthor(req.body);
        res.status(200).send(author);
    } catch (e) {
        res.status(400).send(e)
    }
};

export const get = async (req, res) => {
    try {
        const authors = await getAll();
        res.status(200).send(authors);
    } catch (e) {
        res.status(400).send(e);   
    }
};

export const getId = async (req, res) => {
    try {
        const author = await getById(Number(req.params.id));
        return res.status(200).send(author);
    } catch (e) {
        return res.status(400).send(e);
        
    }
};

export const update = async (req, res) => {
    try {
        const author = await updateAuthor(Number(req.params.id), req.body);
        res.status(200).send(author);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const remove = async (req, res) => {
    try {
        await deleteAuthor(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
};