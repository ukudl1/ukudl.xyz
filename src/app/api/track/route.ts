import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo — replace with DB in production
const clicks: Record<string, { count: number; last: string }> = {};

export async function POST(req: NextRequest) {
  try {
    const { linkId } = await req.json();
    if (!linkId || typeof linkId !== "string") {
      return NextResponse.json({ error: "invalid" }, { status: 400 });
    }
    if (!clicks[linkId]) clicks[linkId] = { count: 0, last: "" };
    clicks[linkId].count++;
    clicks[linkId].last = new Date().toISOString();
    return NextResponse.json({ ok: true, count: clicks[linkId].count });
  } catch {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(clicks);
}
