export type Contributor = {
  ID: string;
  Name: string;
};

export type Document = {
  ID: string;
  CreatedAt: string;
  UpdatedAt: string;
  Title: string;
  Attachments: string[];
  Contributors: Contributor[];
  Version: string;
};

export type DocumentsResponse = Document[];
