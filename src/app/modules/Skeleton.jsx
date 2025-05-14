import { Skeleton } from "@/components/ui/skeleton"


const Skeletons = () => {
    return (
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full pt-10 py-6">
            {Array.from({ length: 20 }).map((_ , index) => (
                <Skeleton key={index} className="p-7 w-full rounded-sm" />
            ))}
        </div>
    )
}

export default Skeletons
