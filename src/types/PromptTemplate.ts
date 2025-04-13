export interface PromptTemplate {
  id: string;
  version: string;
  template: string;
  inputVariables: string[];
  description?: string;
  tags?: string[];
  status?: "stable" | "beta" | "deprecated";
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
}
