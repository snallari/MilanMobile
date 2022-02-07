import React, { useCallback, useState } from "react";
import { Image,TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { BsEmojiHeartEyesFill, BsEmojiHeartEyes } from "react-icons/bs";
import axios from "axios";


function IsFavorite(props) {
    const {post}=props
    const [isFav, setFav] = useState(false);
    const [isLoading, setloading] = useState(false);
    const hasFavorite = () => {
        if (isFav) {
            setFav(false)
        } else {
            setFav(true)
        }
        const data = {
            "_id":post._id,
            "isFav": isFav
        }

        setloading(true);
        axios
            .post("http://localhost:8081/addFav", data)

            .then((response) => {
                console.log(response.data);
                setloading(false);
            })
            .catch((response) => {
                console.log(response);
                setloading(false);
            });
        console.log(isFav, "favorite");
    }
    return <TouchableOpacity onPress={hasFavorite}>{isFav ? <BsEmojiHeartEyes></BsEmojiHeartEyes> : <BsEmojiHeartEyesFill></BsEmojiHeartEyesFill>}</TouchableOpacity>
}

export default IsFavorite;
