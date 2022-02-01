import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import IsFavorite from "./IsFavorite";

const MilanTileView = (props) => {
  const { navigation, post, fav } = props;
  console.log("post", post, props);
  return (
    <Card
      keyExtractor={(post) => post._id}
      onPress={() => navigation.navigate("Details", { postItem: post })}
      bottomDivider>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Card.Title>{post.title}</Card.Title>
      <Text>{post.description}</Text>
      {fav.isFav?<IsFavorite/>:<p></p>}
    </Card>
  );
};
export default MilanTileView;
