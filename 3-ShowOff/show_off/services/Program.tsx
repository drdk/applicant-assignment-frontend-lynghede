import { convertDateTime } from "../helpers/GeneralHelpers";

export async function fetchFeed() {
  const res = await fetch(
    "https://www.dr.dk/mu-online/api/1.3/list/view/lastchance?limit=10&offset=5&channel=dr1"
    // "https://www.dr.dk/mu-online/api/1.3/list/view/lastchance?limit=5&offset=0&channel=dr1"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getProgramData() {
  const feed = await fetchFeed();
  const items = feed.Items;

  // if (!items.items || items.items.length > 0) {
  //     throw new Error('No programs to fetch')
  // }

  const programs: Program[] = [];

  for (const entry of items) {
    const program: Program = {
      title: entry.Title,
      seriesTitle: entry.SeriesTitle,
      description: entry.Subtitle,
      imageUri: entry.PrimaryImageUri,
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
