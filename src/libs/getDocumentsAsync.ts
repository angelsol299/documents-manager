import * as DocumentPicker from "expo-document-picker";

export const getDocumentAsync = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      multiple: true,
      copyToCacheDirectory: false,
    });

    if (result.canceled) return [];
    return result.assets.map((asset) => asset.name);
  } catch (error) {
    console.error("Documents picker error", error);
    return [];
  }
};
