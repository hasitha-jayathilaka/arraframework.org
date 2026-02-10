import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill all fields." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!resendKey || !from || !to) {
      return NextResponse.json(
        { ok: false, error: "Missing email settings in .env.local" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `ARRA Framework contact: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // ✅ THIS IS THE IMPORTANT PART
    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message || "Email provider rejected the send." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Failed to send." },
      { status: 500 }
    );
  }
}
