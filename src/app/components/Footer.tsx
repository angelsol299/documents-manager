import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Design } from "../namespaces/Design";
import { Button } from "./Button";

export const Footer = () => {
  const insets = useSafeAreaInsets();

  const footerContainer = {
    paddingBottom: insets.bottom,
    padding: Design.space.regular,
    borderTopWidth: 1,
    borderColor: Design.color.gray,
  } as const;

  return (
    <View style={footerContainer}>
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({});
