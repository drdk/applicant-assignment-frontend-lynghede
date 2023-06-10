export {};

declare global {
  type Items = {
    items: Program[];
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
}
