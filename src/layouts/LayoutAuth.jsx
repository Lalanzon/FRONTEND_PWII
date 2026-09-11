import { Outlet } from 'react-router-dom'

export default function LayoutAuth() {

    return (
        <>

            <main className="relative flex min-h-screen w-full font-sans">

                <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#1f1f22] -z-10">
                    <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-[#fae568]"></div>
                    <div className="absolute -bottom-32 right-12 h-[26rem] w-[26rem] rounded-full bg-[#83cbfc]"></div>
                </div>
                
                <div className="absolute inset-y-0 right-0 w-1/2 bg-[#FFFFED] -z-10"></div>

                <div className="relative z-10 flex w-full">
                    <Outlet />
                </div>

            </main>

        </>
    )
}