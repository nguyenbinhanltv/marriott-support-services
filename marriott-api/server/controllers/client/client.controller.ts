// Firebase
import * as admin from "firebase-admin";
import * as firebaseHelper from "firebase-functions-helper/dist";

// Model
import { Client } from "../../models/activity.model";

const db = admin.firestore();
const collectionName = "client";

export const addClient = async (req, res) => {
    const body = req.body as Client;

    try {
        return await firebaseHelper
            .firestore.
            createNewDocument(db, collectionName, body).then((doc) => {
                body._id = doc.id;
                firebaseHelper.firestore
                    .updateDocument(db, collectionName, body._id, body)
                    .then((doc) =>
                        res.status(200).send({
                            message: "Add client successfully",
                            error: null,
                            data: null
                        })
                    )
                    .catch((err) =>
                        res.status(400).send({
                            error: "Invalid _id",
                            message: null,
                            data: null
                        })
                    );
            });
    } catch (error) {
        res.status(400).send({
            error: error,
            data: null,
            message: null
        });
    }
}

export const getAllClient = async (req, res) => {
    let client = [];
    try {
        const clientRef = db.collection(collectionName);
        return await clientRef
            .get()
            .then((snapshot) =>
                snapshot.forEach((doc) => {
                    client.push(doc.data());
                })
            )
            .then((doc) =>
                res.status(200).send({
                    message: "Success",
                    data: client,
                    error: null,
                })
            )
            .catch((err) =>
                res.status(400).send({
                    error: err,
                    message: null,
                    data: null,
                })
            );
    } catch (error) {
        res.status(400).send({
            error: error + ", Bad Error",
            message: null,
            data: null,
        });
    }
}

export const deleteClient = async (req, res) => {
    const id = req.body._id;
    try {
        return await firebaseHelper
            .firestore
            .deleteDocument(db, collectionName, id)
            .then((doc) =>
                res.status(200).send({
                    message: `Delete client ${id} successfully`,
                    error: null,
                    data: null
                })
            )
            .catch((err) =>
                res.status(400).send({
                    error: "Invalid _id",
                    message: null,
                    data: null
                })
            );
    } catch (error) {
        res.status(400).send({
            error: error + ", Bad Error",
            message: null,
            data: null,
        });
    }
}