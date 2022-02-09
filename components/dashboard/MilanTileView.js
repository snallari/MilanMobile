import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import IsFavorite from "./IsFavorite";
import { BsEmojiHeartEyesFill, BsEmojiHeartEyes } from "react-icons/bs";

const MilanTileView = (props) => {
  const { navigation, post, fav } = props;
  const inlineTile = {
    marginBottom: 15,
    textOverflow: "ellipsis",
    width: 175,
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
  console.log("postfav", props)
  return (
    <Card
      keyExtractor={(post) => post._id}
      // onPress={() => navigation.navigate("Details", { postItem: post })}
      bottomDivider>
      <View style={{ flexDirection: "row", direction: "rtr" }}>
        <TouchableOpacity>   {fav.isFav ?
          post && post.isFav == undefined ? <BsEmojiHeartEyes></BsEmojiHeartEyes> : <IsFavorite post={post}></IsFavorite> :
          <p></p>
        }
        </TouchableOpacity>
        <View style={{
          flexDirection: "column", marginBottom: 15,
          textOverflow: "ellipsis",
          width: 175,
          whiteSpace: "nowrap",
          overflow: "hidden"
        }}>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png",
            }}
            style={{ width: 100, height: 100 }}
          />
          <Card.Title>{post.title}</Card.Title>
          <Text>{post.description}</Text>
        </View>
      </View>
    </Card>
  );
};
export default MilanTileView;
