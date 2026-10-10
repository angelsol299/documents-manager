import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";
import { Design } from "../namespaces/Design";

export const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{"Hope Rod Rye"}</Text>
        <Text style={styles.versionText}>{"Version 2.6.16"}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.columnContainer}>
          <View style={styles.contentTitleContainer}>
            <MaterialIcons name="people-outline" size={16} color="black" />
            <Text style={styles.contentTitle}>{"Contributors"}</Text>
          </View>
          <Text style={styles.contentTextItems}>{"uno"}</Text>
          <Text style={styles.contentTextItems}>{"dos"}</Text>
          <Text style={styles.contentTextItems}>{"tres"}</Text>
          <Text style={styles.contentTextItems}>{"cuatro"}</Text>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.contentTitleContainer}>
            <Feather name="link" size={16} color="black" />
            <Text style={styles.contentTitle}>{"attachments"}</Text>
          </View>
          <Text style={styles.contentTextItems}>{"uno"}</Text>
          <Text style={styles.contentTextItems}>{"dos"}</Text>
          <Text style={styles.contentTextItems}>{"tres"}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.color.white,
    gap: Design.space.regular,
    padding: Design.space.regular,
    borderRadius: Design.borderRadius,
  },
  header: {
    flexDirection: "row",
    gap: Design.space.regular,
    alignItems: "center",
  },
  title: {
    fontSize: Design.fontSize.regular,
    color: Design.color.black,
    fontWeight: Design.fontWeight.bold,
  },
  versionText: {
    fontSize: Design.fontSize.small,
    color: Design.color.darkGray,
  },
  content: {
    flexDirection: "row",
  },
  contentTitleContainer: {
    flexDirection: "row",
    gap: Design.space.small,
  },
  contentTitle: {
    fontSize: Design.fontSize.small,
    fontWeight: Design.fontWeight.bold,
    color: Design.color.black,
  },
  contentTextItems: {
    fontSize: Design.fontSize.small,
    color: Design.color.darkGray,
  },
  columnContainer: {
    flex: 1,
    flexDirection: "column",
    gap: Design.space.xsmall,
  },
});
