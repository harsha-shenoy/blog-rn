import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route }) => {
  const { id } = route.params;
  const { state, updateBlogPosts } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id == id);

  const navigation = useNavigation();

  return (
    <BlogPostForm
      initTitle={blogPost.title}
      initContent={blogPost.content}
      onSubmit={(title, content) => {
        updateBlogPosts(id, title, content,() => {
            navigation.navigate("Index");
          });
        console.log("Called bitch");
      }}
    />
  );
};

const styles = StyleSheet.create();

export default EditScreen;
