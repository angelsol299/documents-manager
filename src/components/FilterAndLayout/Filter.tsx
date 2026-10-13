import { Design } from "@/namespaces/Design";
import { FilteredDataProps } from "@/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Dispatch, SetStateAction, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FilterModal } from "./FilterModal";

interface FilterProps {
  filteredData: FilteredDataProps;
  onChangeSort: Dispatch<SetStateAction<FilteredDataProps>>;
}

export const Filter = ({ filteredData, onChangeSort }: FilterProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisible =
    (value: boolean, filterVal?: FilteredDataProps) => () => {
      setIsModalVisible(value);
      filterVal && onChangeSort(filterVal);
    };

  return (
    <>
      <Pressable onPress={handleModalVisible(true)} style={styles.container}>
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
        <Text style={styles.sortedText}>{`Sort by ${filteredData}`}</Text>
        <View style={styles.chevron}>
          <AntDesign name="down" size={10} color="black" />
        </View>
      </Pressable>
      <FilterModal
        visible={isModalVisible}
        onPressHandle={handleModalVisible}
        filteredData={filteredData}
      />
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: Design.borderRadius,
    borderColor: Design.color.lightGray,
  },
  container: {
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
  sortedText: { minWidth: 90 },
});
