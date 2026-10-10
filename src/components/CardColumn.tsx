import { Design } from "@/namespaces/Design";
import { ColumnItems } from "@/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

interface CardColumnProps {
  columnTitle: string;
  iconName: ComponentProps<typeof MaterialIcons>["name"];
  items: ColumnItems[];
}

export const CardColumn = ({
  columnTitle,
  iconName,
  items,
}: CardColumnProps) => {
  return (
    <View style={styles.columnContainer}>
      <View style={styles.contentTitleContainer}>
        <MaterialIcons name={iconName} size={16} color="black" />
        <Text style={styles.contentTitle}>{columnTitle}</Text>
      </View>
      {items.map((item: ColumnItems) => (
        <Text key={item.key} style={styles.contentTextItems}>
          {item.label}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  contentTitleContainer: {
    flexDirection: "row",
    gap: Design.space.small,
  },
  contentTitle: {
    fontSize: Design.fontSize.small,
    fontWeight: Design.fontWeight.bold,
    color: Design.color.black,
  },
  contentTextItems: {
    fontSize: Design.fontSize.small,
    color: Design.color.darkGray,
  },
  columnContainer: {
    flex: 1,
    flexDirection: "column",
    gap: Design.space.xsmall,
  },
});
