import { NextResponse } from 'next/server';
import { telegramState } from './state';

if (!process.env.BOT_TOKEN || !process.env.CHAT_ID) {
  throw new Error('Missing required environment variables BOT_TOKEN or CHAT_ID');
}

const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

// Route Segment Config
export const revalidate = 0; // Disable cache for real-time updates

export async function GET() {
  try {
    // Get the current state
    const state = telegramState.getState();
    return NextResponse.json({ state });
  } catch (error) {
    console.error('Error fetching Telegram chat:', error);
    return NextResponse.json({ error: 'Failed to fetch chat info' }, { status: 500 });
  }
}

// Handle incoming webhook updates from Telegram
export async function POST(request: Request) {
  try {
    const update = await request.json();
    console.log('Received update:', JSON.stringify(update));
    
    // Check if it's a message with text
    if (update.message?.text && update.message.from?.username === 'twanluttik') {
      const { message } = update;
      const { text, date } = message;

      // Update our local state
      telegramState.updateState({
        lastMessage: text,
        status: 'online',
        lastActivity: `Message sent at ${new Date(date * 1000).toLocaleString()}`,
      });
      
      console.log('Updated state:', telegramState.getState());
      
      // Send a response back
      await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: `Received your message: ${text}`,
          }),
        }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}
