import Image from "next/image";
import { getProgramData } from "../../services/Program";
import { displayRating, convertRuntime } from "../../helpers/GeneralHelpers";

export default async function Home() {
  const programData: Program[] = await getProgramData();

  return (
    <main>
      <div className="space-y-4 p-4">
        {programData.map((program, index) => (
          <div
            className="relative flex flex-col space-y-4 border-2 rounded-sm"
            key={index}>
            <div
              style={{
                backgroundImage: `url(${program.imageUri})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50% !important",
                overflow: "hidden",
                height: "700px",
              }}>
              <div
                className="h-full w-full absolute top-0 left-0"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, #ff001e 5%, transparent)",
                }}></div>
            </div>
            <div className="absolute bottom-12 flex flex-col z-10 p-8">
              <h2 className="text-4xl font-bold">{program.title}</h2>
              {/* <h3 className="text-2xl line-clamp-3">{program.description}</h3> */}
              <div className="flex flex-col items-center text-2xl 2xl:text-3xl pt-2 tracking-wide space-x-2">
                <div className="flex space-x-4 text-sm ">
                  <p className="self-center">{program.genre.toUpperCase()}</p>
                  <p className="border-[1px] p-1 text-sm">
                    {displayRating(program.parentalRating).toUpperCase()}
                  </p>
                </div>
                <p>Premiere: {program.startDate}</p>
                <p>Udløber: {program.endDate}</p>
                <p>{convertRuntime(program.runtime)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
