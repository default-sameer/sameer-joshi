import { NextSeo } from "next-seo";
import Link from "next/link";


const url = 'https://sameer-joshi.com.np';
const title = 'Projects | Sameer Joshi';
const description = `Full Stack Developer in Making.`;

const projects=[
    {
        title: 'Yts - Movie',
        description: 'Browse and Download Movies with various quality',
        url: 'https://the-movie-box.vercel.app',
    },
    {
        title: 'Github Repos',
        description: 'Search and View Github repos by simply typing the name of the repo',
        url: 'https://github-repos.sameer-joshi.com.np',
    },
    {
        title: 'Movie Box',
        description: 'Browse Trending Movies and Tv Shows',
        url: 'https://moviebox-tmdb.herokuapp.com',
    },
    {
        title: 'Ncc Bim Api',
        description: 'Api to Get BIm Student Details of My College',
        url: 'https://https://ncc-bim.herokuapp.com/docs',
    },
]


const Projects = (): JSX.Element => {
    return(
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description,
                }}
            />
         
            <section className="text-white body-font">
                <div className="container px-5 py-5 mx-auto">
                    {projects.map((project ) => 
                    <div key={project.title} className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-lg title-font font-medium mb-2 relative overflow-hidden group"><span className="invisible">{project.title}</span><span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">{project.title}</span><span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">{project.title}</span></h2>
                            <p className="leading-relaxed text-base">{project.description}</p>
                            <Link href={`${project.url}`}>
                                    <a className="mt-3 text-indigo-600 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 inline-flex items-center" target={`_blank`}>Visit
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                    )}
                </div>
                {/* <div className="flex justify-center items-center">
                    <p>Soon</p>
                </div> */}
            </section> 
        </>
    )

}

export default Projects;