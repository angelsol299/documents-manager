import { StyleSheet, View } from "react-native";
import { Design } from "../namespaces/Design";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <View style={styles.container}>
      <Card />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: Design.space.regular,
    paddingHorizontal: Design.space.regular,
  },
});
