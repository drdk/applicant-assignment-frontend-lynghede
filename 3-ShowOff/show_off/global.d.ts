export {};

declare global {
  type Items = {
    programs: Program[];
    paging: Paging;
    totalSize: number;
  };

  type Program = {
    title: string;
    seriesTitle: string;
    description: string;
    imageUri: string;
    genre: string;
    runtime: number;
    startDate: string;
    endDate: string;
    parentalRating: ParentalRating;
  };

  type ParentalRating = {
    rating: string;
    description: string;
  };

  type Paging = {
    source: string;
    next?: string;
    previous?: string;
  };
}
