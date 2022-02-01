import React, { useCallback, useState } from "react";
import { Image } from "react-native";
import { ListItem } from "react-native-elements";
import IsFavorite from "./IsFavorite";

const MilanListView = (props) => {
  const { navigation, post, fav } = props;
  
  

  console.log("post", post, props)

  return (
    <ListItem
      keyExtractor={(post) => post._id}
      onPress={() => navigation.navigate("Details", { postItem: post })}
      bottomDivider
    >
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 100, height: 100 }}
      />
      <ListItem.Content>
        <ListItem.Title>{post.title}</ListItem.Title>
        <ListItem.Subtitle>{post.description} {fav.isFav?<IsFavorite/>:<p></p>}</ListItem.Subtitle>

      </ListItem.Content>
    </ListItem>
  );
};
export default MilanListView;
