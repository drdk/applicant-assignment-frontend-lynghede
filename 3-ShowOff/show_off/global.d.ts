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
  };
}

// {
//     "Type": "ProgramCard",
//     "SeriesTitle": "Jagten på mig selv",
//     "SeriesSlug": "jagten-pa-mig-selv",
//     "SeriesUrn": "urn:dr:mu:bundle:61bb515b539f022f3cfb0637",
//     "SeasonEpisodeNumberingValid": false,
//     "SeasonTitle": "Jagten på mig selv",
//     "SeasonSlug": "jagten-pa-mig-selv-2",
//     "SeasonUrn": "urn:dr:mu:bundle:61bb515b539f022f3cfb0639",
//     "SeasonNumber": 1,
//     "PrimaryChannel": "dr.dk/mas/whatson/channel/DR1",
//     "PrimaryChannelSlug": "dr1",
//     "PrePremiere": false,
//     "ExpiresSoon": true,
//     "OnlineGenreText": "Dokumentar",
//     "PrimaryAsset": {
//         "Kind": "VideoResource",
//         "Uri": "https://www.dr.dk/mu-online/api/1.3/bar/63898db371401437a4304bbc",
//         "DurationInMilliseconds": 3531499,
//         "Downloadable": false,
//         "RestrictedToDenmark": false,
//         "StartPublish": "2022-12-08T05:00:00Z",
//         "EndPublish": "2023-06-08T21:59:00Z",
//         "Target": "Default",
//         "Encrypted": false
//     },
//     "HasPublicPrimaryAsset": true,
//     "AssetTargetTypes": "Default VisuallyInterpreted",
//     "PrimaryBroadcastStartTime": "2022-12-08T20:00:00Z",
//     "SortDateTime": "2022-12-08T20:00:00Z",
//     "Slug": "jagten-pa-mig-selv-1-2",
//     "Urn": "urn:dr:mu:programcard:61bb515b539f022f3cfb0635",
//     "PrimaryImageUri": "https://www.dr.dk/mu-online/api/1.3/bar/61c0868171401409f8ab459c",
//     "PresentationUri": "https://www.dr.dk/tv/se/jagten-pa-mig-selv/jagten-pa-mig-selv-2/jagten-pa-mig-selv-1-2",
//     "PresentationUriAutoplay": "https://www.dr.dk/tv/se/jagten-pa-mig-selv/jagten-pa-mig-selv-2/jagten-pa-mig-selv-1-2#!/,autoplay=true",
//     "AgeClassification": {
//         "Authority": "MRAM",
//         "Rating": "MRAM-15",
//         "Description": "15 år"
//     },
//     "Title": "Jagten på mig selv (1:2)",
//     "Subtitle": "En barndom fuld af sorte huller, en opvækst på et kristent børnehjem og et CIA-finansieret psykologisk eksperiment i en kælder under Kommunehospitalet. Per Wennick er en af Danmarks legendariske dokumentarister med over 80 udsendelser bag sig: nu vender han kameraet mod sig selv i jagten på sin egen fortid."
// },
