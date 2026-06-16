import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini Setup
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "dummy", 
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Composer API Route
  app.post("/api/composer", async (req, res) => {
    try {
      const { history, message } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        return res.json({ 
          response: "عذراً، لم يتم إعداد مفتاح واجهة برمجة التطبيقات (API Key) الخاص بـ Gemini. يرجى تكوينه في الإعدادات لتفعيل الوكيل الذكي." 
        });
      }

      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: `أنت وكيل ذكي مختص بتلحين الأغاني والموسيقى الشرقية والعربية. 
مهمتك هي مساعدة المستخدم في بناء تركيبة موسيقية (لحن، مقام، إيقاع، آلات، توزيع).
قم دائمًا بطرح أسئلة (سؤال واحد أو اثنان فقط في كل مرة) قبل إعطاء اللحن النهائي لتفهم احتياجاته.
الأسئلة المقترحة: ما هو موضوع كلمات الأغنية؟ ما هو الجو النفسي المطلوب؟ هل تفضل مقامات معينة (مثل البياتي، الرست)؟ ما هي الآلات المفضلة؟
بمجرد جمع المعلومات الكافية، اقترح خطة متكاملة للتلحين. تحدث دائماً باللغة العربية.`,
          temperature: 0.7,
        },
      });

      // Restore history if possible, but @google/genai chats.create doesn't easily take raw history array unless passed in history property
      // To keep it simple, we can pass history in config.
      const chatWithHistory = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: `أنت وكيل ذكي مختص بتلحين الأغاني والموسيقى الشرقية والعربية. 
مهمتك هي مساعدة المستخدم في بناء تركيبة موسيقية (لحن، مقام، إيقاع، آلات، توزيع).
قم دائمًا بطرح أسئلة (سؤال واحد أو اثنان فقط في كل مرة) قبل الوصول للتصور النهائي لتفهم احتياجاته بوضوح.
الأسئلة المقترحة (اطرحها تدريجياً وليس دفعة واحدة): ما هو موضوع الكلمات؟ ما هو الشعور؟ أو هل تفضل إيقاع معين؟
بمجرد أن تشعر أنك جمعت تفاصيل كافية، اقدم مقترحاً فنياً وتوزيعياً كاملاً. تحدث دائماً باللغة العربية وبأسلوب فني ملهم.`,
        }
      });

      // Quick implementation of chatting with previous history
      // Note: @google/genai allows passing history but we must format it.
      // Easiest is to just send all messages as one long prompt if we don't want to format it,
      // But standard way is sending the accumulated prompt.
      let prompt = "";
      if (history && Array.isArray(history)) {
         for (const msg of history) {
            prompt += `${msg.role === 'user' ? 'المستخدم' : 'الوكيل'}: ${msg.text}\n\n`;
         }
      }
      prompt += `المستخدم: ${message}\n\nالوكيل:`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: `أنت وكيل ذكي مختص بتلحين الأغاني والموسيقى الشرقية والعربية. 
مهمتك هي مساعدة المستخدم في بناء تركيبة موسيقية (لحن، مقام، إيقاع، توزيع).
اطرح أسئلة تدريجية تفاعلية حول الكلمات، المشاعر، والإيقاعات المفضلة. لا تسأل كل الأسئلة دفعة واحدة. 
رد بأسلوب خبير موسيقي.`,
        }
      });

      res.json({ response: response.text });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: "حدث خطأ أثناء التواصل مع الوكيل." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
