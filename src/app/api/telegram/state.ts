interface TelegramState {
  lastMessage: string;
  lastUpdateTime: string;
  status: 'online' | 'offline' | 'away';
  lastActivity: string;
}

class TelegramStateManager {
  private static instance: TelegramStateManager;
  private state: TelegramState;

  private constructor() {
    this.state = {
      lastMessage: '',
      lastUpdateTime: new Date().toISOString(),
      status: 'offline',
      lastActivity: 'No recent activity',
    };
  }

  public static getInstance(): TelegramStateManager {
    if (!TelegramStateManager.instance) {
      TelegramStateManager.instance = new TelegramStateManager();
    }
    return TelegramStateManager.instance;
  }

  public updateState(partial: Partial<TelegramState>) {
    this.state = {
      ...this.state,
      ...partial,
      lastUpdateTime: new Date().toISOString(),
    };
  }

  public getState(): TelegramState {
    return { ...this.state };
  }

  public updateStatus(status: TelegramState['status']) {
    this.state.status = status;
    this.state.lastUpdateTime = new Date().toISOString();
  }
}

export const telegramState = TelegramStateManager.getInstance();
