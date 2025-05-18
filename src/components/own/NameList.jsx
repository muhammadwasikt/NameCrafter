"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react"
import { getReq } from "@/app/axios/axios"
import Skeletons from "@/app/modules/Skeleton";
import { Button } from "../ui/button";

const NameList = ({ type, path }) => {
    const [names, setNames] = useState([])
    const [loading, setLoading] = useState(false)
    const [isCopying, setIsCopying] = useState(false)
    const [copiedText, setCopiedText] = useState("")
    const [isRefreshing, setIsRefreshing] = useState(false)

    const handleCopy = (name) => {
        navigator.clipboard.writeText(name)
        setIsCopying(true)
        setCopiedText(name)
    }
    useEffect(() => {
        const handleVesibility = () => {
            if (document.visibilityState === "hidden") {
                setIsCopying(false)
                setCopiedText("")
            }
        }
        document.addEventListener("visibilitychange", handleVesibility)
        return () => {
            document.removeEventListener("visibilitychange", handleVesibility)
        }
    }, [isCopying])
    const getNames = async () => {
        try {
            setLoading(true)
            const response = await getReq(`/${path}`)
            setNames(response)
            setLoading(false)
            setIsRefreshing(false)
        }
        catch (error) {
            console.error("Error fetching names:", error)
            setLoading(false)
            setIsRefreshing(false)
        }
    }
    const handleRefresh = () => {
        setIsRefreshing(!isRefreshing)
        getNames()
    }
    useEffect(() => {
        if (path) {
            getNames()
        }
    }, [path, type])

    return (
        <div className="py-10 w-full">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-center text-2xl cursor-pointer font-extrabold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent w-full">{type?.toUpperCase()}</h1>
                <Button variant="ghoast" onClick={() => handleRefresh()} className="cursor-pointer border" disabled={loading}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-refresh-cw-icon lucide-refresh-cw cursor-pointer ${isRefreshing ? 'animate-spin' : ''}`}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
                </Button>
            </div>
            {loading ? <Skeletons /> :
                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-2 w-full">
                    {names?.slice(0, 20)?.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            // transition={{ delay: 1, duration: 1 }}
                            className="mt-2 text-sm text-pink-500"
                            key={index}
                        >
                            <div className="p-3 bg-muted rounded-sm shadow-md relative cursor-pointer h-full flex justify-center items-center">
                                <h2 className="text-lg shrink-1 text-center px-2">{item.name}</h2>

                                <Button variant="ghost" className="absolute w-full top-2 flex justify-end bg-clip-text bg-orange-400 text-transparent" onClick={() => handleCopy(item?.name)} >
                                    {isCopying && copiedText === item.name ? "Copied!" : "Copy"}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>}
        </div>

    )
}

export default NameList
