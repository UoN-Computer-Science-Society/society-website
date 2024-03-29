import getCommittees from "@/actions/getCommittee";
import getPositions from "@/actions/getPosition";
import CommitteePage from "@/app/about-us/components/Committee";
import Position from "@/app/about-us/components/Position";
import getFaqs from "@/actions/getFaqs";
import { Metadata } from "next";


export const revalidate = 0
export const metadata:Metadata = {
  title: 'About Us | UNM Computer Science Society',
  description:'We’re a community of programmers and tech enthusiasts, at the University of Nottingham Malaysia!'
}

export default async function Home() {
  const committee = await getCommittees();
  const position = await getPositions();
  return (
    <>
      <div className='container flex-col'>
      <div className='px-6'>
          <h1 className='title-header'>Our <span className="title">Mission</span> and <span className='text-[#E981D9]'>Vision</span></h1>
          <p>
            CSS has focused towards a technical approach in improving the Computer Science student life. Provided through workshops, talks and industrial trips with various collaborations, CSS proved to be a society where computer science students could enhance their knowledge and insight within the realm of computer science.
            As a staple tradition, CSS will be collaborating with the School of Computer Science (SoCS)
            for an event called ‘CS Week’ where all students in SoCS have a chance to meet seniors
            through ice breaking events, guest talks from tech industries and garnering new skills
            through workshops.
          </p>
          <br />
          <p>
            The Computer Science Society, in continuing this goal, will focus on creating a community of
            computer science and tech enthusiasts within the University. On top of hosting multiple
            technical talks and workshops, CSS would focus on building a community through hosting society projects and activities. A community with the love and passion for everything computer science.
          </p>
        </div>

        <div className="pl-6">
          <h1 id="team" className='title-header '>Meet our <span className="title">Team</span></h1>
          <CommitteePage data={committee} />
        </div>
        <div className="pl-6">
          <h1 className='title-header'>Open <span className="title">Positions!</span></h1>
          <Position data={position} />
        </div>

        


      </div>

    </>
  );
}
