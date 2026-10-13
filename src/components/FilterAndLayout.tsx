import { Design } from "@/namespaces/Design";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const FilterAndLayout = ({ layout, handleLayout }) => {
  const listIconColor =
    layout === "list" ? Design.color.blue : Design.color.darkGray;
  const gridIconColor =
    layout === "grid" ? Design.color.blue : Design.color.darkGray;

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <View>
          <MaterialCommunityIcons
            name="triangle-outline"
            size={8}
            color="black"
          />
          <MaterialCommunityIcons
            name="triangle-down-outline"
            size={8}
            color="black"
          />
        </View>
        <Text>{"Sort by"}</Text>
        <View style={styles.chevron}>
          <AntDesign name="down" size={10} color="black" />
        </View>
      </View>

      <View style={styles.layout}>
        <Pressable
          onPress={handleLayout("list")}
          style={styles.layoutButtonLeft}
        >
          <AntDesign name="align-center" size={16} color={listIconColor} />
        </Pressable>
        <Pressable
          onPress={handleLayout("grid")}
          style={styles.layoutButtonRight}
        >
          <SimpleLineIcons name="grid" size={16} color={gridIconColor} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Design.space.regular,
    paddingHorizontal: Design.space.regular,
  },

  layout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: Design.borderRadius,
    borderColor: Design.color.lightGray,
  },

  filter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderRadius: Design.borderRadius,
    backgroundColor: Design.color.white,
    paddingVertical: 6,
    paddingHorizontal: Design.space.small,
    borderWidth: 1,
    borderColor: Design.color.lightGray,
  },
  chevron: {
    borderLeftWidth: 1,
    borderLeftColor: Design.color.lightGray,
    paddingLeft: Design.space.small,
    justifyContent: "center",
  },
  layoutButtonRight: {
    backgroundColor: Design.color.white,
    paddingHorizontal: Design.space.regular,
    paddingVertical: 6,
    borderTopRightRadius: Design.borderRadius,
    borderBottomRightRadius: Design.borderRadius,
  },
  layoutButtonLeft: {
    backgroundColor: Design.color.white,
    paddingHorizontal: Design.space.regular,
    paddingVertical: 6,
    borderTopLeftRadius: Design.borderRadius,
    borderBottomLeftRadius: Design.borderRadius,
  },
});
