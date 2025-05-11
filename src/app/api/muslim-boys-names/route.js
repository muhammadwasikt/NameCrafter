import { NextResponse } from "next/server";
import { names } from "@/app/utils/names";

export async function GET(request) {
    const muslimBoysNamesList = [];
    const uniqueNames = new Set();

    for (const item of names.muslimBoysNames) {
        if (!uniqueNames.has(item.name)) {
            uniqueNames.add(item.name);
            muslimBoysNamesList.push(item);
        }
    }

    muslimBoysNamesList.sort(() => Math.random() - 0.5).length = 10

    return NextResponse.json(muslimBoysNamesList );
}
