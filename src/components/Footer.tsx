import { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Design } from "../namespaces/Design";
import { AddDocumentModal } from "./AddDocumentModal";
import { Button } from "./Button";

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
      <AddDocumentModal visible={isVisible} onPressHandle={onPressHandle} />
    </View>
  );
};
