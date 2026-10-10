import { Attachments, ColumnItems, Contributor } from "@/types";

export const contributorsItems = (contributors: Contributor[]): ColumnItems[] =>
  contributors.map((contributor) => ({
    key: contributor.ID,
    label: contributor.Name,
  }));

export const attachmentsItems = (attachments: Attachments): ColumnItems[] =>
  attachments.map((attachment, idx) => ({
    key: `${attachment}-${idx}`,
    label: attachment,
  }));
