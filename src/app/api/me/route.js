import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Yannawut Yunvisate",
    studentId: "650610757",
  });
};
