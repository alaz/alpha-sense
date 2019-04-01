import * as Loadable from 'react-loadable';
import * as React from "react";

import { Channel } from './api';
import { Loading } from './loading';

interface State {
  selected: Channel;
}

export class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { selected: null };
  }

  public render() {
    const Channels = channels(this.state.selected);
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Channels />
          </div>
          <div className="col-8">
            <div className="lead">
              Please select the channel
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function channels(_selected: Channel) {
  return Loadable({
    delay: 100,
    loader: () => Channel.load(),
    loading: Loading,

    render(channels, _props) {
      return (
        <div className="list-group">
          {channels.map((c) => <li key={c.id} className="list-group-item">{c.id}</li>)}
        </div>
      );
    }
  });
}
