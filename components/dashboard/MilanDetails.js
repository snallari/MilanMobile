import React from "react";
import { View, Text} from "react-native";


function MilanDetails(props) {
    const { route } = props;
    let obj=[]
    console.log(route.params.postItem)
    if (route.params.postItem) {
      obj = [
        {
          param: "id",
          val: route.params.postItem._id,
        },
        {
          param: "Title",
          val: route.params.postItem.title,
        },
        {
          param: "Description",
          val: route.params.postItem.description,
        },
        {
          param: "Notes",
          val: route.params.postItem.notes,
        },
        {
          param: "Class",
          val: route.params.postItem.classType,
        },
      ];
      console.log(obj)
    }
  
  return obj ? (
    obj.length > 0 ? (
      obj.map((obj) => 
      <View>
        <Text>{obj.param}:
        {obj.val}</Text>
      </View>)
    ) : (
      <Text>Error</Text>
    )
  ) : (
    <Text>Error</Text>
  );
}

export default MilanDetails;
