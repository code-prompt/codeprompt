type TelegramChat = {
  id: number;
};

type TelegramMessage = {
  text?: string;
  chat: TelegramChat;
};

export type TelegramUpdate = {
  update_id: number;
  message?: TelegramMessage;
  edited_message?: TelegramMessage;
};

export function getTelegramMessage(update: TelegramUpdate): TelegramMessage | null {
  return update.message ?? update.edited_message ?? null;
}

export function parseBlogTopicFromText(text?: string): string | null {
  if (!text) return null;

  const normalized = text.trim();
  const match = normalized.match(/^\/blog(?:@[a-zA-Z0-9_]+)?\s*(.*)$/i);
  if (!match) return null;

  const topic = match[1]?.trim();
  return topic ? topic : "";
}

export async function sendTelegramMessage(chatId: number, text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });
}
