import { Design } from "@/namespaces/Design";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import {
  Modal as ModalComponent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "./Button";

interface ModalProps {
  visible: boolean;
  onPressHandle: (val: boolean) => () => void;
}

export const Modal = ({ visible, onPressHandle }: ModalProps) => {
  const insets = useSafeAreaInsets();

  const buttonContainerStyles = [
    styles.buttonContainer,
    { paddingBottom: insets.bottom },
  ];

  return (
    <ModalComponent transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{"Add document"}</Text>
            <Pressable onPress={onPressHandle(false)}>
              <AntDesign
                name="close"
                size={Design.space.regular}
                color="black"
              />
            </Pressable>
          </View>
          <Text style={styles.text}>{"Document information"}</Text>
          <View style={styles.section}>
            <Text style={styles.text}>{"Name"}</Text>
            <TextInput style={styles.textInput} value="hello" />
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>{"Version"}</Text>
            <TextInput style={styles.textInput} value="hello" />
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>{"File"}</Text>
            <View style={styles.fileButton}>
              <Feather name="file-text" size={16} color={Design.color.blue} />
              <Text style={styles.fileButtonText}>{"Choose file"}</Text>
            </View>
          </View>
        </View>
        <View style={buttonContainerStyles}>
          <Button title={"Submit"} onPress={() => {}} />
        </View>
      </View>
    </ModalComponent>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    backgroundColor: Design.color.white,
    paddingHorizontal: Design.space.regular,
    paddingVertical: Design.space.large,
    gap: Design.space.small,
    borderTopLeftRadius: Design.borderRadius,
    borderTopRightRadius: Design.borderRadius,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: Design.fontSize.large,
    color: Design.color.black,
    fontWeight: Design.fontWeight.bold,
  },
  text: {
    fontSize: Design.fontSize.regular,
    color: Design.color.black,
    fontWeight: Design.fontWeight.bold,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Design.color.lightGray,
    borderRadius: Design.borderRadius,
    paddingVertical: Design.space.small + Design.space.xsmall,
    paddingHorizontal: Design.space.small,
    color: Design.color.darkGray,
  },
  section: {
    gap: Design.space.small,
  },
  fileButton: {
    flexDirection: "row",
    gap: Design.space.small,
    borderWidth: 1,
    alignSelf: "flex-start",
    padding: Design.space.small,
    borderColor: Design.color.gray,
    borderRadius: Design.borderRadius,
  },
  fileButtonText: {
    color: Design.color.blue,
    fontWeight: Design.fontWeight.bold,
  },
  buttonContainer: {
    paddingTop: Design.space.regular,
    paddingHorizontal: Design.space.regular,
    backgroundColor: Design.color.rnGray,
    borderTopWidth: 1,
    borderColor: Design.color.gray,
  },
});
