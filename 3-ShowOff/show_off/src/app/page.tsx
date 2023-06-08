import Image from 'next/image'
import { getProgramData } from '../../services/Program';

 
export default async function Home() {
  const programData: Program[] = await getProgramData();


  console.log("data", programData)

  return (
    <main>
      <div>
        {programData.map((program, index) => (
        <div className='flex flex-col space-y-4 border-2 p-4' key={index}>
          <h2 className='text-4xl font-bold'>{program.title}</h2>
          <h3 className='text-2xl'>{program.description}</h3>
          <Image src={program.imageUri} alt={program.title} width={500} height={500}/>
          <div className='flex items-center text-2xl 2xl:text-3xl pt-2 tracking-wide space-x-2'>


          </div>
          </div>
    ))}
    </div>
    </main>
    
  )
}
