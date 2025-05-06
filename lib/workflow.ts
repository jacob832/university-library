import { Client as WorkflowClient } from "@upstash/workflow";
//import { Client as QStashClient, resend } from "@upstash/qstash";
import config from "@/lib/config";
import emailjs from '@emailjs/browser';
export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

// const qstashClient = new QStashClient({
//   token: config.env.upstash.qstashToken,
// });

export const sendEmail = async ({
    email,
    subject,
    message,
  }: {
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,   // e.g., 'service_xxx'
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,  // e.g., 'template_xxx'
        {
          to_email: email,
          subject,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!       // e.g., 'user_xxx' or public key
      );
      console.log('Email sent successfully:', response.status, response.text);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };
