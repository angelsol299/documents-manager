import { useFetchDocuments } from "@/api/useFetchDocuments";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import { Document } from "../types";

type AddDocument = { addDocument: (document: Document) => void };

type DocumentsContextValue = ReturnType<typeof useFetchDocuments> & AddDocument;

const DocumentsContext = createContext<DocumentsContextValue | null>(null);

export const DocumentsProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, error, refetch } = useFetchDocuments();
  const [localDocument, setLocalDocument] = useState<Document[]>([]);

  const addDocument = (document: Document) =>
    setLocalDocument((prev) => [document, ...prev]);

  const value = useMemo(
    () => ({
      data: [...localDocument, ...data],
      isLoading,
      error,
      refetch,
      addDocument,
    }),
    [localDocument, data, isLoading, error, refetch, addDocument],
  );

  return <DocumentsContext value={value}>{children}</DocumentsContext>;
};

export const useDocuments = () => {
  const context = useContext(DocumentsContext);

  if (!context) {
    throw new Error("useDocuments must be used within a DocumentsProvider");
  }

  return context;
};
