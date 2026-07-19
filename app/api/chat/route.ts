import { SYSTEM_PROMPT } from "@/app/data/resume";

function delay(ms: number) {
    return new Promise(( resolve ) => setTimeout(resolve, ms));
}

export async function POST(req: Request ) {
    const { message } = await req.json();

    let data;
    const maxAttempts = 3;

    //server call before it fires "something went wrongyes "
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    systemInstruction: { parts: [{ text: SYSTEM_PROMPT}]},
                    contents: [{ parts: [{ text: message }] }],
                }),
            }
        );
    
        data = await res.json();

        if (res.ok) break; // stop retrying
        
        if (attempt < maxAttempts) await delay(1000); // wait before next try 
        
    }
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, Something went wrong.";

    return Response.json({ reply });
    
}