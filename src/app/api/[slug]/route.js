import { NextResponse } from "next/server";
import { names } from "@/app/utils/names";

export async function GET(request) {
    const slug = request.nextUrl.pathname.split("/").pop();
    const nameList = names[slug]
    const name = [];
    const uniqueNames = new Set();

    for (const item of nameList) {
        if (!uniqueNames.has(item.name)) {
            uniqueNames.add(item.name);
            name.push(item);
        }
    }
    name.sort(() => Math.random() - 0.5);

  return NextResponse.json(name);
}
