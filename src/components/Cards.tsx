import { useFetchDocuments } from "@/api/useFetchDocuments";
import { FlatList, StyleSheet, View } from "react-native";
import { Design } from "../namespaces/Design";
import { Card } from "./Card";

import { type Document } from "../types";

const renderItem = ({ item }: { item: Document }) => (
  <Card
    key={item.ID}
    title={item.Title}
    attachments={item.Attachments}
    contributors={item.Contributors}
  />
);

const keyExtractor = ({ ID }: { ID: string }) => `${ID}`;

export const Cards = () => {
  const { data } = useFetchDocuments();

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: Design.space.regular,
    paddingHorizontal: Design.space.regular,
  },
  flatList: {
    paddingVertical: Design.space.regular,
    gap: Design.space.regular,
  },
});
