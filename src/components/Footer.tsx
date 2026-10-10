import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Design } from "../namespaces/Design";
import { Button } from "./Button";
import { Modal } from "./Modal";

export const Footer = () => {
  const insets = useSafeAreaInsets();

  const [isVisible, setIsVisible] = useState(false);

  const onPressHandle = (val: boolean) => () => setIsVisible(val);

  const footerContainer = {
    paddingBottom: insets.bottom,
    padding: Design.space.regular,
    borderTopWidth: 1,
    borderColor: Design.color.gray,
  } as const;

  return (
    <View style={footerContainer}>
      <Button
        title={"Add document"}
        iconName={"plus"}
        onPress={onPressHandle(true)}
      />
      <Modal visible={isVisible} onPressHandle={onPressHandle} />
    </View>
  );
};

const styles = StyleSheet.create({});
