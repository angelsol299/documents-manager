import { useSocket } from "@/api/useSocket";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Design } from "../namespaces/Design";

export const Header = () => {
  const insets = useSafeAreaInsets();

  const { notifications, triggerResetCounter } = useSocket();

  const headerContainer = {
    backgroundColor: Design.color.white,
    paddingTop: insets.top,
  };

  const onHandlePress = () => triggerResetCounter();

  const maxNotifications = notifications > 99 ? "99+" : `${notifications}`;

  const notificationsTextStyles = [
    notifications > 99 ? styles.notificationTextSmall : styles.notificationText,
  ];

  return (
    <View style={headerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{"Documents"}</Text>

        <Pressable style={styles.button} onPress={onHandlePress}>
          <AntDesign name="bell" size={20} color="black" />
          {notifications > 0 && (
            <View style={styles.notificationsWrapper}>
              <View style={styles.notificationCircle}>
                <Text style={notificationsTextStyles}>{maxNotifications}</Text>
              </View>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.color.white,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Design.space.regular,
  },
  title: {
    fontSize: Design.fontSize.large,
    fontWeight: Design.fontWeight.bold,
  },
  button: {
    padding: Design.space.small,
    borderWidth: 1,
    borderRadius: Design.borderRadius,
    borderColor: Design.color.lightGray,
  },
  notificationText: {
    color: Design.color.white,
    fontSize: 10,
    lineHeight: Design.lineHeight,
    fontWeight: Design.fontWeight.bold,
  },
  notificationTextSmall: {
    color: Design.color.white,
    fontSize: 7,
    lineHeight: Design.lineHeight,
    left: 1,
    fontWeight: Design.fontWeight.bold,
  },
  notificationsWrapper: {
    position: "absolute",
    top: 3,
    right: 3,
  },
  notificationCircle: {
    backgroundColor: Design.color.blue,
    borderRadius: Design.borderRadius,
    width: Design.space.regular,
    height: Design.space.regular,
    alignItems: "center",
    justifyContent: "center",
  },
});
