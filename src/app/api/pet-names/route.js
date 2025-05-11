import { NextResponse } from "next/server";
import { names } from "@/app/utils/names";


export async function GET(request) {
    const petNames = []
    const uniquePetName = new Set()

    for (const name of names.petNames) {
        if (!uniquePetName.has(name.name)) {
            uniquePetName.add(name.name)
            petNames.push(name)
        }
    }

    petNames.sort(() => Math.random() - 0.5).length = 10
    return NextResponse.json(petNames);
}
