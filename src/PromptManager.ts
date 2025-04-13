import { PromptResolver } from "./PromptResolver";
import { PromptStore } from "./PromptStore";
import { PromptTemplate } from "./types/PromptTemplate";

export class PromptManager {
  private store: PromptStore;

  constructor() {
    this.store = new PromptStore();
  }

  public load(promptTemplate: PromptTemplate[]) {
    this.store.loadPrompts(promptTemplate);
  }

  public get(
    id: string,
    version: string,
    inputs: Record<string, string>
  ): string {
    const template = this.store.getPrompt(id, version);
    if (!template)
      throw new Error(`Prompt not found for ID: ${id} version: ${version}`);
    return PromptResolver.resolve(template, inputs);
  }
}
