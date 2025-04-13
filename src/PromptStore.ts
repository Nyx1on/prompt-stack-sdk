import { PromptTemplate } from "./types/PromptTemplate";

export class PromptStore {
  private prompts: Record<string, Record<string, PromptTemplate>> = {};

  constructor(private promptData: PromptTemplate[] = []) {
    this.loadPrompts(promptData);
  }

  private loadPrompts(data: PromptTemplate[]) {
    for (const prompt of data) {
      if (!this.prompts[prompt.id]) this.prompts[prompt.id] = {};
      this.prompts[prompt.id][prompt.version] = prompt;
    }
  }

  public getPrompt(id: string, version:string = "latest"): PromptTemplate | null {
    const versions = this.prompts[id];
    if (!versions) return null;

    if (version === "latest") {
      const sorted = Object.entries(versions).sort((a, b) =>
        b[0].localeCompare(a[0])
      );
      return sorted[0][1];
    }

    return versions[version] || null;
  }
}
