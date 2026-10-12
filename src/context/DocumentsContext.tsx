import { useFetchDocuments } from "@/api/useFetchDocuments";
import { createContext, ReactNode, useContext } from "react";

type DocumentsContextValue = ReturnType<typeof useFetchDocuments>;

const DocumentsContext = createContext<DocumentsContextValue | null>(null);

export const DocumentsProvider = ({ children }: { children: ReactNode }) => {
  const documents = useFetchDocuments();

  return <DocumentsContext value={documents}>{children}</DocumentsContext>;
};

export const useDocuments = () => {
  const context = useContext(DocumentsContext);

  if (!context) {
    throw new Error("useDocuments must be used within a DocumentsProvider");
  }

  return context;
};
