import { NextResponse } from "next/server";
import { names } from "@/app/utils/names";


export async function GET(request) {
    const instagramUsersNames = []
    const uniqueInstagramUsersName = new Set()

    for (const name of names.instagramUsersNames) {
        if (!uniqueInstagramUsersName.has(name.name)) {
            uniqueInstagramUsersName.add(name.name)
            instagramUsersNames.push(name)
        }
    }

    instagramUsersNames.sort(() => Math.random() - 0.5).length = 10
    return NextResponse.json(instagramUsersNames);
}
