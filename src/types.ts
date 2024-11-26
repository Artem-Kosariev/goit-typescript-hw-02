 export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string,
    full: string,
    regular: string,
  };
  user: {
    name: string,
    profile_image: {
      small: string,
    },
  };
}

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: Image[];
}


export interface FormValues {
  query: string;
}

export interface AppState {
  page: number;
  queryValue: string;
  gallery: Image[];
  isLoading: boolean;
  isError: boolean;
  totalPages: number;
  noResults: boolean;
  modalOpen: boolean;
  modalImage: string;
  alt: string;
}