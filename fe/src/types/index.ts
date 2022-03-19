export type WebsiteData = {
  image: string;
  index: number;
  name: string;
  website: string;
  maskedUsername: string;
  encryptedUsername: string;
  encryptedPassword: string;
};

export type Credential = {
  name: string;
  website: string;
  maskedUsername: string;
  encryptedUsername: string;
  encryptedPassword: string;
};

export type FileUpload = {
  name: string;
  fileName: string;
  fileType: string;
  swarmReference: string;
};

export type FileUploadData = {
  index: number;
  fileName: string;
  fileType: string;
  downloadUrl?: string;
} & FileUpload;
