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
    const Messages = this.state.selected ? messages(this.state.selected) : PleaseSelect;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Channels selected={this.state.selected} onSelect={this.select}/>
          </div>
          <div className="col-8">
            <Messages />
          </div>
        </div>
      </div>
    );
  }

  private select = (channel: Channel) => {
    this.setState({selected: channel});
  };
}

interface ChannelsProps {
  selected: Channel;
  onSelect: (channel: Channel) => void;
}

const Channels = Loadable<ChannelsProps, Channel[]>({
  delay: 100,
  loader: () => Channel.load(),
  loading: Loading,

  render(channels, {onSelect, selected}: ChannelsProps) {
    return (
      <div className="list-group">{channels.map((c) => {
        const clz = selected && selected.id === c.id ? 'active' : '';
        const classes = `list-group-item list-group-item-action ${clz}`
        return <button type="button" key={c.id} className={classes} onClick={() => onSelect(c)}>{c.id}</button>;
      })}</div>
    );
  }
});

function PleaseSelect() {
  return (
    <div className="jumbotron">
      Please select the channel
    </div>
  );
}

function messages(channel: Channel) {
  return Loadable({
    delay: 100,
    loader: () => channel.retrieve(),
    loading: Loading,

    render(messageList, _props) {
      console.log(messageList);
      return <div></div>;
    }
  });
}
