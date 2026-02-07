
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
أنت المساعد الذكي لأكاديمية منارات لعلوم السايكولوجي. 
الأكاديمية متخصصة في علوم السايكولوجي، تطوير الذات، علوم الطاقة الكونية، والروحانيات.
مزايا الدراسة لدينا:
- محاضرات أسبوعية منتظمة.
- منهج معتمد من جامعات إنسانية.
- تأملات ورياضيات روحية وتمارين شفاء.
- شهادة دولية معتمدة عند التخرج.
- بصمة "المحبّة" هي ما يميزنا عن غيرنا.
أهم الكورسات المتوفرة: كورس البوابات النجمية، السايكولوجي (تقديم د. منار عمران)، الإتيكيت الدولي، التصوير، والجرافيك ديزاين.
مقرنا في تركيا - يالوفا. ورقم التواصل هو 00905312457730.
أجب بلباقة وبصيغة تعكس روحانية وهدوء الأكاديمية.
`;

export async function getSmartResponse(userMessage: string, history: { role: 'user' | 'model', text: string }[]) {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، أواجه مشكلة في الاتصال حالياً. يرجى المحاولة مرة أخرى لاحقاً أو التواصل عبر الواتساب.";
  }
}
