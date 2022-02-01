import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, TextInput } from "react-native";
import { BsListTask, BsFillGridFill } from "react-icons/bs";
import "../../App.css";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { ListItem } from "react-native-elements";
import axios from "axios";
import MilanDetails from "./MilanDetails";
import MilanListView from "./MilanListView";
import MilanTileView from "./MilanTileView";

const MilanDashboard = (props) => {
  const { navigation, fav} = props;
  console.log("Fav", fav, props)
  const [error, setError] = useState("");
  const [posts, setposts] = useState([]);
  const [isLoading, setloading] = useState(false);
  const [isTileView, setTileView] = useState(false);
  const [isValue, setisValue] = useState(false);
  const [styleName, setStyles] = useState("");
  const inline = {
    flexDirection: "column",
    height: 250,
    padding: 30,
    flexWrap: "wrap",
    margin: 10,
  };

  useEffect(() => {
    console.log("trigger use effect hook");
    getPost();
  }, []);

  const getPost = () => {
    setisValue(true);
    setloading(true);
    //  axios.get('https://whispering-lowlands-74128.herokuapp.com/listClasses')
    axios
      .get("https://whispering-lowlands-74128.herokuapp.com/listClasses")

      .then((response) => {
        console.log(response.data);
        setloading(false);
        setposts(response.data);
      })
      .catch((response) => {
        console.log(response);
        setloading(false);
        setError("It has no data");
      });
    console.log("isLoading", isLoading, "post", posts);
  };

  return (
    <ScrollView>
      <View style={{ flexDirection: "row", flexWrap: "wrap", alignSelf: "flex-end", margin: 10}}>
        <TouchableOpacity onPress={() => setTileView(true)}>
          <BsFillGridFill></BsFillGridFill>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTileView(false)}>
          <BsListTask></BsListTask>
        </TouchableOpacity>
      </View>
      <View style={isTileView ? inline : ""}>
        {isLoading ? (
          <Text>Loading</Text>
        ) : posts ? (
          posts.length > 0 ? (
            isTileView ? (
              posts.map((post) => (
                <MilanTileView post={post} navigation={navigation} fav={fav}/>
              ))
            ) : (
              posts.map((post) => (
                <MilanListView post={post} navigation={navigation} fav={fav} />
              ))
            )
          ) : (
            <Text>No Data Found!!</Text>
          )
        ) : (
          <Text>{error}</Text>
        )}
      </View>
    </ScrollView>
  );
};
export default MilanDashboard;
