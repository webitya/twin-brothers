import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendLeadEmail(lead, type = "booking") {
  const adminEmail = process.env.EMAIL_USER
  const clientEmail = lead.email
  const formattedDate = new Date(lead.preferredDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Client thank you email
  const clientMailOptions = {
    from: `"Twin Brother's Massage Therapy" <${adminEmail}>`,
    to: clientEmail,
    subject: "Booking Confirmation - Twin Brother's Massage Therapy",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #8B6B47; color: #F5EFE7; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Twin Brother's Massage Therapy</h1>
        </div>
        <div style="background-color: #F5EFE7; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #2C2C2C; font-size: 16px;">Dear ${lead.firstName},</p>
          
          <p style="color: #2C2C2C; font-size: 16px;">Thank you for booking a massage appointment with us! We're excited to help you experience the ultimate relaxation and rejuvenation.</p>
          
          <div style="background-color: #D4C4B0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8B6B47; margin-top: 0;">Booking Details</h3>
            <p style="color: #2C2C2C; margin: 10px 0;"><strong>Service:</strong> ${lead.service}</p>
            <p style="color: #2C2C2C; margin: 10px 0;"><strong>Preferred Date:</strong> ${formattedDate}</p>
            <p style="color: #2C2C2C; margin: 10px 0;"><strong>Phone:</strong> ${lead.phone}</p>
            ${lead.notes ? `<p style="color: #2C2C2C; margin: 10px 0;"><strong>Special Requests:</strong> ${lead.notes}</p>` : ""}
          </div>
          
          <p style="color: #2C2C2C; font-size: 16px;">Our team will contact you shortly to confirm your appointment and answer any questions you may have.</p>
          
          <p style="color: #2C2C2C; font-size: 16px;">
            <strong>Contact Us:</strong><br>
            Phone: (555) 123-4567<br>
            Email: hello@twinbrothers.com<br>
            Hours: Mon-Fri 9AM-8PM, Sat-Sun 10AM-6PM
          </p>
          
          <p style="color: #8B6B47; font-size: 14px; text-align: center; margin-top: 30px;">
            Looking forward to your visit!
          </p>
        </div>
      </div>
    `,
  }

  // Admin notification email
  const adminMailOptions = {
    from: `"Twin Brother's Massage Therapy" <${adminEmail}>`,
    to: adminEmail,
    subject: `New Booking Lead - ${lead.firstName} ${lead.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B6B47;">New Booking Lead</h2>
        
        <div style="background-color: #F5EFE7; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${lead.firstName} ${lead.lastName}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          <p><strong>Phone:</strong> ${lead.phone}</p>
          <p><strong>Service:</strong> ${lead.service}</p>
          <p><strong>Preferred Date:</strong> ${formattedDate}</p>
          ${lead.notes ? `<p><strong>Notes:</strong> ${lead.notes}</p>` : ""}
          <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <p style="margin-top: 20px; color: #666;">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin" style="color: #8B6B47; text-decoration: none;">View in Admin Panel</a>
        </p>
      </div>
    `,
  }

  await Promise.all([transporter.sendMail(clientMailOptions), transporter.sendMail(adminMailOptions)])
}

export async function sendContactEmail(lead) {
  const adminEmail = process.env.EMAIL_USER
  const clientEmail = lead.email

  // Client thank you email
  const clientMailOptions = {
    from: `"Twin Brother's Massage Therapy" <${adminEmail}>`,
    to: clientEmail,
    subject: "We Received Your Message - Twin Brother's Massage Therapy",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #8B6B47; color: #F5EFE7; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Twin Brother's Massage Therapy</h1>
        </div>
        <div style="background-color: #F5EFE7; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #2C2C2C; font-size: 16px;">Dear ${lead.name},</p>
          
          <p style="color: #2C2C2C; font-size: 16px;">Thank you for reaching out to us! We've received your message and appreciate you taking the time to contact Twin Brother's Massage Therapy.</p>
          
          <p style="color: #2C2C2C; font-size: 16px;">Our team will review your message and get back to you as soon as possible.</p>
          
          <p style="color: #2C2C2C; font-size: 16px;">
            <strong>Contact Us:</strong><br>
            Phone: (555) 123-4567<br>
            Email: hello@twinbrothers.com<br>
            Hours: Mon-Fri 9AM-8PM, Sat-Sun 10AM-6PM
          </p>
          
          <p style="color: #8B6B47; font-size: 14px; text-align: center; margin-top: 30px;">
            Best regards,<br>
            The Twin Brother's Team
          </p>
        </div>
      </div>
    `,
  }

  // Admin notification email
  const adminMailOptions = {
    from: `"Twin Brother's Massage Therapy" <${adminEmail}>`,
    to: adminEmail,
    subject: `New Contact Form Submission - ${lead.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B6B47;">New Contact Form Submission</h2>
        
        <div style="background-color: #F5EFE7; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${lead.name}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          ${lead.phone ? `<p><strong>Phone:</strong> ${lead.phone}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="background-color: #D4C4B0; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${lead.message}</p>
          <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <p style="margin-top: 20px; color: #666;">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin" style="color: #8B6B47; text-decoration: none;">View in Admin Panel</a>
        </p>
      </div>
    `,
  }

  await Promise.all([transporter.sendMail(clientMailOptions), transporter.sendMail(adminMailOptions)])
}
