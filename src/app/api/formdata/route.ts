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
export async function POST(req: NextRequest, res: NextResponse) {

    // const body = req.body



    try {
        const statusCode = NextResponse.json({}).status
        if (statusCode) {
            return NextResponse.json({ status: statusCode, message: "message sent successfully!" })

        } else {
            return NextResponse.json({ status: statusCode, message: "something went wrong, please try calling us instead" })
        }
        // await transporter.sendMail({
        //     ...mailOptions,
        //     subject: "test",
        //     html: ""
        // })

    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: error })
    }
}








