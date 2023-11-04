import { NextRequest, NextResponse } from "next/server"
import Nodemailer from 'nodemailer';
const transporter = Nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS

    }
})
const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL
}
export async function POST(req: NextRequest) {
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "test",
            html: "<h1>This is a test from app</h1>"
        })
        const response = NextResponse.json({ status: 200, message: "This is from formdata" })
        return response
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: error })
    }
}