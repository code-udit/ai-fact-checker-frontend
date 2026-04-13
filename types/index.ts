export type Claim = {
  claim: string;
  verdict: string;
  reason: string;
};

export type Highlight = {
  word: string;
  type: string;
};

export type ResultType = {
  score: number;
  verdict: string;
  summary: string;
  claims?: Claim[];
  highlights?: Highlight[];
  patterns?: string[];
};