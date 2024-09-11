"use client";

import Link from "next/link";

export default function RedButton() {
    return (
        <Link href="https://www.superprof.com.tr/okuyorum-eglenceli-bir-sekilde-kod-anlattigimi-dusunuyorum-yapay-zeka-deneyimim-var-bolca-dil-biliyorum.html" passHref 
            className="text-3xl lg:text-4xl font-bold bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 top-3 margin-2 right-2"
            target="_blank"
            rel="noopener noreferrer">
        What People Say</Link>
    );
}
