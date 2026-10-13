import { StyleSheet, Text, View } from "react-native";
import { Design } from "../../namespaces/Design";

interface CardProps {
  title: string;
  version: string;
}

export const CardGrid = ({ title, version }: CardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.versionText}>{`Version ${version}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.color.white,
    gap: Design.space.regular,
    padding: Design.space.regular,
    borderRadius: Design.borderRadius,
    shadowColor: Design.color.darkGray,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    width: "48%",
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
});
