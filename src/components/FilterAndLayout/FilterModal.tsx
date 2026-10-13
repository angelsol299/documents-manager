import { Design } from "@/namespaces/Design";
import { FilteredDataProps } from "@/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Modal as ModalComponent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ModalProps {
  visible: boolean;
  onPressHandle: (val: boolean, filterVal?: FilteredDataProps) => () => void;
  filteredData: FilteredDataProps;
}

export const FilterModal = ({
  visible,
  onPressHandle,
  filteredData,
}: ModalProps) => {
  const isLatestData = filteredData === "latest";

  const latestButtonStyles = [
    isLatestData ? styles.activeButton : styles.button,
  ];

  const oldestButtonStyles = [
    !isLatestData ? styles.activeButton : styles.button,
  ];

  return (
    <ModalComponent transparent animationType="fade" visible={visible}>
      <Pressable onPress={onPressHandle(false)} style={styles.overlay}>
        <View style={styles.modalContent}>
          <Pressable
            onPress={onPressHandle(false, "latest")}
            style={latestButtonStyles}
          >
            <AntDesign
              name="arrow-up"
              size={Design.space.regular}
              color="black"
            />
            <Text style={styles.latestText}>{"Latest"}</Text>
          </Pressable>
          <Pressable
            onPress={onPressHandle(false, "oldest")}
            style={oldestButtonStyles}
          >
            <AntDesign
              name="arrow-down"
              size={Design.space.regular}
              color="black"
            />
            <Text style={styles.oldestText}>{"Oldest"}</Text>
          </Pressable>
        </View>
      </Pressable>
    </ModalComponent>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: Design.space.regular,
  },
  modalContent: {
    backgroundColor: Design.color.white,
    gap: Design.space.small,
    borderRadius: Design.borderRadius,
    overflow: "hidden",
  },

  oldestText: {
    fontSize: Design.fontSize.regular,
    paddingVertical: Design.space.regular,
    textAlign: "center",
  },

  latestText: {
    fontSize: Design.fontSize.regular,
    paddingVertical: Design.space.regular,
    textAlign: "center",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  activeButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: Design.space.small,
    backgroundColor: Design.color.lightGray,
  },
});
