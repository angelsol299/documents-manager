import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, StyleSheet, Text } from "react-native";
import { Design } from "../namespaces/Design";

export const Button = () => {
  return (
    <Pressable style={styles.container}>
      <Entypo name="plus" size={24} color={Design.color.white} />
      <Text style={styles.text}>{"Add document"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.color.blue,
    borderRadius: Design.borderRadius,
    flexDirection: "row",
    paddingVertical: Design.space.regular,
    justifyContent: "center",
    alignItems: "center",
    gap: Design.space.small,
  },
  text: {
    fontSize: Design.fontSize.regular,
    fontWeight: Design.fontWeight.bold,
    color: Design.color.white,
  },
});
