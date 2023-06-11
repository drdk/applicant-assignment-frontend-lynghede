import { getProgramData } from "../../services/Program";
import { displayRating, convertRuntime } from "../../helpers/GeneralHelpers";

export default async function Home() {
  const programData: Program[] = await getProgramData("10", "10");

  return (
    <main>
      <div className="p-4 flex flex-wrap gap-8">
        {programData.map((program, index) => (
          <div
            className="lg:w-1/4 w-full relative flex flex-auto flex-col rounded-xl overflow-hidden shadow-lg shadow-slate-600 "
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
              <h1 className="text-3xl 2xl:text-4xl break-words font-bold">
                {program.title}
              </h1>
              <div className="flex flex-col text-sm 2xl:text-xl pt-2 tracking-wide">
                <div className="flex space-x-4">
                  <p className="self-center uppercase">{program.genre}</p>
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
                <p className="text-2xl 2xl:text-4xl font-black uppercase text-center w-full">
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
