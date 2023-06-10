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
            className="relative flex flex-col border-2 border-transparent rounded-xl overflow-hidden"
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
              <div className="h-full w-full absolute top-0 left-0 bg-gradient-dr"></div>
            </div>
            <div className="absolute bottom-12 flex flex-col z-10 p-8 w-full">
              <h2 className="text-3xl sm:text-5xl break-words font-bold">
                {program.title}
              </h2>
              {/* <h3 className="text-2xl line-clamp-3">{program.description}</h3> */}
              <div className="flex flex-col text-sm sm:text-xl pt-2 tracking-wide">
                <div className="flex space-x-4  ">
                  <p className="self-center">{program.genre.toUpperCase()}</p>
                  {displayRating(program.parentalRating) && (
                    <p className=" text-center border-[1px] px-2 rounded-md">
                      {program.parentalRating.description}
                    </p>
                  )}
                </div>
                <p>Premiere: {program.startDate}</p>
                <p>{convertRuntime(program.runtime)}</p>
              </div>
            </div>
            <div className="absolute h-full w-full flex items-center">
              <div className="flex bg-red-dr -skew-y-6 p-4 w-full items-center mb-4">
                <p className="text-2xl sm:text-5xl font-black uppercase text-center w-full">
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
