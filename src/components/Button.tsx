import Entypo from "@expo/vector-icons/Entypo";
import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Design } from "../namespaces/Design";

interface ButtonProps {
  title: string;
  onPress: () => void;
  iconName?: ComponentProps<typeof Entypo>["name"];
}

export const Button = ({ title, iconName, onPress }: ButtonProps) => (
  <Pressable style={styles.container} onPress={onPress}>
    {iconName && (
      <Entypo name={iconName} size={20} color={Design.color.white} />
    )}
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

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
