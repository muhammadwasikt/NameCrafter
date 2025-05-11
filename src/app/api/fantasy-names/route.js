import { NextResponse } from "next/server";
import { names } from "@/app/utils/names";


export async function GET(request) {
    const fantasyNames = []
    const uniqueFantasyName = new Set()

    for (const name of names.fantasyNames) {
        if (!uniqueFantasyName.has(name.name)) {
            uniqueFantasyName.add(name.name)
            fantasyNames.push(name)
        }
    }

    fantasyNames.sort(() => Math.random() - 0.5).length = 10
    return NextResponse.json(fantasyNames);
}
