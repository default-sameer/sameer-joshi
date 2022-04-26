import { Github } from '@icons-pack/react-simple-icons';
import Header from './header';

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) : JSX.Element {
    return (
        <>
            <div className="mx-auto max-w-5xl py-5 flex flex-col min-h-screen justify-between">
                <header>
                    <Header />
                </header>
                <main>{children}</main>
                <footer className="flex items-center justify-center text-center text-xl mt-8 mx-5">
                    <span className="flex">
                        <a
                            className="ml-6 transition-text duration-200 hover:text-black text-gray-500"
                            href="https://github.com/default-sameer"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github size={20} />
                        </a>
                    </span>
                </footer>
            </div>
        </>
    )
}