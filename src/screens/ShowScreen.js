import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(Context);
  const navigation = useNavigation();

  const blogPost = state.find((blogPost) => blogPost.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { id: id })}
        >
          <EvilIcons name="pencil" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <Text> Show Blog - {blogPost.title}</Text>
      <Text> Content - {blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
