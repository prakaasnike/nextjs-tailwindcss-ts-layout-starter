import React from 'react'

function Navbar() {
    return (
        <nav className="flex items-center justify-between max-w-5xl p-4 mx-auto border-b-2 border-gray-100 h-[10vh]">
            <div>
                <a
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg"
                    href="/"
                >

                </a>
            </div>
            <div>
                <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">

                    <li>
                        <a
                            className="inline-flex items-center px-3 py-2 rounded-lg"
                            href=""
                            target="_blank"
                        >
                            Button
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="ml-1.5 w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
