import React, { useCallback, useState } from "react";
import { Image,TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { BsEmojiHeartEyesFill, BsEmojiHeartEyes } from "react-icons/bs";
import axios from "axios";


function IsFavorite() {
    const [isFav, setFav] = useState(false);
    const [isLoading, setloading] = useState(false);
    const hasFavorite = () => {
        if (isFav) {
            setFav(false)
        } else {
            setFav(true)
        }
        const data = {
            "isFav": isFav
        }

        setloading(true);
        //  axios.get('https://whispering-lowlands-74128.herokuapp.com/listClasses')
        axios
            .post("https://whispering-lowlands-74128.herokuapp.com/listClasses", data)

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
