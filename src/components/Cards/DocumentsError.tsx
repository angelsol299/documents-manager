import { Design } from "@/namespaces/Design";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface DocumentsErrorProps {
  error: string;
  refetch: () => void;
}

export const DocumentsError = ({ error, refetch }: DocumentsErrorProps) => {
  const onPressHandle = () => refetch();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text
          style={styles.text}
        >{`Unexpected error ${error}, please try again`}</Text>
        <Pressable onPress={onPressHandle}>
          <Ionicons name="reload" size={24} color={Design.color.red} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Design.space.regular,
  },
  card: {
    backgroundColor: Design.color.white,
    borderRadius: Design.borderRadius,
    alignItems: "center",
    padding: Design.space.regular,
    gap: Design.space.regular,
  },
  text: {
    color: Design.color.red,
  },
});
