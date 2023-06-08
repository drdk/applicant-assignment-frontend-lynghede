export function convertDateTime(date: string) {
  const newDate = new Date(date);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "Europe/Copenhagen",
  };

  // @ts-ignore
  const formatedDate = newDate.toLocaleString("da-DK", options);
  return formatedDate;
}

export function displayRating(rating: ParentalRating) {
  return rating.rating.includes("EXCEPT") ? "" : rating.description;
}
