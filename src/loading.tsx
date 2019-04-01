import * as React from "react";

export function Loading() {
  return (
    <div style={ {minHeight: '300px', lineHeight: '300px'} } className="text-muted text-center align-middle lead">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
