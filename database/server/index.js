const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://root:JgsQ7pczCX6z8SDx@terracharge.c4onh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// https://www.mongodb.com/docs/drivers/node/current/

async function run() {
    try {
        await client.connect();
        const db = client.db("TerraCharge");
        const coll = db.collection("Users");

        console.log("working database");
        client.close();
    } finally {
        // Ensures that the client will close when you finish/error
        client.close();
    }
}
// node database/server/index.js     - to run server
async function userIsFound(emailOfUser) {
    try {
        await client.connect();
        const db = client.db("TerraCharge");
        const coll = db.collection("Users");
        const query = { email: emailOfUser };
        var results = await coll.findOne(query);

        if (results == null)
            return false;
        return true;
    } catch (Error) {
        console.error(Error);
        return true;

    }
}
async function addUser(nameOfUser, emailOfUser, passwordOfUser) {
    try {
        await client.connect();
        const db = client.db("TerraCharge");
        const users = db.collection("Users");
        console.log("working database");
        await users.insertOne({
            name: nameOfUser,
            email: emailOfUser,
            password: passwordOfUser,
            cardsAvailable: ["mastercard", "visa"],
        });
        console.log("User added");
        client.close();
    } finally {
        // Ensures that the client will close when you finish/error
        client.close();
    }
}

async function getReservations(emailOfUser) {
    try {
        await client.connect();
        const db = client.db("TerraCharge");
        const reservations = db.collection("Reservations");
        const results = await reservations.find({
            email: emailOfUser
        }).toArray();
        client.close();
        return results;
    } finally {
        // Ensures that the client will close when you finish/error
        client.close();
    }
}

async function addReservation(emailOfUser, typeOfCharger, paymentMethod, hour, date) {
    try {
        await client.connect();
        const db = client.db("TerraCharge");
        const users = db.collection("Reservations");
        console.log("working database");
        await users.insertOne({
            chargerType: typeOfCharger,
            paymentMethod: paymentMethod,
            hour: hour,
            date: date,
            email: emailOfUser,
        });
        console.log("Reservation added");
        client.close();
    } finally {
        // Ensures that the client will close when you finish/error
        client.close();
    }
}

async function passwordIsFound(emailOfUser, passwordOfUser) {
    try {
        await client.connect();
        const db = client.db("TerraCharge");
        const coll = db.collection("Users");
        const query = { email: emailOfUser, password: passwordOfUser };
        var results = await coll.findOne(query);
        if (results == null) {
            client.close();
            return false;
        }

        client.close();
        return true;
    } finally {
        // Ensures that the client will close when you finish/error
        client.close();
    }

}

async function getStatusOfLocker() {
    try {
        await client.connect();
        const db = client.db("TerraCharge");
        const coll = db.collection("Locker");
        const query = { _id: "1" };
        var results = await coll.findOne(query);

        return results;
    } catch (Error) {
        console.error(Error);
        return "inexistent";
    }
}

async function changeStatus(newStatus) {
    try {
        await client.connect();
        const db = client.db("TerraCharge");
        const reservations = db.collection("Locker");
        await reservations.updateOne({ _id: "1" }, {
            $set: {"status": newStatus}
        });
        
        console.log("Things changed")
        client.close();
    } finally {
        // Ensures that the client will close when you finish/error
        client.close();
    }
}

async function deleteReservations(){
    try {
        await client.connect();
        const db = client.db("TerraCharge");
        const reservations = db.collection("Reservations");
        await reservations.deleteMany({});
        
        console.log("All reservations deleted")
        client.close();
    } finally {
        // Ensures that the client will close when you finish/error
        client.close();
    }
}

app.post("/delete_reservations.json", (req, res) => {
    console.log("Succesfully connected to delete_reservation.json", "\n");
    ((async () => {
        await deleteReservations();
    })()).catch(console.error);


});

app.post("/create_reservation.json", (req, res) => {
    console.log("Succesfully connected to create_reservation.json", "\n");
    ((async () => {
        addReservation(req.body.emailOfUser, req.body.chargerType, req.body.paymentMethod, req.body.hour, req.body.date)

    })()).catch(console.error);

});


app.get("/home.json", (req, res) => {
    res.json({ message: "Hello from server!" });
    console.log("Succesfully connected to home.json", "\n");
});

app.post("/get_reservations.json", (req, res) => {
    ((async () => {

        var results = await getReservations(req.body.email);

        res.json({ results });
    })()).catch(console.error);
});

app.post("/make_user.json", (req, res) => {
    console.log("Succesfully connected to make_user.json", "\n");
    var userIsAlreadyThere = true;
    ((async () => {
        userIsAlreadyThere = await userIsFound(req.body.email);
        console.log("User exists: " + userIsAlreadyThere);
        if (userIsAlreadyThere == false) {
            addUser(req.body.name, req.body.email, req.body.password);
            res.json({ message: "Ok" });
        }
        else {
            res.json({ message: "Cannot add" });
            console.log("line 135");
        }


    })()).catch(console.error);
});

app.post("/get_status.json", (req, res) => {
    ((async () => {

        var results = await getStatusOfLocker();

        res.json({ results });
    })()).catch(console.error);

});
app.post("/change_status.json", (req, res) => {
    ((async () => {
        await changeStatus(req.body.newStatus);
        var results = "went there";
        res.json({ results });
    })()).catch(console.error);
});

app.post("/verify_user.json", (req, res) => {
    console.log("Succesfully connected to verify_user.json", "\n");
    var userIsValid = false;
    ((async () => {
        userIsValid = await userIsFound(req.body.email);
        console.log(userIsValid);
        // you verify if user exists
        if (userIsValid == true) {
            // if yes you verify it's password
            console.log("user exists");
            var passwordIsValid = await passwordIsFound(req.body.email, req.body.password);
            if (passwordIsValid == true)
                res.json({ message: "valid user" });
            else
                res.json({ message: "wrong password" });

        }
        else {
            res.json({ message: "user inexistent" });
            console.log("user inexistent");
        }

    })()).catch(console.error);

});

app.listen(3002, () => {
    console.log(`Server running successfully`);

});



