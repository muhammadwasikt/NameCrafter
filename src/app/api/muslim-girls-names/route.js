import { NextResponse } from "next/server";
import { names } from "@/app/utils/names";


export async function GET(request) {
    const muslimGirlsNames = []
    const uniqueMuslimGirlsName = new Set()

    for (const name of names.muslimGirlsNames) {
        if (!uniqueMuslimGirlsName.has(name.name)) {
            uniqueMuslimGirlsName.add(name.name)
            muslimGirlsNames.push(name)
        }
    }

    muslimGirlsNames.sort(() => Math.random() - 0.5).length = 10
    return NextResponse.json(muslimGirlsNames);
}
