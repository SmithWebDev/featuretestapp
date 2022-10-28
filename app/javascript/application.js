// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";

import { StreamActions } from "@hotwired/turbo";

StreamActions.console_log = function () {
  const message = this.getAttribute("message");
  console.log(message);
};
