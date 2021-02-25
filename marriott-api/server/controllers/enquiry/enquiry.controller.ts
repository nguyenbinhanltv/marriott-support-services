// Firebase
import * as admin from "firebase-admin";
import * as firebaseHelper from "firebase-functions-helper/dist";

// Model
import { Enquiry } from "../../models/enquiry.model";

const db = admin.firestore();
const collectionName = "enquiries";

export const addEnquiry = async (req, res) => {
    const body = req.body as Enquiry;

    try {
        return await firebaseHelper
            .firestore.
            createNewDocument(db, collectionName, body).then((doc) => {
                body._id = doc.id;
                firebaseHelper.firestore
                    .updateDocument(db, collectionName, body._id, body)
                    .then((doc) =>
                        res.status(200).send({
                            message: "Add enquiry successfully",
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

export const getEnquiries = async (req, res) => {
    let enquiries = [];
    try {
        const enquiriesRef = db.collection(collectionName);
        return await enquiriesRef
            .get()
            .then((snapshot) =>
                snapshot.forEach((doc) => {
                    enquiries.push(doc.data());
                })
            )
            .then((doc) =>
                res.status(200).send({
                    message: "Success",
                    data: enquiries,
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