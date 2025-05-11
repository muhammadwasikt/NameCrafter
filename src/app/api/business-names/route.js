import { NextResponse } from "next/server";
import { names } from "@/app/utils/names";


export async function GET(request) {
    const businessNames = []
    const uniqueBusinessName = new Set()

    for (const name of names.businessNames) {
        if (!uniqueBusinessName.has(name.name)) {
            uniqueBusinessName.add(name.name)
            businessNames.push(name)
        }
    }

    businessNames.sort(() => Math.random() - 0.5).length = 10
    return NextResponse.json(businessNames);
}
