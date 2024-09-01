export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  userType: string;
  authentication: string;
}
