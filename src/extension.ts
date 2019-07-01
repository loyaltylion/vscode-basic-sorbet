import * as vscode from "vscode";
import { LanguageClient } from "vscode-languageclient";

let client: LanguageClient;

export function activate(_ctx: vscode.ExtensionContext) {
  client = new LanguageClient(
    "ruby",
    "sorbet",
    {
      command: "bundle",
      args: [
        "exec",
        "srb",
        "typecheck",
        "--lsp",
        "--enable-all-experimental-lsp-features"
      ]
    },
    {
      documentSelector: ["rb"]
    }
  );

  client.start();
  client.onReady().then(() => {
    const capabilities =
      client.initializeResult && client.initializeResult.capabilities;

    console.log({ capabilities });
  });
}

export function deactivate() {
  return client ? client.stop() : undefined;
}
