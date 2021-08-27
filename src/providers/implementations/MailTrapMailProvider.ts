import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "60622a3b29b057", // generated ethereal user
                pass: "7ca0fc301a0460", // generated ethereal password
            },
        });
    }
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body
        })
    }
}