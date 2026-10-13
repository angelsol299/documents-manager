import { Design } from "@/namespaces/Design";
import { FilteredDataProps, LayoutProps } from "@/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Filter } from "./Filter";

interface FilterAndLayoutProps {
  layout: LayoutProps;
  handleLayout: (value: LayoutProps) => () => void;
  filteredData: FilteredDataProps;
  onChangeSort: Dispatch<SetStateAction<FilteredDataProps>>;
}

export const FilterAndLayout = ({
  layout,
  handleLayout,
  filteredData,
  onChangeSort,
}: FilterAndLayoutProps) => {
  const listIconColor =
    layout === "list" ? Design.color.blue : Design.color.darkGray;
  const gridIconColor =
    layout === "grid" ? Design.color.blue : Design.color.darkGray;

  return (
    <View style={styles.container}>
      <Filter filteredData={filteredData} onChangeSort={onChangeSort} />

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
