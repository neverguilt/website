import nodemailer, { Transporter } from "nodemailer";

const email: string = "contact@neverguilt.com";
const pass: string = "Ambicasteelworks#1";

const transporter: Transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const mailOptions = {
  from: email,
  to: "saran3vikram@gmail.com",
};

export { transporter, mailOptions };
