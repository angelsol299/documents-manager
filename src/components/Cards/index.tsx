import { useDocuments } from "@/context/DocumentsContext";
import { FlatList, StyleSheet, View } from "react-native";
import { Design } from "../../namespaces/Design";
import { CardList } from "./CardList";

import {
  sortDocumentsByMostRecentDate,
  sortDocumentsByOldestDate,
} from "@/libs/documents";
import { FilteredDataProps, LayoutProps, type Document } from "../../types";
import { CardGrid } from "./CardGrid";
import { DocumentsError } from "./DocumentsError";
import { DocumentsLoading } from "./DocumentsLoading";
import { NoDocuments } from "./NoDocuments";

const renderItemList = ({ item }: { item: Document }) => (
  <CardList
    key={item.ID}
    title={item.Title}
    version={item.Version}
    attachments={item.Attachments}
    contributors={item.Contributors}
  />
);
const renderItemGrid = ({ item }: { item: Document }) => (
  <CardGrid key={item.ID} title={item.Title} version={item.Version} />
);

const keyExtractor = ({ ID }: { ID: string }) => `${ID}`;

export const Cards = ({
  layout,
  filteredData,
}: {
  layout: LayoutProps;
  filteredData: FilteredDataProps;
}) => {
  const { data, isLoading, error, refetch } = useDocuments();

  if (isLoading) {
    return <DocumentsLoading />;
  }

  if (error.length > 0) {
    return <DocumentsError error={error} refetch={refetch} />;
  }
  const sortedData =
    filteredData === "latest"
      ? sortDocumentsByMostRecentDate(data)
      : sortDocumentsByOldestDate(data);

  if (sortedData.length === 0) {
    return <NoDocuments />;
  }

  const isGrid = layout === "grid";

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        key={isGrid ? "grid" : "list"}
        data={sortedData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        columnWrapperStyle={isGrid ? styles.gridRow : null}
        renderItem={isGrid ? renderItemGrid : renderItemList}
        numColumns={isGrid ? 2 : 1}
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
    justifyContent: "space-between",
  },
  gridRow: {
    justifyContent: "space-between",
  },
});
