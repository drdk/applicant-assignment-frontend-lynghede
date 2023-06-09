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
  return !rating.rating.includes("EXCEPT");
}

/**
 * Converts runtime miliseconds to hours and minutes
 * @param runtimeInMiliseconds
 * @return string with X hours and X minutes
 */
export function convertRuntime(runtimeInMiliseconds: number) {
  const numberToDate = new Date(runtimeInMiliseconds).toISOString();
  const hours = numberToDate.substring(12, 13);
  let min = numberToDate.substring(14, 16);
  if (min.substring(0, 1) === "0") {
    min = min.substring(1);
  }

  if (runtimeInMiliseconds < 3600000) {
    return `${min} M`;
  }
  return `${hours} T ${min} M`;
}
