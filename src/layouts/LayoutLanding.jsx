import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function LayoutLanding() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#1f1f22] font-sans text-white">

                <header className="flex w-full items-center justify-between px-8 py-6 md:px-16 lg:px-24">


                    <div className="flex h-11 w-32 items-center justify-center rounded-full bg-[#e5e5e5] text-sm font-bold text-[#1f1f22]">
                        Logo
                    </div>


                    <nav className="hidden gap-10 text-base font-bold md:flex">
                        <Link
                            to="/"
                            className="cursor-pointer hover:text-gray-300">
                            <p >Home</p>
                        </Link>

                        <Link className="cursor-pointer text-gray-300 transition-colors hover:text-white"
                            to="/conoceMas"
                        >

                            <p>Conoce más</p>
                        </Link>

                        <Link
                            to="/nosotros"
                            className="cursor-pointer text-gray-300 transition-colors hover:text-white"
                        >

                            <p>Nosotros</p>

                        </Link>


                    </nav>

                    <div className="flex items-center gap-4">
                        <Link 
                        to="/auth/register"
                        className="rounded-full bg-[#fae568] px-8 py-3 text-sm font-bold text-[#1f1f22] 
                        shadow-[0_0_20px_rgba(250,229,104,0.4)] transition-transform hover:scale-105"
                        >
                            Crea tu cuenta
                        </Link>
                        <Link 
                         to="/auth"
                        className="rounded-full bg-[#fbfbf6] px-8 py-3 text-sm font-bold text-[#1f1f22] 
                        transition-transform hover:scale-105">
                            Inicia sesión
                        </Link>
                    </div>

                </header>

                <main>
                    <Outlet />
                </main>

            </div>

        </>
    )
}