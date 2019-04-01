export class Channel {
  public static load(): Promise<Channel[]> {
    return fetch('/channels',
      {
        credentials: 'same-origin',
        headers: { Accept: 'application/json' },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API error ${response.status} for request ${response.url}`);
        }
        return response;
      })
      .then((response) => response.json())
      .then((channels) => channels.map((id: string) => new Channel(id)));
  }

  constructor(public id: string) {}
}
