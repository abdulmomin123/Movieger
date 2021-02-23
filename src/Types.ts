export interface ApiResponse {
  status: string;
  data: any;
  status_message: string;
}

// CSS types
export interface Sizes {
  phoneExtraSmall: '25em';
  phoneSmall: '31.25em';
  phone: '37.5em';
  tabPortSmall: '48.4375em';
  tabPort: '56.25em';
  tabLand: '75em';
  bigDesk: '112.5em';
}

export type Size = keyof Sizes;
