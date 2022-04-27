import { NextSeo } from "next-seo"
import Ticker from "../components/assets/ticker";

const url = 'https://sameer-joshi.com.np';
const title = 'Home | Sameer Joshi';
const description = `Full Stack Developer in Making.`;

const Home = () : JSX.Element => {
  return (
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
        <div className="relative z-0" style={{ minHeight: '65vh' }}>
          <div
            className={`mx-auto max-w-5xl relative flex flex-col justify-center`}
            style={{ minHeight: '65vh' }}
          >
              <div className="front-layer top-0 right-0 flex flex-col justify-center items-center w-full h-full dark:text-white">
                <Ticker
                  textItems={[
                    'Python',
                    'NextJS',
                    'Javascript',
                    'Typescript',
                    'NodeJS',
                    'Express',
                    'Flask',
                    'FastApi',
                    'Linux',
                  ]}
                  
                />
              </div>
          </div>
        </div>

   </>
  )
}

export default Home
