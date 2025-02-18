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
    
    // Get the chat info
    const chatResponse = await fetch(
      `https://api.telegram.org/bot${token}/getChat?chat_id=${chatId}`,
      { cache: 'no-store' } // Disable cache for real-time updates
    );
    const chatData = await chatResponse.json();

    return NextResponse.json({
      ...chatData,
      state, // Include our local state in the response
    });
  } catch (error) {
    console.error('Error fetching Telegram chat:', error);
    return NextResponse.json({ error: 'Failed to fetch chat info' }, { status: 500 });
  }
}

// Handle incoming webhook updates from Telegram
export async function POST(request: Request) {
  try {
    const update = await request.json();
    
    // Check if it's a message
    if (update.message && update.message.from) {
      const message = update.message;
      const username = message.from.username;

      // Only process messages from twanluttk
      if (username === 'twanluttk') {
        // Update our local state
        telegramState.updateState({
          lastMessage: message.text,
          status: 'online',
          lastActivity: `Last message: ${message.text}`,
        });
        
        // Optional: Send a response back
        await fetch(
          `https://api.telegram.org/bot${token}/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: `Received your message: ${message.text}`,
            }),
          }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}
