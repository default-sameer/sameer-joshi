import { NextSeo } from "next-seo";

const url = 'https://sameer-joshi.com.np';
const title = 'Projects | Sameer Joshi';
const description = `Full Stack Developer in Making.`;

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
        <div className="flex justify-center items-center">
            <p>Soon</p>
        </div>  
        </>
    )

}

export default Projects;