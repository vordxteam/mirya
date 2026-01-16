// types/expert.ts

export interface ExpertRecord {
  id: number;
  expert_id: number;
  step: string;
  key: string;
  metadata: string;
  created_at: string;
  updated_at: string;
}

export interface Expert {
  id: number;
  ip: string;
  email: string;
  first_name: string;
  last_name: string;
  status: string;
  created_at: string;
  updated_at: string;
  expert_rating_count: number;
  expert_rating_avg_rating: number | null;
  expert_records: ExpertRecord[];
}

export interface PaginationLinks {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginatedExperts {
  current_page: number;
  data: Expert[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLinks[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface ExpertsResponse {
  status: boolean;
  message: string;
  data: {
    expert: PaginatedExperts;
  };
}

export interface ExpertDetailsResponse {
  status: boolean;
  message: string;
  data: {
    expert: Expert;
  };
}