import { DocumentsProvider } from "@/context/DocumentsContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <DocumentsProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </DocumentsProvider>
  );
}
