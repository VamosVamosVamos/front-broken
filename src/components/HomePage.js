// import React from "react";
import * as React from "react";
import stadiums from "../data";
import { Button, Searchbar} from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";


// import SignUp from './SignUp'
// import Event from "./Event";
export default function HomePage({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);


  return (
   
  <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

     
      
  
      <ScrollView>
        {stadiums.map((element, index) => {
          return (
            <View key={index} style={{ margin: 10 }}>
              <Image
                source={{ uri: element.image }}
                style={{ width: 330, height: 100 }}
              />
              <Text>{element.name}</Text>
              <Text>{element.adress}</Text>
              <Pressable><Button
              title="Click to show more Info"  
              onPress={() => navigation.navigate('Event')}  
              >
                <Text>Click to show more Info</Text>
              </Button></Pressable>
              {/* <Text>price :{element.price} DT</Text> */}
              {/* <Text>{element.contact}</Text> */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  searchBar: {
    bottom: 10,
    width: 250,
    left: 60,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },


  sign: {
    left: 270,
    bottom: 80,
    fontSize: 17,
    color: "#0C4488",
  },
  log: {
    left: 327,
    bottom: 100,
    fontSize: 17,
    color: "#0C4488",
  },
});
