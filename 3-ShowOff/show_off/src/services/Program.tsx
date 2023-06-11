import { convertDateTime } from "@/helpers/GeneralHelpers";

const DR_FEED_URI = "https://www.dr.dk/mu-online/api/1.3/list/view/lastchance";

/**
 * Fetch DR about to expire feed
 * @param customParams
 */
export async function fetchFeed(customParams = {}) {
  const params = { channel: "dr1", ...customParams };

  const res = await fetch(DR_FEED_URI + "?" + new URLSearchParams(params));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

/**
 * Fetch list of programs
 * @param limit number as string
 * @param offset numer as string
 * @returns Program[]
 */
export async function getProgramData(limit: string, offset?: string) {
  const params = {
    limit: limit,
    offset: offset ? offset : "0",
  };
  const feed = await fetchFeed(params);
  const items = feed.Items;

  if (!items || items.length === 0) {
    throw new Error("No programs to fetch");
  }

  const programs: Program[] = [];

  for (const entry of items) {
    const program: Program = {
      title: entry.Title,
      seriesTitle: entry.SeriesTitle,
      description: entry.Subtitle,
      imageUri: entry.PrimaryImageUri ? entry.PrimaryImageUri : "/molle.jpeg",
      genre: entry.OnlineGenreText,
      runtime: entry.PrimaryAsset.DurationInMilliseconds,
      startDate: convertDateTime(entry.PrimaryAsset.StartPublish),
      endDate: convertDateTime(entry.PrimaryAsset.EndPublish),
      parentalRating: {
        rating: entry.AgeClassification.Rating,
        description: entry.AgeClassification.Description,
      },
    };
    programs.push(program);
  }

  return programs;
}
