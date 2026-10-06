import { NextResponse } from "next/server";
import { z } from "zod";

import { transporter } from "@/lib/mailer";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(100, "Keep it under 100 characters"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(255, "Email address is too long"),

  message: z
    .string()
    .trim()
    .min(10, "A little more detail, please (10+ characters)")
    .max(1000, "Keep it under 1000 characters"),

  website: z
    .string()
    .max(0, "Invalid submission")
    .optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you provided.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, message, website } = parsed.data;

    // Honeypot protection.
    if (website) {
      return NextResponse.json({ success: true });
    }

    const recipient = process.env.CONTACT_EMAIL;

    if (!recipient) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact email is not configured.",
        },
        { status: 500 },
      );
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,

      text: [
        "New portfolio enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),

      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Portfolio enquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f6f6f6;
              color: #141414;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <table
              role="presentation"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="padding: 40px 20px;"
            >
              <tr>
                <td align="center">

                  <table
                    role="presentation"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    style="
                      max-width: 620px;
                      background: #ffffff;
                      border: 1px solid #e5e5e5;
                      border-radius: 12px;
                      overflow: hidden;
                    "
                  >

                    <!-- Header -->
                    <tr>
                      <td
                        style="
                          padding: 28px 32px;
                          border-bottom: 1px solid #e5e5e5;
                        "
                      >
                        <p
                          style="
                            margin: 0 0 8px;
                            font-size: 11px;
                            line-height: 1.5;
                            letter-spacing: 0.12em;
                            text-transform: uppercase;
                            color: #777777;
                          "
                        >
                          Portfolio / Contact
                        </p>

                        <h1
                          style="
                            margin: 0;
                            font-size: 24px;
                            line-height: 1.3;
                            font-weight: 600;
                            color: #141414;
                          "
                        >
                          New enquiry
                        </h1>
                      </td>
                    </tr>

                    <!-- Sender -->
                    <tr>
                      <td style="padding: 28px 32px 12px;">
                        <p
                          style="
                            margin: 0 0 14px;
                            font-size: 12px;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: #777777;
                          "
                        >
                          From
                        </p>

                        <table
                          role="presentation"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <tr>
                            <td style="padding-bottom: 8px;">
                              <strong
                                style="
                                  font-size: 16px;
                                  color: #141414;
                                "
                              >
                                ${escapeHtml(name)}
                              </strong>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <a
                                href="mailto:${escapeHtml(email)}"
                                style="
                                  font-size: 14px;
                                  color: #555555;
                                  text-decoration: none;
                                "
                              >
                                ${escapeHtml(email)}
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                      <td style="padding: 16px 32px 32px;">
                        <p
                          style="
                            margin: 0 0 14px;
                            font-size: 12px;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: #777777;
                          "
                        >
                          Message
                        </p>

                        <div
                          style="
                            padding: 20px;
                            background: #f8f8f8;
                            border: 1px solid #e9e9e9;
                            border-radius: 8px;
                            font-size: 15px;
                            line-height: 1.7;
                            color: #333333;
                            white-space: pre-wrap;
                          "
                        >${escapeHtml(message)}</div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td
                        style="
                          padding: 18px 32px;
                          background: #fafafa;
                          border-top: 1px solid #e5e5e5;
                        "
                      >
                        <p
                          style="
                            margin: 0;
                            font-size: 11px;
                            line-height: 1.6;
                            color: #888888;
                          "
                        >
                          Sent from your portfolio contact form.
                          Reply directly to this email to respond to ${escapeHtml(name)}.
                        </p>
                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending your message.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}