import { FilterAndLayout } from "@/components/FilterAndLayout";
import { LayoutProps } from "@/types";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function HomeScreen() {
  const [layout, setLayout] = useState<LayoutProps>("list");

  const handleLayout = (val: LayoutProps) => () => setLayout(val);

  return (
    <View style={styles.container}>
      <Header />
      <FilterAndLayout layout={layout} handleLayout={handleLayout} />
      <Cards layout={layout} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
