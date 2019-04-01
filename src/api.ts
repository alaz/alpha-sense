type Message = string;

export class Channel {
  public static load(): Promise<Channel[]> {
    return fetch('/channels',
      {
        credentials: 'same-origin',
        headers: { Accept: 'application/json' },
      })
      .then(responseCheck)
      .then(asJson)
      .then((channels) => channels.map((id: string) => new Channel(id)));
  }

  constructor(public id: string) {}

  public retrieve(): Promise<Message[]> {
    return fetch(`/messages/${this.id}`, {
        credentials: 'same-origin',
        headers: { Accept: 'application/json' },
      })
      .then(responseCheck)
      .then(asJson);
  }

  public push(message: string) {
    return fetch(`/${this.id}`, {
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify({payload: message})
    });
  }
}

function responseCheck(response: Response) {
  if (!response.ok) {
    throw new Error(`API error ${response.status} for request ${response.url}`);
  }
  return response;
}

function asJson(response: Response) {
  return response.json();
}
