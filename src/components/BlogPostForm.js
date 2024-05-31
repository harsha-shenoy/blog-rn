import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = ({ initTitle = "", initContent = "", onSubmit }) => {
  const [title, setTitle] = useState(initTitle);
  const [content, setContent] = useState(initContent);

  return (
    <View>
      <Text style={styles.label}> Enter Title </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(newText) => setTitle(newText)}
      />
      <Text style={styles.label}> Enter Content </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      />
      <Button
        title="Save"
        // Handling for saving data. Callback trigger
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    margin: 10,
  },
});

export default BlogPostForm;
