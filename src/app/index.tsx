import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "./components/Header";
import { Design } from "./namespaces/Design";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const headerContainer = {
    backgroundColor: Design.color.white,
    paddingTop: insets.top,
  };

  return (
    <View style={styles.container}>
      <View style={headerContainer}>
        <Header />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
