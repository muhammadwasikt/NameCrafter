"use client"

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LoadingScreen = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };
    useEffect(() => {
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => {
                window.removeEventListener("load", handleLoad);
            };
        }
    }, []);
    return (
        <>
            {
                loading ?
                    <div className="flex items-center justify-center h-screen max-sm:h-[80vh]">
                        <div className="h-12 w-12 animate-spin rounded-full border-3 border-t-transparent border-blue-600" ></div>
                    </div >
                    :
                    <div>
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
            }
        </>
    )
}

export default LoadingScreen
