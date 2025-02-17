import TelegramBot from 'node-telegram-bot-api';
import { NextResponse } from 'next/server';

const token = '7691810241:AAH9Fj80hCK0vTN5hPMsqc4DHy_Thh0Fzxk';
const chatId = '-4695123639';

// Route Segment Config
export const revalidate = 3600; // revalidate every hour

export async function GET() {
  try {
    // Get the chat info
    const chatResponse = await fetch(
      `https://api.telegram.org/bot${token}/getChat?chat_id=${chatId}`,
      { next: { revalidate: 3600 } } // 1 hour cache at the fetch level
    );
    const chatData = await chatResponse.json();
    
    if (!chatData.ok) {
      throw new Error('Failed to get chat info');
    }

    // Get updates with specific filters
    const updatesResponse = await fetch(
      `https://api.telegram.org/bot${token}/getUpdates?offset=-1&allowed_updates=["message","channel_post","edited_message","edited_channel_post"]`,
      { next: { revalidate: 3600 } } // 1 hour cache at the fetch level
    );
    const updatesData = await updatesResponse.json();

    let lastMessage = 'No messages found';
    if (updatesData.ok && updatesData.result.length > 0) {
      const update = updatesData.result[0];
      const messageObj = 
        update.message || 
        update.channel_post || 
        update.edited_message || 
        update.edited_channel_post;

      if (messageObj?.from?.username === 'twanluttik' && messageObj.text) {
        lastMessage = messageObj.text;
      }
    }

    return NextResponse.json(
      { 
        status: 'success', 
        message: lastMessage,
        channelTitle: chatData.result.title 
      }
    );
  } catch (error) {
    console.error('Error fetching Telegram message:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch message' },
      { status: 500 }
    );
  }
}
