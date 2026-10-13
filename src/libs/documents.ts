import { FormStateProps } from "@/components/AddDocumentModal";
import { Document } from "../types";

export const documentFormat = (formState: FormStateProps) => {
  const DateValue = Date.now();
  const createAt = new Date(DateValue).toISOString();

  return {
    Title: formState.name,
    Version: formState.version,
    ID: `id-${DateValue}`,
    CreatedAt: `${createAt}`,
    Attachments: formState.attachments,
    Contributors: [{ ID: `contributor-${DateValue}`, Name: "Angel" }],
  };
};

export const sortDocumentsByMostRecentDate = (data: Document[]): Document[] => {
  const sortedData = [...data];

  sortedData.sort((a, b) => Date.parse(b.CreatedAt) - Date.parse(a.CreatedAt));

  return sortedData;
};

export const sortDocumentsByOldestDate = (data: Document[]): Document[] => {
  const sortedData = [...data];

  sortedData.sort((a, b) => Date.parse(a.CreatedAt) - Date.parse(b.CreatedAt));

  return sortedData;
};
