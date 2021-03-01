// Firebase
import * as admin from "firebase-admin";
import * as firebaseHelper from "firebase-functions-helper/dist";

// Model
import { Activity } from "../../models/activity.model";

const db = admin.firestore();
const collectionName = "activities";

export const addActivity = async (req, res) => {
    const body = req.body as Activity;
    body.startDate = req.body.time[0];
    body.endDate = req.body.time[1];

    try {
        return await firebaseHelper
            .firestore.
            createNewDocument(db, collectionName, body).then((doc) => {
                body._id = doc.id;
                firebaseHelper.firestore
                    .updateDocument(db, collectionName, body._id, body)
                    .then((doc) =>
                        res.status(200).send({
                            message: "Add activity successfully",
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

export const getActivities = async (req, res) => {
    let activities = [];
    try {
        const activitiesRef = db.collection(collectionName);
        return await activitiesRef
            .get()
            .then((snapshot) =>
                snapshot.forEach((doc) => {
                    activities.push(doc.data());
                })
            )
            .then((doc) =>
                res.status(200).send({
                    message: "Success",
                    data: activities,
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

export const deleteActivity = async (req, res) => {
    const id = req.body._id;
    try {
        return await firebaseHelper
            .firestore
            .deleteDocument(db, collectionName, id)
            .then((doc) =>
                res.status(200).send({
                    message: `Delete activity ${id} successfully`,
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

export const updateActivity = async (req, res) => {
    const body = req.body as Activity;
    try {
        return await firebaseHelper
            .firestore
            .updateDocument(db, collectionName, body._id, body)
            .then((doc) =>
                res.status(200).send({
                    message: `Update activity ${body._id} successfully`,
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