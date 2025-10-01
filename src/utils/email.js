import nodemailer from "nodemailer"

export function getTransporter() {
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  if (!user || !pass) {
    console.warn("[email] Missing EMAIL_USER or EMAIL_PASS")
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  })
  return transporter
}

export async function sendMail({ to, subject, html }) {
  const transporter = getTransporter()
  const from = `"Serene Touch" <${process.env.EMAIL_USER}>`
  return transporter.sendMail({ from, to, subject, html })
}
