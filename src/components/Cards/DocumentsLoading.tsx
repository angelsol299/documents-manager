import { Design } from "@/namespaces/Design";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const DocumentsLoading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"Documents loading..."}</Text>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: Design.space.regular,
    gap: Design.space.regular,
  },
  text: {
    textAlign: "center",
  },
});
