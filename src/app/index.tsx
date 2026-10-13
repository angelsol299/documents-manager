import { FilterAndLayout } from "@/components/FilterAndLayout";
import { StyleSheet, View } from "react-native";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <FilterAndLayout />
      <Cards />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
