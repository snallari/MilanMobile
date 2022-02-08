import React from "react";
import { Image,  Text ,TouchableOpacity} from "react-native";
import { Card } from "react-native-elements";
import IsFavorite from "./IsFavorite";
import { BsEmojiHeartEyesFill, BsEmojiHeartEyes } from "react-icons/bs";

const MilanTileView = (props) => {
  const { navigation, post, fav } = props;
  console.log("postfav", props)
  return (
    <Card
      keyExtractor={(post) => post._id}
      // onPress={() => navigation.navigate("Details", { postItem: post })}
      bottomDivider>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Card.Title>{post.title}</Card.Title>
      <Text>{post.description}</Text>
      <TouchableOpacity>   {fav.isFav ?
        post && post.isFav == undefined ? <BsEmojiHeartEyes></BsEmojiHeartEyes> : <IsFavorite post={post}></IsFavorite> :
        <p></p>
      }
      </TouchableOpacity>
    </Card>
  );
};
export default MilanTileView;
