import * as React from "react";

export function Loading() {
  return (
    <div style={ {minHeight: '350px'} } className="text-muted align-middle lead">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
