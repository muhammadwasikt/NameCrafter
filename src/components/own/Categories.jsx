"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import NameList from "./NameList";

const Categories = () => {
    const [isPath, setIsPath] = useState(null);
    const [isType, setIsType] = useState(null);

    const handlePath = ({ path, type }) => {
        setIsPath(path);
        setIsType(type);
    };

    const categories = [
        { type: "Fantasy Names", path: "fantasy-names" },
        { type: "Business Names", path: "business-names" },
        { type: "Instagram Users Names", path: "instagram-users-names" },
        { type: "Pet Names", path: "pet-names" },
        { type: "Muslim Boys Names", path: "muslim-boys-names" },
        { type: "Muslim Girls Names", path: "muslim-girls-names" },
    ];

    return (
        <div className="w-full mx-auto px-4 flex flex-col items-center">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-lg:max-w-xl max-sm:max-w-sm max-[420px]:w-[250px] max-[300px]:w-[200px] pb-3 h-20"
            >
                <CarouselContent >
                    {categories.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full text-accent">
                            <div className="p-1 cursor-pointer" onClick={() => handlePath(item)}>
                                <Card>
                                    <CardContent className="flex items-center justify-center p-2">
                                        <span className="text-xl font-semibold max-sm:text-sm text-center ">{item.type}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="w-full">
                {isPath && isType && (
                    <div className="w-full mt-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="mt-2 text-sm text-pink-500"
                        >
                            <NameList path={isPath} type={isType} />
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Categories;
