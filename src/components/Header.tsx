import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Design } from "../namespaces/Design";

export const Header = () => {
  const insets = useSafeAreaInsets();

  const headerContainer = {
    backgroundColor: Design.color.white,
    paddingTop: insets.top,
  };

  return (
    <View style={headerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{"Documents"}</Text>
        <Pressable style={styles.button}>
          <AntDesign name="bell" size={16} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.color.white,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Design.space.regular,
  },
  title: {
    fontSize: Design.fontSize.large,
    fontWeight: Design.fontWeight.bold,
  },

  button: {
    padding: Design.space.small,
    borderWidth: 1,
    borderRadius: Design.borderRadius,
    borderColor: Design.color.lightGray,
  },
});
