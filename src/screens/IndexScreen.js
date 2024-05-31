import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

export default function IndexScreen() {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);
  const navigation = useNavigation();

  useEffect(() => {
    getBlogPost();

    const listener = navigation.addListener("focus", () => {
        getBlogPost();
    });

    return () => {
      listener.remove();
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <AntDesign name="plussquareo" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.iconStyle} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24,
  },
});
