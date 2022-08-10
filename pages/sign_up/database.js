import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import React, { Component } from 'react'; 


export function Database({navigation}) {

    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://<Root>:<q-vRU.q4UQCiJ4g>@cluster0.xgtsyzb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });
    

    return (
        <View>

        </View>
    );
}

