import { attachmentsItems, contributorsItems } from "@/libs/card";
import { Attachments, Contributor } from "@/types";
import { StyleSheet, Text, View } from "react-native";
import { Design } from "../namespaces/Design";
import { CardColumn } from "./CardColumn";

interface CardProps {
  title: string;
  attachments: Attachments;
  contributors: Contributor[];
}

export const Card = ({ title, attachments, contributors }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.versionText}>{"Version 2.6.16"}</Text>
      </View>
      <View style={styles.content}>
        <CardColumn
          columnTitle={"Contributors"}
          iconName={"people-outline"}
          items={contributorsItems(contributors)}
        />
        <CardColumn
          columnTitle={"Attachments"}
          iconName={"link"}
          items={attachmentsItems(attachments)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.color.white,
    gap: Design.space.regular,
    padding: Design.space.regular,
    borderRadius: Design.borderRadius,
    shadowColor: Design.color.darkGray,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    gap: Design.space.regular,
    alignItems: "center",
  },
  title: {
    fontSize: Design.fontSize.regular,
    color: Design.color.black,
    fontWeight: Design.fontWeight.bold,
  },
  versionText: {
    fontSize: Design.fontSize.small,
    color: Design.color.darkGray,
  },
  content: {
    flexDirection: "row",
  },
});
