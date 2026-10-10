import { useFetchDocuments } from "@/api/useFetchDocuments";
import { StyleSheet, View } from "react-native";
import { Design } from "../namespaces/Design";
import { Card } from "./Card";

export const Cards = () => {
  const { data } = useFetchDocuments();

  console.log({ data });

  return (
    <View style={styles.container}>
      <Card />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: Design.space.regular,
    paddingHorizontal: Design.space.regular,
  },
});
