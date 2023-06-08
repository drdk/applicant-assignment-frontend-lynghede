export async function fetchFeed() {
    const res = await fetch('https://www.dr.dk/mu-online/api/1.3/list/view/lastchance?limit=5&offset=0&channel=dr1');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

export async function getProgramData() {

    const feed = await fetchFeed();
    const items = feed.Items

    // if (!items.items || items.items.length > 0) {
    //     throw new Error('No programs to fetch')
    // }

    const programs: Program[] = []

    for (const entry of items) {
        const program: Program = {
            title: entry.Title,
            seriesTitle: entry.SeriesTitle,
            description: entry.Subtitle,
            imageUri: entry.PrimaryImageUri
        }
        programs.push(program)
    }



    return programs
}