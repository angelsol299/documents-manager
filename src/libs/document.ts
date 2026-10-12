import { FormStateProps } from "@/components/Modal";

export const documentFormat = (formState: FormStateProps) => {
  const DateValue = Date.now();
  const createAt = new Date(DateValue).toISOString();

  return {
    Title: formState.name,
    Version: formState.version,
    ID: `id-${DateValue}`,
    CreatedAt: `${createAt}`,
    Attachments: ["uno", "dos"],
    Contributors: [{ ID: `contributor-${DateValue}`, Name: "Angel" }],
  };
};
