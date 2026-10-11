import { Design } from "@/namespaces/Design";
import { StyleSheet, Text, View } from "react-native";

export const NoDocuments = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.text}>{"No available documents yet"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Design.space.regular,
  },
  section: {
    paddingHorizontal: Design.space.regular,
    paddingVertical: Design.space.large,
    backgroundColor: Design.color.white,
    borderRadius: Design.borderRadius,
  },
  text: {
    fontSize: Design.fontSize.regular,
    textAlign: "center",
  },
});
