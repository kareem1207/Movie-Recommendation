import Link from 'next/link'
export const Header = ()=>{
    return<>
    <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">
            Logo
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
            About
            </Link>
            <Link href="/movies" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Movies
            </Link>
            <Link href="/signIn" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Sign In
            </Link>
        </div>

        <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            </button>
        </div>
        </div>
        </nav>
    </header>
    </>
}