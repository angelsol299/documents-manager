import { DocumentsResponse } from "@/types";
import { useEffect, useState } from "react";

const URL = "http://localhost:8080/documents";

type ResponseProps =
  | { status: "initial" }
  | { status: "loading" }
  | { status: "success"; data: DocumentsResponse }
  | { status: "error"; errorMessage: string };

export const useFetchDocuments = () => {
  const [requestResponse, setRequestResponse] = useState<ResponseProps>({
    status: "initial",
  });

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        setRequestResponse({ status: "loading" });
        const resp = await fetch(URL, { signal: controller.signal });

        if (!resp.ok) {
          throw new Error(`unkown error try again error: ${resp.status}`);
        }

        const res = await resp.json();

        setRequestResponse({ status: "success", data: res });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);

        setRequestResponse({ status: "error", errorMessage: errorMessage });
      } finally {
        console.log("asdasd");
      }
    };

    void getData();
    return () => controller.abort();
  }, []);

  return {
    data: requestResponse.status === "success" ? requestResponse.data : [],
    isLoading: requestResponse.status === "loading",
    isError:
      requestResponse.status === "error" ? requestResponse.errorMessage : "",
  };
};
