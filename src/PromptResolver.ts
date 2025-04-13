import { PromptTemplate } from "./types/PromptTemplate";

export class PromptResolver {
  static resolve(
    promptTemplate: PromptTemplate,
    values: Record<string, string>
  ): string {
    let output = promptTemplate.template;
    for (const key of promptTemplate.inputVariables) {
      const value = values[key];
      if (!value) throw new Error(`Missing value for input variable: ${key}`);
      output = output.replace(new RegExp(`{${key}}`, "g"), value);
    }
    return output;
  }
}
