import * as React from "react";

export type action = {
  data: Array<any>;
  loading: boolean;
  type: string;
};
export interface initialStateProps {
  Animes: {
    //nosso reducer
    data: animeData[]; //types do array de data
    loading: boolean;
  };
}

export type animeData = {
  id: string;
  links?: any;
  relationships?: any;
  type: string;
  attributes: animeAttributes;
};

export type animeAttributes = {
  abbreviatedTitles: Array<any>;
  ageRating: string;
  ageRatingGuide: string;
  averageRating: string;
  canonicalTitle: string;
  coverImage: any;
  coverImageTopOffset: number;
  createdAt: string;
  description: string;
  endDate: string;
  episodeCount: number;
  episodeLength: number;
  favoritesCount: number;
  nextRelease: any | null;
  nsfw: boolean;
  popularityRank: number;
  posterImage: any;
  ratingFrequencies: any;
  ratingRank: number;
  showType: string;
  slug: string;
  startDate: string;
  status: string;
  subtype: string;
  synopsis: string;
  tba: any | null;
  titles: any;
  totalLength: 650;
  updatedAt: string;
  userCount: 14164;
  youtubeVideoId: string;
};

// export type abbreviatedTitles = Array<any>;

export type reqTypes = {
  filter?: string;
  value?: string;
  limit?: number;
  type?: any;
};

export const animesTypes = {
  REQ_ANIMES: "REQ_ANIMES",
  SET_ANIMES: "SET_ANIMES",
  SET_LOADING: "SET_LOADING",
  // REQ_BY_RATING: "REQ_BY_RATING",
};

export interface CardProps {
  title: string;
  image: string;
  onClick?: () => void ;
  children?: React.ReactNode;
}
