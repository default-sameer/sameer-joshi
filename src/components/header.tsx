import Link from "next/link";
import Navigation from "./navigation";
import Logo from "./assets/logo";


export default function Header(): JSX.Element {
    return(
        <>
            <div className="flex items-center justify-between relative z-50 px-5 pb-6">
                <span className="m-0 pb-0 font-display flex items-center justify-between text-lg">
                    <Link href="/">
                        <a className="no-underline ">
                            <div className="flex">
                                <div className="sm:hidden">
                                <Logo className="inline text-white"/>
                                </div>
                            <span className="ml-4 font-light text-white uppercase tracking-widest hidden sm:inline mt-3">
                                <strong className="font-semibold">Sameer Joshi</strong>
                            </span>
                            </div>
                        </a>
                    </Link>
                </span>
                <Navigation />
            </div>
        </>
    )
}