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
            className="relative flex flex-col border-2 rounded-md"
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
                    "linear-gradient(0deg, #ff001e -50%, transparent)",
                }}></div>
            </div>
            <div className="absolute bottom-12 flex flex-col z-10 p-8">
              <h2 className="text-4xl font-bold">{program.title}</h2>
              {/* <h3 className="text-2xl line-clamp-3">{program.description}</h3> */}
              <div className="flex flex-col text-2xl 2xl:text-3xl pt-2 tracking-wide">
                <div className="flex space-x-4 text-sm ">
                  <p className="self-center">{program.genre.toUpperCase()}</p>
                  <p className="text-sm">{convertRuntime(program.runtime)}</p>
                  {displayRating(program.parentalRating) && (
                    <p className="border-[1px] p-1 text-sm">
                      {program.parentalRating.description}
                    </p>
                  )}
                </div>
                <p className="text-sm">Premiere: {program.startDate}</p>
              </div>
            </div>
            <div className="absolute h-full w-full flex items-center">
              <div className="flex bg-red-dr -skew-y-6 h-16 w-full items-center">
                <p className="text-4xl font-black uppercase text-center w-full">
                  Udløber: {program.endDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
