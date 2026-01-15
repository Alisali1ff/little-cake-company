
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getDesignGuidance(userQuery?: string) {
  const prompt = userQuery 
    ? `The user is asking: "${userQuery}". Answer as a senior web design mentor helping a beginner. Explain structural choices or Webflow implementation steps clearly.`
    : `Explain the structure of this one-page website for "Little Cake Company" and provide a step-by-step guide on how a beginner can build this exact layout using Webflow. Focus on the Hero, Services, and Testimonial sections and why they are designed to drive phone calls.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: `You are a Senior Web Design Mentor helping a complete beginner. 
      Your tone is encouraging, professional, and clear. 
      The current project is "Little Cake Company", a UK-based bespoke bakery.
      The goal of the site is to get phone calls.
      
      Structure your explanations:
      1. Header (Identity & Primary CTA)
      2. Hero (Emotional connection & Phone Button)
      3. Services (Clarity of offering)
      4. Testimonials (Social proof)
      5. Footer (Final CTA)
      
      When explaining Webflow:
      - Mention Containers and Div Blocks.
      - Explain the "Grid" or "Flexbox" approach for services.
      - Mention using the "Link Block" for phone numbers (tel: protocol).`,
      temperature: 0.7,
    },
  });

  return response.text;
}
