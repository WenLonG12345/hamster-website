export type HamsterCoverArgs = {
  coverImg: string;
  title: string;
  description: string;
}

export type HamsterCover = {
  id: string;
  coverImg: string;
  title: string;
  description: string;
}

export type HamsterPhoto = {
  id: string;
  url: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  hamsterId?: string;
}

export type HamsterPhotoArgs = {
  url: string;
  description?: string;
  hamsterId?: string;
}